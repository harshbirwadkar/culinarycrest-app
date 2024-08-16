import React  from 'react'
import { useFormContext } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function FormInstructionsCard(props) {
    // const { register ,  formState: { errors } } = useFormContext();
    const { register ,  formState: { errors } } = useFormContext();
    const { instruction, img, step, index, handleInstructionChange, handleRemoveInstruction } = props


    //

    // Extract the specific error message for this instruction
    const instructionErrorMsg = errors?.allinstructions?.[index]?.instruction?.message;
    const instructionError = errors?.allinstructions?.[index]?.instruction;

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="w-[360px] h-[530px] relative flex flex-col items-center rounded-[35px] bg-alabaster shadow-[4px_4px_30px_2px_rgba(0,0,0,0.25)] transition ease-in-out delay-150 duration-500  hover:shadow-[4px_4px_30px_10px_rgba(0,0,0,0.25)]">
                    <button
                        type="button"
                        onClick={() => handleRemoveInstruction(index)}
                        className="z-20 absolute top-2 right-2 bg-red-500 font-font2 text-matterhorn rounded-full w-6 h-6 flex items-center justify-center"
                    >
                        <FontAwesomeIcon icon={faTimes} className=' text-matterhorn' />
                    </button>
                    <div className="relative w-full h-[200px]  mb-1 top-0 rounded-t-[35px]">
                        <input
                            type="file"
                            {...register(`allinstructions[${index}].img`)}
                            onChange={(e) => {
                                e.preventDefault();
                                handleInstructionChange(index, 'img', e.target.files[0])
                            }}
                            className="mb-2 absolute w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        {img && (
                            <div className="w-full h-full bg-cover bg-center absolute inset-0 " >
                                <div className="w-full h-full  flex justify-center items-center ">
                                    <img src={URL.createObjectURL(img)} alt="" className='w-full h-full object-cover rounded-t-[35px]' />
                                </div>
                            </div>
                        )}
                        {!img && (
                            <div className="z-10 bg-blue-500 h-full text-matterhorn pt-5 font-font1 text-base font-bold rounded-lg flex justify-center items-center flex-col">
                                <img src="https://www.svgrepo.com/show/309379/camera-add.svg" alt="" className='w-[70px] h-[70px]' />
                                <div className=" font-font2 text-matterhorn text-base mt-3">Upload a Image</div>
                            </div>
                        )}
                    </div>
                    {!img && (<div className="w-full h-[2px] bg-mid-line-color"></div>)}


                    {/* <img className='w-full h-[200px] rounded-t-[35px] object-cover' src={img} alt="" /> */}
                    <div className="flex flex-col justify-center w-[322px]">
                        <div className=" font-font1 font-bold text-matterhorn text-xl mt-3 mb-2">STEP {step}</div>
                        {/* <div className="text-sm font-medium font-font3 text-matterhorn">{instruction}</div> */}
                        <div className="mb-2">
                            <div className="text-sm mb-2 ml-1 font-font3 text-matterhorn">Instruction :</div>
                            <textarea 
                                type = "text"
                                {...register(`allinstructions[${index}].instruction` , { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" } } ) }
                                onChange={(e)=>{
                                    e.preventDefault()
                                    handleInstructionChange(index,'instruction',e.target.value)
                                }}
                                value={instruction}
                                className='w-full h-[215px] resize-none rounded-[10px] text-sm font-medium font-font3 text-matterhorn outline-1 outline-inputbox-outline-color p-2' 
                                
                            />
                            {/* {errors[`allinstructions[${index}].instruction`] && <span className=' text-my_red'>{errors[`allinstructions[${index}].instruction`].message}</span>} */}
                            {instructionError && <span className=' text-xs font-font2 ml-1  text-my_red'>{instructionErrorMsg}</span>}
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormInstructionsCard