const express = require('express')
const router = express.Router()
const Recipe = require('../models/RecipeDetails')
const Ingredient = require('../models/Ingredients')
const Utensil = require('../models/Utensils')
const RecipeInstruction = require('../models/RecipeInstruction')
const RecipeNutritionalInfo = require('../models/NutriInfo')
const { body, validationResult } = require('express-validator');

// import { upload } from '../middlewares/multer.middleware'
// import { UploadCloudinary } from '../utils/cloudinary.util'

const { upload } = require('../middlewares/multer.middleware');
const { UploadCloudinary } = require('../utils/cloudinary.util');

const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CULINARYCREST_APP_CLOUDINARY_CLOUDNAME,
    api_key: process.env.CULINARYCREST_APP_CLOUDINARY_APIKEY,
    api_secret: process.env.CULINARYCREST_APP_CLOUDINARY_APISECRET
  });
  
  // Configure multer storage engine for Cloudinary
  // const storage = new CloudinaryStorage({
  //   cloudinary: cloudinary,
  //   params: {
  //     folder: 'recipes', // Folder name in Cloudinary where images will be stored
  //     format: async (req, file) => {
  //       // Determine the format based on the uploaded file's mimetype
  //       if (file.mimetype === 'image/jpeg') {
  //         return 'jpg';
  //       } else if (file.mimetype === 'image/png') {
  //         return 'png';
  //       } else if (file.mimetype === 'image/gif') {
  //         return 'gif';
  //       } else {
  //         // Default format if not recognized
  //         return 'jpg';
  //       }
  //     }, // Supports promises as well
  //     public_id: (req, file) => 'computed-filename-using-request', // Adjust as per your naming convention
  //   },
  // });
  // const parser = multer({ storage: storage });

// post routes 

// ROUTE1 : save recipe initial details  using POST: http://localhost:5000/api/recipe/addrecipes 
// router.post('/addrecipes', [
//     body('heading', 'Enter recipe name with more than or equal to two characters').isLength({ min: 2 }),
//     body('duration', 'Enter a vaild duration').isLength({ min: 1 })
// ], async (req, res) => {
//     // destructing the req.body 
//     const { heading, subheading, duration , recipeimg} = req.body
//     // checking for validation errors if exists then sending bad request and error 
//     const errors = validationResult(req);
//     try {
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).json({ err: err.message })
//     }
//     try {
//         // saving the data in the database with user id as well
//         let recipe = new Recipe({
//             heading, subheading, duration , recipeimg
//         })
//         let savedRecipe = await recipe.save()
//         res.json(savedRecipe)
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).json({ err: err.message })
//     }

// })


// ROUTE1 : save recipe initial details  using POST: http://localhost:5000/api/recipe/addrecipes 
// router.post('/addrecipes', parser.single('recipeimg'), [
//   body('heading', 'Enter recipe name with more than or equal to two characters').isLength({ min: 2 }),
//   body('duration', 'Enter a valid duration').isLength({ min: 1 })
// ], async (req, res) => {
//   const { heading, subheading, duration } = req.body;
//   const recipeimg = req.file ? req.file.path : '';

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const recipe = new Recipe({ heading, subheading, duration, recipeimg });
//     const savedRecipe = await recipe.save();
//     res.json(savedRecipe);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ err: err.message });
//   }
// });






// ROUTE1 : save recipe initial details  using POST: http://localhost:5000/api/recipe/addrecipes 
router.post('/addrecipes', upload.fields([
  {
    name:'recipeimg',
    maxCount:1
  }
]), [
  body('heading', 'Enter recipe name with more than or equal to two characters').isLength({ min: 2 }),
  body('duration', 'Enter a valid duration').isLength({ min: 1 })
], async (req, res) => {
  const { heading, subheading, duration } = req.body;
  // const recipeimg = req.file ? req.file.path : '';
  const recipeimgPath = req.files?.recipeimg[0]?.path
  const recipeimg = await UploadCloudinary(recipeimgPath) 

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const recipe = new Recipe({ heading, subheading, duration, recipeimg : recipeimg?.url });
    // const recipe = new Recipe({ heading, subheading, duration, recipeimg : '' });
    const savedRecipe = await recipe.save();
    res.json(savedRecipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ err: err.message });
  }
});





// // ROUTE2 : save recipes ingredients using POST: http://localhost:5000/api/recipe/addingredients/:id
// router.post('/addingredients/:id', [
//     body('allingredients.*.name', 'Enter ingredients name with more than or equal to two characters').isLength({ min: 2 }),
//     body('allingredients.*.quantity', 'Enter a vaild duration').isLength({ min: 1 })
// ], async (req, res) => {
//     // destructing the req.body 
//     const { allingredients } = req.body
//     console.log("type of allingredients :" , typeof allingredients)
//     console.log("allingredients :" , allingredients)
//     let recipe_id =  req.params.id
//     // checking for validation errors if exists then sending bad request and error 
//     const errors = validationResult(req);
//     try {
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).json({ err: err.message })
//     }
//     try {
//         // saving the data in the database with user id as well
//         let ingredient = new Ingredient({
//             recipe_id, allingredients
//         })
//         let savedIngredient = await ingredient.save()
//         res.json(savedIngredient)
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).json({ err: err.message })
//     }

// })



// ROUTE2 : save recipes ingredients using POST: http://localhost:5000/api/recipe/addingredients/:id
// router.post('/addingredients/:id', parser.array('allingredients[].img'), [
//   body('allingredients.*.name', 'Enter ingredients name with more than or equal to two characters').isLength({ min: 2 }),
//   body('allingredients.*.quantity', 'Enter a valid quantity').isLength({ min: 1 })
// ], async (req, res) => {
//   const { allingredients } = req.body;
//   console.log(allingredients.img);
//   const recipe_id = req.params.id;
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   if (!allingredients) {
//     return res.status(400).json({ errors: [{ msg: 'All ingredients are required' }] });
//   }

//   try {
//     const ingredientsWithImages = await Promise.all(allingredients.map(async (ingredient, index) => {
//       if (req.files && req.files[index]) {
//         const uploaded = await cloudinary.uploader.upload(req.files[index].path);
//         ingredient.img = uploaded.secure_url;
//       }
//       return ingredient;
//     }));

//     const ingredient = new Ingredient({ recipe_id, allingredients: ingredientsWithImages });
//     const savedIngredient = await ingredient.save();
//     res.json(savedIngredient);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ err: err.message });
//   }
// });


// ROUTE2 : save recipes ingredients using POST: http://localhost:5000/api/recipe/addingredients/:id
// router.post('/addingredients/:id', upload.fields([
//   {
//     name : /img/,
//     maxCount : 50
//   }
// ]), [
//   body('allingredients.*.name', 'Enter ingredients name with more than or equal to two characters').isLength({ min: 2 }),
//   body('allingredients.*.quantity', 'Enter a valid quantity').isLength({ min: 1 })
// ], async (req, res) => {
//   const { allingredients } = req.body;
//   console.log("req.body :",req.body);
//   console.log("allingredients :",typeof allingredients);
//   console.log("allingredients files :",req.files);
//   const recipe_id = req.params.id;
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   if (!allingredients) {
//     return res.status(400).json({ errors: [{ msg: 'All ingredients are required' }] });
//   }

//   let reqimgarr = [] ;
//   for(i=0 ;i<req.files.length ; i++){
//     let reqimg = req.files.img[i].path
//     reqimgarr.push(reqimg)
//   }
//   for (var i = 0; i < reqimgarr.length; i++) {
//     console.log("reqimg :",reqimgarr[i])
// }

//   // try {
//   //   const ingredientsWithImages = await Promise.all(allingredients.map(async (ingredient, index) => {
//   //     if (req.files && req.files[index]) {
//   //       const uploaded = await cloudinary.uploader.upload(req.files[index].path);
//   //       ingredient.img = uploaded.secure_url;
//   //     }
//   //     return ingredient;
//   //   }));

//   //   const ingredient = new Ingredient({ recipe_id, allingredients: ingredientsWithImages });
//   //   const savedIngredient = await ingredient.save();
//   //   res.json(savedIngredient);
//   // } catch (err) {
//   //   console.error(err.message);
//   //   res.status(500).json({ err: err.message });
//   // }
// });



// ROUTE2 : save recipes ingredients using POST: http://localhost:5000/api/recipe/addingredients/:id
router.post('/addingredients/:id',upload.fields([
    {
      name : "img",
      maxCount : 50
    }
  ]), [
  body('allingredients.*.name', 'Enter ingredients name with more than or equal to two characters').isLength({ min: 2 }),
  body('allingredients.*.quantity', 'Enter a valid quantity').isLength({ min: 1 })
], async (req, res) => {
  try {
    allingredients = JSON.parse(req.body.allingredients);
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: 'Invalid ingredients data' }] });
  }
  const allingredientsCopy = JSON.parse(JSON.stringify(allingredients));

  const recipe_id = req.params.id;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (!allingredients) {
    return res.status(400).json({ errors: [{ msg: 'All ingredients are required' }] });
  }


try {
  for(i=0 ;i<req.files.img.length ; i++){
    let imgPath = req.files.img[i].path

    const ingredientimg = await UploadCloudinary(imgPath)
    allingredientsCopy[i].img = ingredientimg?.url


  }
 

  // const recipe = new Recipe({ heading, subheading, duration, recipeimg : recipeimg?.url });
} catch (err) {
  console.error(err.message);
  res.status(500).json({ err: err.message });
}

try {
          // saving the data in the database with user id as well
          let ingredient = new Ingredient({
              recipe_id, allingredients: allingredientsCopy
          })
          let savedIngredient = await ingredient.save()
          res.json(savedIngredient)
      } catch (err) {
          console.log(err.message)
          res.status(500).json({ err: err.message })
      }

});







// ROUTE3 : save recipes utensils using POST: http://localhost:5000/api/recipe/addutensils/:id
router.post('/addutensils/:id', [
    body('allutensils.*.name', 'Enter utensils name with more than or equal to two characters').isLength({ min: 2 }),
], async (req, res) => {
    // destructing the req.body 
    // console.log("req.body.allutensils  ",req.body)
    // try {
    //   allutensils = JSON.parse(req.body.allutensils);
    // } catch (error) {
    //   return res.status(400).json({ errors: [{ msg: 'Invalid ingredients data' }] });
    // }
    // console.log("allutnesils :", allutensils)
    const { allutensils } = req.body
    let recipe_id =  req.params.id
    // checking for validation errors if exists then sending bad request and error 
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }
    try {
        // saving the data in the database with user id as well
        let utensil = new Utensil({
            recipe_id, allutensils 
        })
        let savedUtensil = await utensil.save()
        res.json(savedUtensil)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }

})


// // ROUTE4 : save recipes instructions using POST: http://localhost:5000/api/recipe/addrecipeinstructions/:id
// router.post('/addrecipeinstructions/:id', [
//     body('allinstructions.*.instruction', 'Enter instruction with more than or equal to two characters').isLength({ min: 2 }),
// ], async (req, res) => {
//     // destructing the req.body 
//     const { allinstructions } = req.body
//     let recipe_id =  req.params.id
//     // checking for validation errors if exists then sending bad request and error 
//     const errors = validationResult(req);
//     try {
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).json({ err: err.message })
//     }
//     try {
//         // saving the data in the database with user id as well
//         let recipe_instruction = new RecipeInstruction({
//             recipe_id, allinstructions 
//         })
//         let savedRecipe_instruction = await recipe_instruction.save()
//         res.json(savedRecipe_instruction)
//     } catch (err) {
//         console.log(err.message)
//         res.status(500).json({ err: err.message })
//     }

// })


// ROUTE4 : save recipes instructions using POST: http://localhost:5000/api/recipe/addrecipeinstructions/:id
router.post('/addrecipeinstructions/:id', upload.fields([
  {
    name : "img",
    maxCount : 50
  }
]), [
  body('allinstructions.*.instruction', 'Enter instruction with more than or equal to two characters').isLength({ min: 2 }),
], async (req, res) => {


  try {
    allinstructions = JSON.parse(req.body.allinstructions);
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: 'Invalid ingredients data' }] });
  }
  const allinstructionsCopy = JSON.parse(JSON.stringify(allinstructions));


  // const { allinstructions } = req.body;
  const recipe_id = req.params.id;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (!allinstructions) {
    return res.status(400).json({ errors: [{ msg: 'All instructions are required' }] });
  }

  
try {
  for(i=0 ;i<req.files.img.length ; i++){
    let imgPath = req.files.img[i].path
    const instructionsimg = await UploadCloudinary(imgPath)
    allinstructionsCopy[i].img = instructionsimg?.url
    // allinstructionsCopy[i].img = "instructionsimg?.url"
  }
  

  // const recipe = new Recipe({ heading, subheading, duration, recipeimg : recipeimg?.url });
} catch (err) {
  console.error(err.message);
  res.status(500).json({ err: err.message });
}

try {
          // saving the data in the database with user id as well
          let recipe_instruction = new RecipeInstruction({
              recipe_id, allinstructions: allinstructionsCopy
          })
          let savedIntructions = await recipe_instruction.save()
          res.json(savedIntructions)
      } catch (err) {
          console.log(err.message)
          res.status(500).json({ err: err.message })
      }




  // try {
  //   const instructionsWithImages = await Promise.all(allinstructions.map(async (instruction, index) => {
  //     if (req.files && req.files[index]) {
  //       const uploadedImages = await Promise.all(req.files.map(async (file) => {
  //         const uploaded = await cloudinary.uploader.upload(file.path);
  //         return uploaded.secure_url;
  //       }));
  //       instruction.images = uploadedImages;
  //     }
  //     return instruction;
  //   }));

  //   const recipe_instruction = new RecipeInstruction({ recipe_id, allinstructions: instructionsWithImages });
  //   const savedRecipe_instruction = await recipe_instruction.save();
  //   res.json(savedRecipe_instruction);
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(500).json({ err: err.message });
  // }
});







// ROUTE 5 : save recipes nutritional information using POST: http://localhost:5000/api/recipe/addnutritionalinfo/:id
router.post('/addnutritionalinfo/:id', [
    body('allnutritions.*.energy_kJ', 'Enter a valid energy_kJ').notEmpty().isNumeric(),
    body('allnutritions.*.energy_kcal', 'Enter a valid energy_kcal').notEmpty().isNumeric(),
    body('allnutritions.*.fat', 'Enter a valid fat').notEmpty().isNumeric(),
    body('allnutritions.*.of_which_saturates', 'Enter a valid of_which_saturates').notEmpty().isNumeric(),
    body('allnutritions.*.carbohydrate', 'Enter a valid carbohydrate').notEmpty().isNumeric(),
    body('allnutritions.*.of_which_sugars', 'Enter a valid of_which_sugars').notEmpty().isNumeric(),
    body('allnutritions.*.protein', 'Enter a valid protein').notEmpty().isNumeric(),
    body('allnutritions.*.salt', 'Enter a valid salt').notEmpty().isNumeric(),
    body('allnutritions.*.multiplier', 'Enter a valid multiplier').notEmpty().isNumeric()
], async (req, res) => {
    // destructing the req.body 
    // console.log("allnutritions reqbody" , req.body)
    // try {
    //   allnutritions = JSON.parse(req.body.allnutritions);
    //   console.log("allnutritions :" ,allnutritions)
    // } catch (error) {
    //   return res.status(400).json({ errors: [{ msg: 'Invalid ingredients data' }] });
    // }
    const { allnutritions } = req.body
    let recipe_id =  req.params.id
    // checking for validation errors if exists then sending bad request and error 
    const errors = validationResult(req);
    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }
    try {
        // saving the data in the database with user id as well
        let nutri_info = new RecipeNutritionalInfo({
            recipe_id, allnutritions 
        })
        let saved_Nutri_info = await nutri_info.save()
        res.json(saved_Nutri_info)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ err: err.message })
    }

})

// get routes

// ROUTE6 : gets all the recipes using GET: http://localhost:5000/api/recipe/getallrecipes 
// router.get('/getallrecipes', async (req, res) => {
//     try {
//         // Find all recipes
//         const recipes = await Recipe.find();
//         res.json(recipes);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server Error');
//     }
// })

// router.get('/getallrecipes/:page/:limit', async (req, res) => {
//     try {
//         const page = parseInt(req.params.page) || 1; // Get the page number from URL parameter, default to 1
//         const limit = parseInt(req.params.limit) || 6; // Get the limit per page from URL parameter, default to 10

//         // Calculate the number of documents to skip
//         const skip = (page - 1) * limit;

//         // Find all recipes with pagination
//         const recipes = await Recipe.find()
//             .skip(skip)
//             .limit(limit);

//         res.json(recipes);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server Error');
//     }
// })




// ROUTE6 : gets all the recipes using GET: http://localhost:5000/api/recipe/getallrecipes 
router.get('/getallrecipes', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Get the page number from query parameter, default to 1
        const limit = parseInt(req.query.limit) || 6; // Get the limit per page from query parameter, default to 6
        
        // Calculate the number of documents to skip
        const skip = (page - 1) * limit;

        // Find all recipes with pagination
        const recipes = await Recipe.find()
            .skip(skip)
            .limit(limit);

        res.json(recipes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});



// ROUTE7: Get all the details about the specific recipe using the ID of the recipe using GET: http://localhost:5000/api/recipe/getrecipe/:id
router.get('/getrecipe/:id', async (req, res) => {
    try {
        const recipeId = req.params.id;

        const recipe_detail1 = await Recipe.findByIdAndUpdate(
          recipeId, 
          { $inc: { views: 1 } }, // Increment the views by 1
          { new: true } // Return the updated document
      );

      // Check if the recipe exists
      if (!recipe_detail1) {
          return res.status(404).json({ msg: 'Recipe not found' });
      }

        // Execute all queries simultaneously
        const [recipe_detail , recipes_ingredient, recipes_utensil, recipes_instruction, recipes_nutritionalInfo] = await Promise.all([
            Recipe.findById(recipeId) ,
            Ingredient.find({ recipe_id: recipeId }),
            Utensil.find({ recipe_id: recipeId }),
            RecipeInstruction.find({ recipe_id: recipeId }),
            RecipeNutritionalInfo.find({ recipe_id: recipeId })
        ]);

        res.json({ recipe_detail , recipes_ingredient, recipes_utensil, recipes_instruction, recipes_nutritionalInfo });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// ROUTE8: Get all the recipes with the most views in descending order using GET: http://localhost:5000/api/recipe/toprecipes
router.get('/toprecipes', async (req, res) => {
  try {
      // Find the top 4 recipes, sorted by views in descending order
      const topRecipes = await Recipe.find()
          .sort({ views: -1 })  // Sort by views in descending order
          .limit(4);             // Limit the results to 4

      // Return the top recipes
      res.json(topRecipes);
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
  }
});



module.exports = router