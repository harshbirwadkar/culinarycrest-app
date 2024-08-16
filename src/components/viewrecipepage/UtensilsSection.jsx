import React from 'react'
import { useSelector } from 'react-redux'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function UtensilsSection() {
  const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
  const allUtensils = recipesdetails.recipes_utensil[0].allutensils;
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
      <div className="px-[65px]">
        <div className="w-full h-[4px] bg-mid-line-color"></div>
        <h3 className='flex justify-center w-full text-[40px] text-matterhorn mt-[60px] mb-[40px] font-semibold font-font1'>Utensils</h3>
        <div className="flex flex-row justify-center items-center mb-[85px] flex-wrap">
          {allUtensils.length > 0 ? (
            allUtensils.map((utensil) => (
              <div key={utensil._id} className=" font-medium text-xl text-matterhorn font-font3 mx-4">{utensil.name}</div>
            ))
          ) : (
            <p>{recipesdetails_loading ? 'Loading...' : (recipesdetails_error ? 'Error fetching utensils.' : 'No utensils found.')}</p>
          )}
          {/* <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Saucepan</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Saucepan</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Saucepan</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Aluminum Foil</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Saucepan</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Aluminum Foil</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Saucepan</div>
                <div className=" font-medium text-xl text-matterhorn font-font3 mx-4">Saucepan</div> */}
        </div>
        <div className="w-full h-[4px] bg-mid-line-color"></div>
      </div>
    </div>
  )
}

export default UtensilsSection