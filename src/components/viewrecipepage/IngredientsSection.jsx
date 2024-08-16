import React from 'react'
import IngredientsCardSection from './IngredientsCardSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'




function IngredientsSection() {
  const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
  const allIngredients = recipesdetails.recipes_ingredient[0].allingredients;

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
      <div className="w-full">
        <h3 className='flex justify-center w-full text-[40px] text-matterhorn mb-[60px] font-semibold  font-font1'>Ingredients</h3>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 gap-20 max-w-[1310px] mb-[90px]">

            {allIngredients.length > 0 ? (
              allIngredients.map((ingredient) => (
                <IngredientsCardSection key={ingredient._id} ingredient={ingredient} />
              ))
            ) : (
              <p>{recipesdetails_loading ? 'Loading...' : (recipesdetails_error ? 'Error fetching ingredients.' : 'No ingredients found.')}</p>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientsSection