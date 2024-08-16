// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   allrecipes: {
//   // value: [
//   //   {
//   //     duration: "30",
//   //     subheading: "with Pine Nuts, Mozzarella and Slow Roasted Tomatoes",
//   //     heading: "Rigatoni Caprese",
//   //     image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/rigatoni-caprese-58edf471.jpg"
  
//   //   },
//   //   {
//   //     duration: "20",
//   //     image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/creamy-caramelised-onion-linguine-3033edd4.jpg",
//   //     heading: "Creamy Caramelised Onion Linguine",
//   //     subheading: "with Hazelnut Crumb and Chives"
//   //   },
//   //   {
//   //     duration: "40",
//   //     subheading: "with Creamy Parsley Mash and Braised Fennel",
//   //     image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/pepper-crusted-venison-steak-and-red-wine-jus-68dcb2ef.jpg",
//   //     heading: "Pepper Crusted Venison Steak & Red Wine Jus"
  
  
//   //   },
//   //   {
//   //     heading: "Creamy Green Bean Rigatoni",
//   //     duration: "25",
//   //     image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/creamy-green-bean-rigatoni-0023a82e.jpg",
//   //     subheading: "with Lemony Courgette Salad"
  
//   //   },
//   //   {
//   //     duration: "20",
//   //     image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/creamy-truffle-and-mushroom-rigatoni-752779d8.jpg",
//   //     subheading: "with Tenderstem® Broccoli and Walnuts",
//   //     heading: "Creamy Truffle and Mushroom Rigatoni",
//   //   },
//   //   {
//   //     heading: "Sun-Dried Tomato Risotto",
//   //     duration: "40",
//   //     subheading: "with Roasted Asparagus and Baby Plum Tomatoes",
//   //     image: "https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/sun-dried-tomato-risotto-6b0bfeb8.jpg",
//   //   },
  
//   // ],
//   value : [],
//   loading : true,
//   error : null,
// }
// }
// const host = "http://localhost:5000/" 

// // export const allrecipesSlice = createSlice({
  
// //   name: 'allrecipes',
// //   initialState,
// //   reducers: {
// //     getallRecipes: async (state) => {

// //       try {
// //         const response = await fetch(`${host}api/recipe/getallrecipes`, {
// //           method: "GET", // *GET, POST, PUT, DELETE, etc.
// //           headers: {
// //             "Content-Type": "application/json",
// //             // 'Content-Type': 'application/x-www-form-urlencoded',
// //           }, 
// //         });
// //         const responseAllRecipes =  response.json(); // parses JSON response into native JavaScript objects
// //         console.log(responseAllRecipes)
// //       } catch (error) {
        
// //       }
      
// //     },
// //   },
// // })


// export const allrecipesSlice = createSlice({
//   name: 'allrecipes',
//   initialState,
//   reducers: {
//     getallRecipes: async (state) => {
//       state.allrecipes.loading = true;
//       state.allrecipes.error = null;

//       try {
//         const response = await fetch(`${host}api/recipe/getallrecipes`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch recipes');
//         }

//         const responseAllRecipes = await response.json();
//         state.allrecipes.value = responseAllRecipes;
//       } catch (error) {
//         state.allrecipes.error = error.message;
//       } finally {
//         state.allrecipes.loading = false;
//       }
//     },
//   },
// });


// // Action creators are generated for each case reducer function
// export const {getallRecipes } = allrecipesSlice.actions

// export default allrecipesSlice.reducer










// allRecipesSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const host = "http://localhost:5000/";

// export const fetchAllRecipes = createAsyncThunk(
//   'allrecipes/fetchAllRecipes',
//   async () => {
//     try {
//       const response = await fetch(`${host}api/recipe/getallrecipes`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch recipes');
//       }

//       return response.json();
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// const initialState = {
//   value: [],
//   loading: false,
//   error: null,
// };

// export const allrecipesSlice = createSlice({
//   name: 'allrecipes',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllRecipes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllRecipes.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.value = action.payload;
//       })
//       .addCase(fetchAllRecipes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default allrecipesSlice.reducer;









// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const host = "http://localhost:5000/";
// // const host = process.env.REACT_APP_BASE_CULINARYCREST_BACKEND_URL;
// // console.log("host" , process.env.REACT_APP_CULINARYCREST_BACKEND_URL)
// // process.env.REACT_APP_CULINARYCREST_BACKEND_URL

// // Add page and limit as parameters to fetchAllRecipes thunk
// export const fetchAllRecipes = createAsyncThunk(
//   'allrecipes/fetchAllRecipes',
//   async ({ page = 1, limit = 6 }, { getState }) => { // Default page to 1 and limit to 10
//     try {
//       const response = await fetch(`${host}api/recipe/getallrecipes?page=${page}&limit=${limit}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch recipes');
//       }

//       const data = await response.json();
//       const currentState = getState().allrecipes.value;
      
//       return page === 1 ? data : [...currentState, ...data]; // Concatenate new data with existing data only if it's not the first page
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// const initialState = {
//   value: [],
//   loading: false,
//   error: null,
//   page: 1, // Add page and limit to the state
//   limit: 10,
// };

// export const allrecipesSlice = createSlice({
//   name: 'allrecipes',
//   initialState,
//   reducers: {
//     // Reducer to increment the page number
//     nextPage(state) {
//       state.page += 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllRecipes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllRecipes.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.value = action.payload;
//       })
//       .addCase(fetchAllRecipes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { nextPage } = allrecipesSlice.actions;

// export default allrecipesSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const host = "http://localhost:5000/";
const host = import.meta.env.VITE_APP_CULINARYCREST_BACKEND_URL;

export const fetchAllRecipes = createAsyncThunk(
  'allrecipes/fetchAllRecipes',
  async ({ page = 1, limit = 6 }, { getState }) => {
    try {
      const response = await fetch(`${host}api/recipe/getallrecipes?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const data = await response.json();
      const currentState = getState().allrecipes.value;

      return page === 1 ? data : [...currentState, ...data]; // Concatenate new data with existing data only if it's not the first page
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const initialState = {
  value: [],
  loading: false,
  error: null,
  page: 1, // Add page and limit to the state
  limit: 6,
};

export const allrecipesSlice = createSlice({
  name: 'allrecipes',
  initialState,
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.value = action.payload;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { nextPage } = allrecipesSlice.actions;

export default allrecipesSlice.reducer;
