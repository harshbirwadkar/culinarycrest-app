import React, { useEffect , useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { getallRecipes } from '../../reduxslices/recipes/allRecipesSlice'
import { fetchAllRecipes , nextPage  } from '../../reduxslices/recipes/allRecipesSlice'
import { fetchRecipeDetails } from '../../reduxslices/recipes/recipeDetailsSlice'
import RecipeCard from './RecipeCard'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import {faSpinnerThird} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AllRecipeSection() {
  const dispatch = useDispatch();

  
  // const [limit, setLimit] = useState(6);

  // const { value: allrecipes, loading: recipes_loading, error: recipes_error } = useSelector((state) => state.allrecipes);
  const { value: allrecipes, loading: recipes_loading, error: recipes_error, page }  = useSelector((state) => state.allrecipes);
  const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
 
  // const [allRecipes, setallRecipes] = useState(null)
  // setTimeout(() => {
  //   setallRecipes(allrecipes)
  //   console.log("allRecipes:", allRecipes);
  // }, 1000);

  useEffect(() => {
    dispatch(fetchAllRecipes({ page, limit: 6 }));
    dispatch(fetchRecipeDetails('662805b5028e75803f4eb1f3'));
    
  }, [dispatch , page ]);
  
  // useEffect(() => {
  //   setallRecipes([...allRecipes,...allrecipes])
  // }, [page ]);

  // useEffect(() => {
  //   dispatch(getallRecipes());
  // }, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(nextPage()); // Increment the page number 
  };

  

  return (
    <div>
      <div className="" id='allrecipe-section'>
      {/* <div className="min-h-[1388px]"> */}
        <h2 className='flex w-full px-20 text-4xl font-font1 font-bold text-matterhorn py-16'>All Recipes</h2>
        <div className="flex justify-center items-center flex-col">
          <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-[1310px]">
            {/* {allrecipes.map((recipe)=> {
                    return <RecipeCard key={recipe.heading} recipe={recipe} />
                  })} */}
            {allrecipes.length > 0 ? (
              allrecipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))
            ) : (
              <div>{recipes_loading ? <div className="w-full flex justify-center items-center h-[50px]">
                <FontAwesomeIcon  icon={faSpinner}  className=' motion-safe:animate-spin h-[45px] text-matterhorn '/> 
              </div> : (recipes_error ? 'Error fetching recipes.' : 'No recipes found.')}</div>
            )}
          </div>
          <div className="h-[60px] w-[270px] rounded-[20px] my-[70px] flex justify-center items-center text-xl text-matterhorn font-bold font-font2 bg-medium-turquoise transition ease-in-out delay-150 duration-300 hover:backdrop-blur-xl hover:shadow-[4px_4px_30px_2px_rgba(0,0,0,0.25)]  " onClick={()=>handleLoadMoreClick()}>Load More</div>
        </div>
        
        
      </div>
    </div>
  )
}

export default AllRecipeSection







// AllRecipeSection.jsx
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchAllRecipes } from '../../reduxslices/recipes/allRecipesSlice'
// import RecipeCard from './RecipeCard'

// function AllRecipeSection() {
//   const dispatch = useDispatch();
//   const { value: allrecipes, loading: recipes_loading, error: recipes_error } = useSelector((state) => state.allrecipes);

//   useEffect(() => {
//     dispatch(fetchAllRecipes());
//   }, [dispatch]);

//   return (
//     <div>
//       <div className="min-h-[1388px]">
//         <h2 className='flex w-full px-20 text-4xl font-font1 font-bold text-matterhorn py-16'>All Recipes</h2>
//         <div className="flex justify-center items-center flex-col">
//           <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-[1310px]">
//             {allrecipes.length > 0 ? (
//               allrecipes.map((recipe) => (
//                 <RecipeCard key={recipe.id} recipe={recipe} />
//               ))
//             ) : (
//               <p>{recipes_loading ? 'Loading...' : (recipes_error ? 'Error fetching recipes.' : 'No recipes found.')}</p>
//             )}
//           </div>
//           <div className="h-[60px] w-[270px] rounded-[20px] my-[70px] flex justify-center items-center text-xl text-matterhorn font-bold font-font2 bg-medium-turquoise transition-transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-y-105  duration-300">Load More</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AllRecipeSection;
