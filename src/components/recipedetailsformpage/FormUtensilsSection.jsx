import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

function FormUtensilsSection() {
    const { register } = useFormContext();
    const [utensils, setUtensils] = useState([{ name: '' }]);

    const handleAddUtensil = (e) => {
        e.preventDefault();
        setUtensils([...utensils, { name: '' }]);
    };

    const handleRemoveUtensil = (index) => {
        const updatedUtensils = utensils.filter((_, i) => i !== index);
        setUtensils(updatedUtensils);
    };

    const handleUtensilChange = (index, value) => {
        const updatedUtensils = [...utensils];
        updatedUtensils[index].name = value;
        setUtensils(updatedUtensils);
    };

    return (
        <div>
            <div className="px-[65px] ">
                <div className="w-full h-[4px] bg-mid-line-color"></div>
                <h3 className='flex justify-center w-full text-[40px] text-matterhorn mt-[60px] mb-[40px] font-semibold font-font1'>Utensils</h3>
                <div className="flex flex-row justify-center items-center mb-[85px] flex-wrap">
                    {utensils.length > 0 ? (
                        utensils.map((utensil, index) => (
                            <div key={index} className="flex flex-col w-[220px] mx-4">
                                <div className=" text-xs font-font3 text-matterhorn  ml-3 mb-1">Utensils Name</div>
                                <div key={index} className="flex items-center ">
                                    <input
                                        type="text"
                                        value={utensil.name}
                                        {...register(`allutensils[${index}].name`)}
                                        onChange={(e) => handleUtensilChange(index, e.target.value)}
                                        className="outline-1 shadow-[2px_2px_10px_1px_rgba(0,0,0,0.10)] outline-inputbox-outline-color font-medium text-xl text-matterhorn font-font3 mx-2 w-[200px] rounded-[8px] "
                                    />
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        handleRemoveUtensil(index)
                                    }}>
                                        <FontAwesomeIcon icon={faTimes} className=' text-matterhorn' />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p> Error : No utensils found.</p>
                    )}
                </div>
                <div className="flex justify-center mb-4">
                    <button
                        className="w-[260px] h-[45px] rounded-[15px] bg-inputbox-outline-color text-alabaster hover:text-matterhorn flex justify-center items-center font-bold text-lg  font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl  px-4 py-2"
                        onClick={handleAddUtensil}
                    >
                        <div className="flex flex-row items-center">
                            <FontAwesomeIcon icon={faPlus} className='mx-2' />
                            <div className="">Add More Utensil</div>
                        </div>
                    </button>
                </div>
                <div className="w-full h-[4px] bg-mid-line-color mt-[85px]"></div>
            </div>
        </div>
    );
}

export default FormUtensilsSection;
