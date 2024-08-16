import React from 'react'
import InstructionsCard from './InstructionsCard'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';




function InstructionsSection() {

  const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
  const allInstructions = recipesdetails.recipes_instruction[0].allinstructions;

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
      <div className="flex flex-col justify-center items-center">
        <h3 className='flex justify-center w-full text-[40px] text-matterhorn my-[60px] font-semibold font-font1'>Intructions</h3>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-[1240px] mb-[60px]">

            {allInstructions.length > 0 ? (
              allInstructions.map((instruction, index) => (
                <InstructionsCard key={instruction._id} instruction={instruction.instruction} img={instruction.img} step={index + 1} />
              ))
            ) : (
              <p>{recipesdetails_loading ? 'Loading...' : (recipesdetails_error ? 'Error fetching utensils.' : 'No utensils found.')}</p>
            )}

          </div>
        </div>
        <div className="w-full px-[65px]">
          <div className="w-full h-[4px] bg-mid-line-color"></div>
        </div>
      </div>

    </div>
  )
}

export default InstructionsSection