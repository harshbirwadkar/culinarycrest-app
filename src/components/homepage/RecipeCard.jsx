import React, { useEffect } from 'react';
import { useLocation, Link ,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipeDetails } from '../../reduxslices/recipes/recipeDetailsSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



function RecipeCard(props) {
    const {recipe} = props

    if (!recipe) {
        return <div className="w-full flex justify-center items-center h-[50px]">
        <FontAwesomeIcon  icon={faSpinner}  className=' motion-safe:animate-spin h-[45px] text-matterhorn '/> 
      </div>; // or any other fallback UI
    }

    const dispatch = useDispatch();

    const getRecipeInfo = ()=>{
        dispatch(fetchRecipeDetails(recipe._id));
    }

    
  return (
    <div className='flex justify-center items-center'>
        {/* <div className="w-[360px] h-[470px] flex flex-col items-center rounded-[35px] bg-alabaster shadow-[4px_6px_25px_8px_rgba(0,0,0,0.25)] hover:shadow-[4px_6px_25px_8px_rgba(0,0,0,0.25)]"> */}
        <div className="w-[360px] h-[470px] flex flex-col items-center rounded-[35px] bg-alabaster shadow-[4px_4px_30px_2px_rgba(0,0,0,0.25)] transition ease-in-out delay-150 duration-500  hover:shadow-[4px_4px_30px_10px_rgba(0,0,0,0.25)]">
            {/* <img className='w-full h-[200px] rounded-t-[35px] object-cover' src="https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/super-cheesy-oven-baked-tomato-risotto-7284470f.jpg" alt="" /> */}
            <img className='w-full h-[200px] rounded-t-[35px] object-cover' src={recipe.recipeimg} alt="" />
            <div className="flex flex-col justify-center w-[322px]">
                <div className="flex flex-col h-[170px]">
                    <div className="text-2xl font-font3 font-bold text-matterhorn pt-5 pb-3 ">{recipe.heading}</div>
                    <div className="text-lg font-font3 font-medium pb-4">{recipe.subheading}</div>
                </div>
                <div className="flex flex-row h-[36px] mb-2" >
                    <svg className='w-[24px] h-[24px]' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"  xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <div className="text-lg font-font3 font-semibold mx-2 ">{recipe.duration} minutes</div>
                </div>
                <div className="flex justify-center items-center">
                    {/* <Link to={`/viewrecipe/${recipe._id}`} className='w-[283px] h-[40px] rounded-[15px] bg-medium-turquoise flex justify-center items-center font-bold text-lg text-matterhorn font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl  hover:text-alabaster ' onClick={()=>getRecipeInfo()} >View Recipe</Link> */}
                    <Link to={`/viewrecipe/${recipe._id}`} className='w-[283px] h-[40px] rounded-[15px] bg-medium-turquoise flex justify-center items-center font-bold text-lg text-matterhorn font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl  hover:text-alabaster '  >View Recipe</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecipeCard