// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const host = "http://localhost:5000/";

// export const createFullRecipeThunk = createAsyncThunk(
//     'insertRecipe/createFullRecipe',
//     async (recipeData, { rejectWithValue }) => {
//         try {
//             await createFullRecipe(recipeData);
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// const initialState = {
//     loading: false,
//     error: null,
// };

// const insertRecipeSlice = createSlice({
//     name: 'insertRecipe',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(createFullRecipeThunk.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(createFullRecipeThunk.fulfilled, (state) => {
//                 state.loading = false;
//                 state.error = null;
//             })
//             .addCase(createFullRecipeThunk.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });

// export default insertRecipeSlice.reducer;

// const createRecipe = async (recipeData) => {
//     const response = await fetch(`${host}api/recipe/addrecipes`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             heading: recipeData.recipe_heading,
//             subheading: recipeData.recipe_subheading,
//             duration: recipeData.duration,
//             recipeimg: recipeData.recipe_image[0]
//         }),
//     });

//     if (!response.ok) {
//         throw new Error('Failed to create recipe');
//     }

//     const savedRecipe = await response.json();
//     return savedRecipe._id;
// };

// const createIngredients = async (recipeId, ingredients) => {
//     const response = await fetch(`${host}api/recipe/addingredients/${recipeId}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ allingredients: ingredients }),
//     });

//     if (!response.ok) {
//         throw new Error('Failed to add ingredients');
//     }

//     return await response.json();
// };

// const createUtensils = async (recipeId, utensils) => {
//     const response = await fetch(`${host}api/recipe/addutensils/${recipeId}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ allutensils: utensils }),
//     });

//     if (!response.ok) {
//         throw new Error('Failed to add utensils');
//     }

//     return await response.json();
// };

// const createInstructions = async (recipeId, instructions) => {
//     const response = await fetch(`${host}api/recipe/addrecipeinstructions/${recipeId}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ allinstructions: instructions }),
//     });

//     if (!response.ok) {
//         throw new Error('Failed to add instructions');
//     }

//     return await response.json();
// };

// const createNutritionalInfo = async (recipeId, nutrients) => {
//     const response = await fetch(`${host}api/recipe/addnutritionalinfo/${recipeId}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ allnutritions: nutrients }),
//     });

//     if (!response.ok) {
//         throw new Error('Failed to add nutritional info');
//     }

//     return await response.json();
// };

// const createFullRecipe = async (recipeData) => {
//     try {
//         const recipeId = await createRecipe(recipeData);
//         await createIngredients(recipeId, recipeData.ingredients);
//         await createUtensils(recipeId, recipeData.utensils);
//         await createInstructions(recipeId, recipeData.allinstructions);
//         await createNutritionalInfo(recipeId, recipeData.nutrients);
//         console.log('Recipe created successfully');
//     } catch (error) {
//         console.error('Error creating recipe:', error);
//     }
// };



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createFullRecipe } from '../../api/recipeAPI';

export const createFullRecipeThunk = createAsyncThunk(
    'insertRecipe/createFullRecipe',
    async (recipeData, { rejectWithValue }) => {
        try {
            await createFullRecipe(recipeData);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    loading: false,
    error: null,
};

const insertRecipeSlice = createSlice({
    name: 'insertRecipe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createFullRecipeThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createFullRecipeThunk.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(createFullRecipeThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default insertRecipeSlice.reducer;
