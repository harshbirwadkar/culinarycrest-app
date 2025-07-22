import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const host = "http://localhost:5000/"; 
const host = import.meta.env.VITE_APP_CULINARYCREST_BACKEND_URL;

// Async thunk to fetch top 4 recipes
export const fetchTopRecipes = createAsyncThunk(
  'toprecipes/fetchTopRecipes',
  async () => {
    try {
      const response = await fetch(`${host}api/recipe/toprecipes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch top recipes');
      }

      return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  value: [],    // Store the top recipes
  loading: false,
  error: null,
};

export const toprecipesSlice = createSlice({
  name: 'toprecipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.value = action.payload; // Store top recipes
      })
      .addCase(fetchTopRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default toprecipesSlice.reducer;
