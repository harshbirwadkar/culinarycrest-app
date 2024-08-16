import React, { useState } from 'react'
import FormInstructionsCard from './FormInstructionsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



function FormInstructionsSection() {

  const [allInstructions, setallInstructions] = useState([{ instruction: '', img: null }])

  const handleInstructionChange = (index, field, value) => {
    let updatedInstructions = [...allInstructions];
    if (!updatedInstructions[index]) {
      updatedInstructions[index] = { instruction: '', img: null }; // Ensure the object exists
    }
    updatedInstructions[index][field] = value;
    setallInstructions(updatedInstructions);
  };

  const handleAddInstruction = () => {
    setallInstructions([...allInstructions, { instruction: '', img: null }])
  }

  const handleRemoveInstruction = (index) => {
    let updatedInstructions = [...allInstructions];
    updatedInstructions = updatedInstructions.filter((_, i) => i !== index);
    setallInstructions(updatedInstructions);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h3 className='flex justify-center w-full text-[40px] text-matterhorn my-[60px] font-semibold font-font1'>Intructions</h3>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-3 gap-x-6 gap-y-20 w-[1240px] mb-[60px]">

            {allInstructions.length > 0 ? (
              allInstructions.map((instruction, index) => (
                <FormInstructionsCard key={index + 1}
                  instruction={instruction.instruction}
                  img={instruction.img}
                  step={index + 1}
                  index={index}
                  handleInstructionChange={handleInstructionChange}
                  handleRemoveInstruction={handleRemoveInstruction}
                />
              ))
            ) : (
              <p> Looks empty! add some instructions </p>
            )}

          </div>
        </div>

        <div className="flex justify-center">
          <button 
            className="w-[270px] h-[45px] rounded-[15px]  flex justify-center items-center font-bold text-lg bg-inputbox-outline-color text-alabaster hover:text-matterhorn font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl   px-4 py-2  mb-[90px] mt-5" 
            onClick={(e)=>{
              e.preventDefault()
              handleAddInstruction()
            }
            }
          >
           <div className="flex flex-row items-center">
           <FontAwesomeIcon icon={faPlus}  className='mx-2'/>
            <div className="">Add More Instructions</div>
           </div>
          </button>
        </div>


        <div className="w-full px-[65px]">
          <div className="w-full h-[4px] bg-mid-line-color"></div>
        </div>
      </div>

    </div>
  )
}

export default FormInstructionsSection