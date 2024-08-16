// import { configureStore } from '@reduxjs/toolkit'
// import allRecipesSlice from '../reduxslices/recipes/allRecipesSlice'
// export const store = configureStore({
//   reducer: {
//     getallrecipes : allRecipesSlice ,
//   },
// })



// store.js
import { configureStore } from '@reduxjs/toolkit'
import allrecipesReducer from '../reduxslices/recipes/allRecipesSlice'
import recipedetailsReducer from '../reduxslices/recipes/recipeDetailsSlice'
import insertRecipeReducer from '../reduxslices/recipes/insertRecipeSlice'


export const store = configureStore({
  reducer: {
    allrecipes: allrecipesReducer,
    recipedetails: recipedetailsReducer,
    insertRecipe: insertRecipeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
