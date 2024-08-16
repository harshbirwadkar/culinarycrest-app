import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const host = "http://localhost:5000/"; 
const host = import.meta.env.VITE_APP_CULINARYCREST_BACKEND_URL;

export const fetchRecipeDetails = createAsyncThunk(
  'recipedetails/fetchRecipeDetails',
  async (id) => {
    try {
      const response = await fetch(`${host}api/recipe/getrecipe/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  value: [],
  loading: false,
  error: null,
};

export const recipedetailsSlice = createSlice({
  name: 'recipedetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.value = action.payload;
      })
      .addCase(fetchRecipeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipedetailsSlice.reducer;