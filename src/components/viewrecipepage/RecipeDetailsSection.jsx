import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function RecipeDetailsSection() {
  const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
  const recipeDetail = recipesdetails.recipe_detail;
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
        <div className="px-[65px] py-[55px]">
            {/* <h2 className='text-[55px] text-matterhorn font-font3 font-bold'>Rigatoni Caprese</h2> */}
            <h2 className='text-[55px] text-matterhorn font-font3 font-bold'>{recipeDetail.heading}</h2>
            {/* <div className="text-4xl text-matterhorn font-font3 font-medium ">with Pine Nuts, Mozzarella and Slow Roasted Tomatoes</div> */}
            <div className="text-4xl text-matterhorn font-font3 font-medium ">{recipeDetail.subheading}</div>
            <div className="flex flex-row h-[36px] mb-[35px] mt-[40px]" >
                    <svg className='w-[30px] h-[30px] text-matterhorn' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"  xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <div className="text-2xl font-font3 font-medium mx-2 text-matterhorn">{recipeDetail.duration} Minutes</div>
                </div>
            {/* <img className='w-full h-[530px] object-cover rounded-[15px]' src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_auto,w_1900/hellofresh_s3/image/rigatoni-caprese-58edf471.jpg" alt="" /> */}
            <img className='w-full h-[530px] object-cover rounded-[15px]' src={recipeDetail.recipeimg} alt="" />
        </div>
    </div>
  )
}

export default RecipeDetailsSection