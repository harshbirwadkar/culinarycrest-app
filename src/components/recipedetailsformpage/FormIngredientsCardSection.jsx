// import React from 'react';
// import { useFormContext } from 'react-hook-form';

// function FormIngredientsCardSection({ ingredient, index, onIngredientChange, onFileChange }) {
//     const { register } = useFormContext();
//     const { name, quantity, img } = ingredient;

//     const handleNameChange = (e) => {
//         onIngredientChange(index, 'name', e.target.value);
//     };

//     const handleQuantityChange = (e) => {
//         onIngredientChange(index, 'quantity', e.target.value);
//     };

//     const handleFileInputChange = (e) => {
//         const file = e.target.files[0];
//         onFileChange(index, file);
//     };

//     return (
//         <div className="flex flex-col  items-center rounded-[15px] h-[270px] w-[190px] shadow-[4px_4px_30px_2px_rgba(0,0,0,0.25)] ">
//             <div className="relative w-[120px] h-[120px] mt-2 mb-1 top-0 rounded-full" >
//                 <input
//                     type="file"
//                     {...register(`ingredients[${index}].img`)}
//                     onChange={handleFileInputChange}
//                     className="mb-2  absolute w-full h-full opacity-0 cursor-pointer z-10"
//                 />
//                 {img && (
//                     // <img
//                     //   className='w-[100px] h-[100px] mb-2'
//                     //   src={URL.createObjectURL(img)}
//                     //   alt=""
//                     // />
//                     <div className="w-full h-full bg-cover bg-center absolute inset-0 rounded-full" style={{ backgroundImage: `url(${URL.createObjectURL(img)})` }}>
//                         <div className="w-full h-full bg-black  backdrop-blur-[2px] flex justify-center items-center">
//                             {/* <span className="text-white text-lg font-bold">Preview</span> */}
//                         </div>
//                     </div>

//                 )}
//                 { img ? "" : <div className={`z-10 bg-blue-500 ${img ? 'mix-blend-plus-lighter' : 'text-matterhorn'} text-matterhorn pt-5 font-font1  text-base font-bold  rounded-lg flex justify-center items-center`}>
//                     <img src="https://www.svgrepo.com/show/309379/camera-add.svg" alt="" className='w-[80px] h-[80px]' />
//                 </div> }
//             </div>
//             <div className="flex flex-col mb-4">
//                 <div className=" text-xs mb-1 ml-1">Ingredient Name</div>
//             <input
//                 type="text"
//                 {...register(`ingredients[${index}].name`)}
//                 value={name}
//                 onChange={handleNameChange}
//                 className=" text-xl font-font3 text-matterhorn border-sorrell-brown  rounded px-2 py-1 w-[160px] h-[30px]"
//             />
//             </div>
//             <div className="flex flex-col mb-4 ">
//                 <div className=" text-xs mb-1 ml-1">Quantity</div>
//             <input
//                 type="text"
//                 {...register(`ingredients[${index}].quantity`)}
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 className=" text-xl font-font3 text-matterhorn  rounded  w-[160px] h-[30px]"
//             />
//             </div>
//         </div>
//     );
// }

// export default FormIngredientsCardSection;






import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';

function FormIngredientsCardSection({ ingredient, index, onIngredientChange, onFileChange, onRemove }) {
    const { register } = useFormContext();
    const { name, quantity, img } = ingredient;

    const handleNameChange = (e) => {
        onIngredientChange(index, 'name', e.target.value);
    };

    const handleQuantityChange = (e) => {
        onIngredientChange(index, 'quantity', e.target.value);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        onFileChange(index, file);
    };

    return (
        <div className="relative flex flex-col items-center rounded-[30px] h-[270px] w-[200px] shadow-[4px_4px_15px_2px_rgba(0,0,0,0.15)] ">
            <button
                type="button"
                onClick={() => onRemove(index)}
                className="absolute top-2 right-2 bg-red-500 font-font2 text-matterhorn rounded-full w-6 h-6 flex items-center justify-center"
            >
                <FontAwesomeIcon icon={faTimes} className=' text-matterhorn' />
            </button>
            <div className="relative w-[120px] h-[120px] mt-2 mb-1 top-0 rounded-full">
                <input
                    type="file"
                    {...register(`allingredients[${index}].img`)}
                    onChange={handleFileInputChange}
                    className="mb-2 absolute w-full h-full opacity-0 cursor-pointer z-10"
                />
                {img && (
                    <div className="w-full h-full bg-cover bg-center absolute inset-0 rounded-full" >
                        <div className="w-full h-full  flex justify-center items-center rounded-full">
                            <img src={URL.createObjectURL(img)}  alt=""  className='w-[85px] h-[85px] object-cover rounded-full'/>
                        </div>
                    </div>
                )}
                {!img && (
                    <div className="z-10 bg-blue-500 text-matterhorn pt-5 font-font1 text-base font-bold rounded-lg flex justify-center items-center">
                        <img src="https://www.svgrepo.com/show/309379/camera-add.svg" alt="" className='w-[70px] h-[70px]' />
                    </div>
                )}
            </div>
            <div className="flex flex-col mb-4">
                <div className="text-xs mb-1 ml-1 font-font3 text-matterhorn">Ingredient Name</div>
                <input
                    type="text"
                    {...register(`allingredients[${index}].name`)}
                    value={name}
                    onChange={handleNameChange}
                    className="text-xl font-font3 outline-1 outline-inputbox-outline-color text-matterhorn  rounded-[8px] px-2 py-1 w-[160px] h-[30px]"
                />
            </div>
            <div className="flex flex-col mb-4">
                <div className="text-xs mb-1 ml-1 font-font3 text-matterhorn">Quantity</div>
                <input
                    type="text"
                    {...register(`allingredients[${index}].quantity`)}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="text-xl font-font3 outline-1 outline-inputbox-outline-color text-matterhorn rounded-[8px] w-[160px] h-[30px]"
                />
            </div>
        </div>
    );
}

export default FormIngredientsCardSection;
