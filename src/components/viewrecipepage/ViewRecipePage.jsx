// import React, { useEffect } from 'react'
// import RecipeDetailsSection from './RecipeDetailsSection'
// import IngredientsSection from './IngredientsSection'
// import UtensilsSection from './UtensilsSection'
// import InstructionsSection from './InstructionsSection'
// import NutriInfoSection from './NutriInfoSection'
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchRecipeDetails } from '../../reduxslices/recipes/recipeDetailsSlice'



// function ViewRecipePage() {

//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);

//   console.log('ViewRecipePage component rendered');
//   console.log('useParams id:', id);

//   useEffect(() => {
//     console.log('useEffect called');
//     if (id) {
//       console.log('Dispatching fetchRecipeDetails with id:', id);
//       dispatch(fetchRecipeDetails(id))
//         .then(() => console.log('fetchRecipeDetails dispatch successful'))
//         .catch((err) => console.log('fetchRecipeDetails dispatch error:', err));
//     } else {
//       console.log('ID is undefined');
//     }
//   }, [id, dispatch]);

//   if (recipesdetails_loading) {
//     return <div>Loading...</div>;
//   }

//   if (recipesdetails_error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <div className="w-full relative mt-[136px] flex justify-center items-center">
//         <div className="w-[96%] h-full bg-alabaster">
//           {/* {setTimeout(() => {
//               (<RecipeDetailsSection/>
            
//               <IngredientsSection/>
//               <UtensilsSection/>
//               <InstructionsSection/>
//               <NutriInfoSection/>)
//             }, 1000)} */}
//           {/* {setTimeout(() => {recipesdetails && <div className="">
//             <RecipeDetailsSection />

//             <IngredientsSection />
//             <UtensilsSection />
//             <InstructionsSection />
//             <NutriInfoSection />
//           </div> }, 1000)} */}

//           {recipesdetails && <div className="">
//             <RecipeDetailsSection />

//             <IngredientsSection />
//             <UtensilsSection />
//             <InstructionsSection />
//             <NutriInfoSection />
//           </div> }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ViewRecipePage


import React, { useEffect, useState } from 'react'
import RecipeDetailsSection from './RecipeDetailsSection'
import IngredientsSection from './IngredientsSection'
import UtensilsSection from './UtensilsSection'
import InstructionsSection from './InstructionsSection'
import NutriInfoSection from './NutriInfoSection'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipeDetails } from '../../reduxslices/recipes/recipeDetailsSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function ViewRecipePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
  
  const [showSections, setShowSections] = useState(false);


  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeDetails(id))
        .then(() => console.log('fetchRecipeDetails dispatch successful'))
        .catch((err) => console.log('fetchRecipeDetails dispatch error:', err));
    } else {
      console.log('ID is undefined');
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (recipesdetails) {
      const timer = setTimeout(() => {
        setShowSections(true);
      }, 50); // Set delay time in milliseconds (1000ms = 1 second)

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or if recipesdetails changes
    }
  }, [recipesdetails]);

  if (recipesdetails_loading) {
    return <div className="w-full flex justify-center items-center h-[50px]">
    <FontAwesomeIcon  icon={faSpinner}  className=' motion-safe:animate-spin h-[45px] text-matterhorn '/> 
  </div>;
  }

  if (recipesdetails_error) {
    return <div>Error: {recipesdetails_error}</div>;
  }

  return (
    <div>
      <div className="w-full relative mt-[136px] flex justify-center items-center">
        <div className="w-[96%] h-full bg-alabaster">
          {showSections && recipesdetails ? (
            <div className="">
              <RecipeDetailsSection />
              <IngredientsSection />
              <UtensilsSection />
              <InstructionsSection />
              <NutriInfoSection />
            </div>
          ) : <div className="w-full flex justify-center items-center h-[50px]">
          <FontAwesomeIcon  icon={faSpinner}  className=' motion-safe:animate-spin h-[45px] text-matterhorn '/> 
        </div>}
        </div>
      </div>
    </div>
  )
}

export default ViewRecipePage
