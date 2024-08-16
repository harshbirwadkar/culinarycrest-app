// import React from 'react'
// import FormRecipeDetailSection from './FormRecipeDetailSection'

// function RecipeForm() {

//     return (
//         <div>
//                     <FormRecipeDetailSection />
//         </div>
//     )
// }

// export default RecipeForm



// import React ,{useEffect} from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { createFullRecipeThunk } from '../../reduxslices/recipes/insertRecipeSlice';
// import FormRecipeDetailSection from './FormRecipeDetailSection';
// import FormIngredientsSection from './FormIngredientsSection';
// import FormUtensilsSection from './FormUtensilsSection';
// import FormInstructionsSection from './FormInstructionsSection';
// import FormNutriInfoSection from './FormNutriInfoSection';

// function RecipeForm() {
//     // const methods = useForm();

//     // const onSubmit = (data) => {
//     //     console.log(data); // Handle form submission data
//     // };

//     const methods = useForm();
//     const dispatch = useDispatch();

//     const onSubmit = (data) => {
//         console.log(data); // Optional: You can keep this for debugging purposes
//         dispatch(createFullRecipeThunk(data));
//     };
//     return (
//         <div>
//             <FormProvider {...methods}>
//                 <form onSubmit={methods.handleSubmit(onSubmit)}>
//                     <div className="w-full relative mt-[136px] flex justify-center items-center">
//                         <div className="w-[96%] h-full bg-alabaster">
                        
//                             <FormRecipeDetailSection />
//                             <FormIngredientsSection />
//                             <FormUtensilsSection />
//                             <FormInstructionsSection />
//                             <FormNutriInfoSection />
//                             {/* Add other form sections/components here */}
//                             {/* <button type="submit">Submit</button> */}

//                             <div className="flex justify-center my-[60px]">
//                                 <button 
//                                 type="submit"
//                                 >
//                                     <Link className="w-[190px] h-[50px] rounded-[15px]  bg-medium-turquoise  text-alabaster flex justify-center items-center font-bold text-lg  font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl  hover:shadow-[2px_2px_15px_2px_rgba(0,0,0,0.15)] px-4 py-2 "  to="/">Submit</Link>
                                    
//                                 </button>
//                             </div>

//                         </div>
//                     </div>
//                 </form>
//             </FormProvider>
//         </div>
//     )
// }

// export default RecipeForm;





import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { createFullRecipeThunk } from '../../reduxslices/recipes/insertRecipeSlice';
import FormRecipeDetailSection from './FormRecipeDetailSection';
import FormIngredientsSection from './FormIngredientsSection';
import FormUtensilsSection from './FormUtensilsSection';
import FormInstructionsSection from './FormInstructionsSection';
import FormNutriInfoSection from './FormNutriInfoSection';

function RecipeForm() {
    const methods = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading ]= useState(false);


    const onSubmit = async (data) => { 
        try {
            setIsLoading(true);
            await dispatch(createFullRecipeThunk(data)).unwrap();
            setIsSubmitted(true); // Set submission flag
            setIsLoading(false);
            navigate('/'); // Redirect to home on successful submission
        } catch (error) {
            console.error("Submission error:", error);
            // Handle the error appropriately here (e.g., display an error message)
        }
    };

    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="w-full relative mt-[136px] flex justify-center items-center">
                        <div className="w-[96%] h-full bg-alabaster">
                            <FormRecipeDetailSection />
                            <FormIngredientsSection />
                            <FormUtensilsSection />
                            <FormInstructionsSection />
                            <FormNutriInfoSection />

                            <div className="flex justify-center my-[60px]">
                                <button 
                                    type="submit"
                                    className="w-[190px] h-[50px] rounded-[15px] bg-medium-turquoise text-alabaster flex justify-center items-center font-bold text-lg font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl hover:shadow-[2px_2px_15px_2px_rgba(0,0,0,0.15)] px-4 py-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                {isLoading && (
                    <div className=" fixed top-0 left-0  w-full h-full backdrop-blur-sm flex justify-center items-center">
                     <FontAwesomeIcon  icon={faSpinner}  className=' motion-safe:animate-spin h-[45px] text-matterhorn '/>
                     </div>
                     )}

                {isSubmitted && (
                    <div className="flex justify-center items-center my-4">
                        <span className="text-green-500 text-xl font-bold">Recipe submitted successfully!</span>
                    </div>
                )}
            </FormProvider>
        </div>
    );
}

export default RecipeForm;
