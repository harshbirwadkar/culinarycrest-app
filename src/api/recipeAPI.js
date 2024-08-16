// const host = "http://localhost:5000/";
const host = import.meta.env.VITE_APP_CULINARYCREST_BACKEND_URL;

const createRecipe = async (recipeData) => {
    const formData = new FormData();
    formData.append('heading', recipeData.recipe_heading);
    formData.append('subheading', recipeData.recipe_subheading);
    formData.append('duration', recipeData.duration);
    formData.append('recipeimg', recipeData.recipe_image[0]); 


    const response = await fetch(`${host}api/recipe/addrecipes`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to create recipe');
    }

    const savedRecipe = await response.json();
    return savedRecipe._id;
};

const createIngredients = async (recipeId, allingredients) => {
    const formData = new FormData();
    formData.append('allingredients', JSON.stringify(allingredients));

    allingredients.forEach((ingredient, index) => {
        if (ingredient.img) {
            formData.append(`img`, ingredient.img[0]);
        }
    });


    const response = await fetch(`${host}api/recipe/addingredients/${recipeId}`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to add ingredients');
    }

    return await response.json();
};

// const createUtensils = async (recipeId, allutensils) => {
//     const formData = new FormData();
//     formData.append('allutensils', JSON.stringify(allutensils));
//     console.log("allutnesils formdata",JSON.stringify(allutensils))

//     const response = await fetch(`${host}api/recipe/addutensils/${recipeId}`, {
//         method: 'POST',
//         body: formData,
//     });

//     if (!response.ok) {
//         throw new Error('Failed to add utensils');
//     }

//     return await response.json();
// };


const createUtensils = async (recipeId, allutensils) => {
    const response = await fetch(`${host}api/recipe/addutensils/${recipeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ allutensils }),
    });

    if (!response.ok) {
        throw new Error('Failed to add utensils');
    }

    return await response.json();
};

const createInstructions = async (recipeId, allinstructions) => {
    const formData = new FormData();
    formData.append('allinstructions', JSON.stringify(allinstructions));

    allinstructions.forEach((instruction, index) => {
        if (instruction.img) {
            formData.append(`img`, instruction.img[0]);
        }
    });

    const response = await fetch(`${host}api/recipe/addrecipeinstructions/${recipeId}`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to add instructions');
    }

    return await response.json();
};

// const createNutritionalInfo = async (recipeId, allnutritions) => {
//     const formData = new FormData();
//     formData.append('allnutritions', JSON.stringify(allnutritions));

//     const response = await fetch(`${host}api/recipe/addnutritionalinfo/${recipeId}`, {
//         method: 'POST',
//         body: formData,
//     });

//     if (!response.ok) {
//         throw new Error('Failed to add nutritional info');
//     }

//     return await response.json();
// };

const createNutritionalInfo = async (recipeId, allnutritions) => {
    const response = await fetch(`${host}api/recipe/addnutritionalinfo/${recipeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ allnutritions }),
    });

    if (!response.ok) {
        throw new Error('Failed to add nutritional info');
    }

    return await response.json();
};


export const createFullRecipe = async (recipeData) => {
    try {
        const recipeId = await createRecipe(recipeData);
        await createIngredients(recipeId, recipeData.allingredients);
        await createUtensils(recipeId, recipeData.allutensils);
        await createInstructions(recipeId, recipeData.allinstructions);
        await createNutritionalInfo(recipeId, recipeData.allnutritions);
        console.log('Recipe created successfully');
    } catch (error) {
        console.error('Error creating recipe:', error);
    }
};
