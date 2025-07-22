const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();
// Import your models
const Recipe = require('./models/RecipeDetails');
const Ingredients = require('./models/Ingredients');
const NutriInfo = require('./models/NutriInfo');
const Instructions = require('./models/RecipeInstruction');
const Utensils = require('./models/Utensils');

// Load the raw JSON (from Firestore export)
const data = JSON.parse(fs.readFileSync('./jsontext2.txt', 'utf-8'));

// Connect to MongoDB
mongoose.connect(process.env.CULINARYCREST_APP_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function insertAllRecipes() {
  try {
    for (const [id, recipeData] of Object.entries(data)) {
      const r = recipeData;
      let recipeDoc;
      try {
        // 1. Insert recipeDetail (parent)
        recipeDoc = await Recipe.create({
          heading: r.heading,
          subheading: r.subheading,
          duration: r.duration ? r.duration.toString() : '',
          recipeimg: r.image || ''
        });
      } catch (err) {
        console.error(`❌ Failed to insert recipeDetail for ${r.heading}:`, err);
        continue;
      }
      const recipeId = recipeDoc._id;

      // 2. Insert Ingredients
      try {
        if (r.ingredients && Array.isArray(r.ingredients)) {
          const allingredients = r.ingredients.map(ing => ({
            img: ing.img || '',
            name: ing.name,
            quantity: ing.quantity
          }));
          await Ingredients.create({ recipe_id: recipeId, allingredients });
        }
      } catch (err) {
        console.error(`❌ Failed to insert ingredients for ${r.heading}:`, err);
      }

      // 3. Insert Nutrition Info
      try {
        if (r.nutrition) {
          await NutriInfo.create({
            recipe_id: recipeId,
            allnutritions: {
              energy_kJ: parseFloat(r.nutrition.energyKJ) || 0,
              energy_kcal: parseFloat(r.nutrition.energyKcal) || 0,
              fat: parseFloat(r.nutrition.fat) || 0,
              of_which_saturates: parseFloat(r.nutrition.saturates) || 0,
              carbohydrate: parseFloat(r.nutrition.carbohydrates) || 0,
              of_which_sugars: parseFloat(r.nutrition.sugars) || 0,
              protein: parseFloat(r.nutrition.protein) || 0,
              salt: parseFloat(r.nutrition.salt) || 0,
              multiplier: parseFloat(r.nutrition.multiplier) || 1
            }
          });
        }
      } catch (err) {
        console.error(`❌ Failed to insert nutrition info for ${r.heading}:`, err);
      }

      // 4. Insert Instructions
      try {
        if (r.instructions && Array.isArray(r.instructions)) {
          const allinstructions = r.instructions.map(step => ({
            instruction: step.instruction,
            img: step.img || ''
          }));
          await Instructions.create({ recipe_id: recipeId, allinstructions });
        }
      } catch (err) {
        console.error(`❌ Failed to insert instructions for ${r.heading}:`, err);
      }

      // 5. Insert Utensils
      try {
        if (r.utensils && Array.isArray(r.utensils)) {
          const allutensils = r.utensils.map(u => ({ name: u.name || u }));
          await Utensils.create({ recipe_id: recipeId, allutensils });
        }
      } catch (err) {
        console.error(`❌ Failed to insert utensils for ${r.heading}:`, err);
      }

      console.log(`✅ Inserted recipe and all subdocuments for: ${r.heading}`);
    }
    console.log('🎉 All recipes and related data inserted successfully!');
  } catch (err) {
    console.error('❌ Error during insertion:', err);
  } finally {
    mongoose.disconnect();
  }
}


insertAllRecipes();
