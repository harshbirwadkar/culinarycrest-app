import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function FormRecipeDetailSection() {
    const { register, formState: { errors } } = useFormContext();
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleFileChange(file);
        } else {
            console.log("No file dropped.");
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };


    return (
        <div>
            <div className="px-[65px] py-[55px]">
            <h3 className='flex justify-center w-full text-[45px] text-inputbox-outline-color mb-[55px] font-semibold  font-font3'>Share your recipe</h3>
                <div className="flex flex-col h-[120px] min-w-[600px] ">
                    <input type="text" placeholder='Enter the Name of Recipe'  {...register('recipe_heading', { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" } })} className='text-[55px] outline-2 outline-inputbox-outline-color text-matterhorn font-font3 font-bold rounded-xl px-6' />
                    {errors.recipe_heading && <span className='mt-2 text-sm font-font2 font-normal ml-6  text-my_red ' >{errors.recipe_heading.message}</span>}
                </div>

                <div className=" flex flex-col text-4xl text-matterhorn font-font3 font-medium h-[85px] min-w-[600px]">
                    <input type="text" placeholder='Enter the Sub heading of Recipe'  {...register('recipe_subheading', { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" } })} className='text-4xl outline-2 outline-inputbox-outline-color text-matterhorn font-font3 font-medium  rounded-xl px-6 h-[55px]' />
                    {errors.recipe_subheading && <span className=' mt-2 text-sm font-font2 font-normal ml-6  text-my_red ' >{errors.recipe_subheading.message}</span>}
                </div>
                <div className="flex flex-col min-h-[90px] my-[35px]  " >
                    <div className=" font-font3 text-lg font-semibold text-matterhorn m-2">Enter the duration of the recipe :</div>
                    <div className="flex flex-row text-2xl font-font3 font-medium mx-2 text-matterhorn">
                        <svg className='w-[30px] h-[30px] text-matterhorn' stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <input type="text" {...register('duration', { required: { value: true, message: "This field is required" } })} className="text-2xl font-font3 outline-1 outline-inputbox-outline-color font-medium mx-2 text-matterhorn w-[60px] rounded-xl" />
                        <div className="">Minutes</div>
                    </div>
                    {errors.duration && <span className='mt-2 text-sm font-font2 font-normal ml-6  text-my_red ' >{errors.duration.message}</span>}
                </div>

                {/* <div className='w-full h-[600px] ' onDrop={handleDrop} onDragOver={handleDragOver} >
                    <input 
                        type="file" 
                        {...register('recipe_image',  { required: { value: true, message: "This field is required" } })}
                        onChange={handleFileChange} 
                    />
                    {errors.recipe_image && <span className='mt-2 text-sm font-font2 font-normal ml-6 text-my_red'>{errors.recipe_image.message}</span>}
                    {preview && <img className='w-full h-[530px] object-cover rounded-[15px]' src={preview} alt="Preview" />}
                </div> */}

                {/* <div className="w-full h-[600px] border-dashed border-4 border-gray-300 rounded-lg flex justify-center items-center relative" onDrop={handleDrop} onDragOver={handleDragOver}>
                    <input
                        type="file"
                        {...register('recipe_image', { required: { value: true, message: "This field is required" } })}
                        onChange={handleFileChange}
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                    />
                    {errors.recipe_image && <span className="absolute top-2 left-2 mt-2 text-sm font-font2 font-normal text-my_red">{errors.recipe_image.message}</span>}
                    {preview ? (
                        <div className="w-full h-full bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${preview})` }}>
                            <div className="w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center">
                                <span className="text-white text-lg font-bold">Preview</span>
                            </div>
                        </div>
                    ) : (
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">Upload Image</button>
                    )}
                </div> */}

            <div  className={`w-full h-[530px] ${preview ? '' : 'border-dashed border-4  border-matterhorn'} rounded-[15px] flex justify-center items-center relative overflow-hidden`} onDrop={handleDrop} onDragOver={handleDragOver}>
                <input
                    type="file"
                    {...register('recipe_image', { required: { value: true, message: "This field is required" } })}
                    onChange={handleFileChange}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                />
                {errors.recipe_image && <span className="absolute top-2 left-2 mt-2 text-sm font-font2 font-normal text-my_red">{errors.recipe_image.message}</span>}
                
                {preview && (
                    <div className="w-full h-full bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${preview})` }}>
                        <div className="w-full h-full bg-black  backdrop-blur-[2px] flex justify-center items-center">
                            {/* <span className="text-white text-lg font-bold">Preview</span> */}
                        </div>
                    </div>
                )}
                
                <span className={`z-10 bg-blue-500 ${preview ? 'mix-blend-plus-lighter' : 'text-matterhorn' } text-matterhorn  font-font1 text-4xl font-bold py-2 px-4 rounded-lg`}>Click Anywhere to Upload Image</span>
            </div>





            </div>
        </div>
    )
}

export default FormRecipeDetailSection;
