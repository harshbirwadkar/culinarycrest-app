import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FormIngredientsCardSection from './FormIngredientsCardSection';

function FormIngredientsSection() {
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '', img: null }]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, { name: '', quantity: '', img: null }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleFileChange = (index, file) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].img = file;
    setIngredients(updatedIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  return (
    <div>
      <div className="w-full">
        <h3 className='flex justify-center w-full text-[40px] text-matterhorn mb-[60px] font-semibold  font-font1'>Ingredients</h3>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 gap-20 max-w-[1310px] mb-[90px]">
            {ingredients.map((ingredient, index) => (
              <FormIngredientsCardSection
                key={index}
                index={index}
                ingredient={ingredient}
                onIngredientChange={handleIngredientChange}
                onFileChange={handleFileChange}
                onRemove={handleRemoveIngredient}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button 
            className="w-[260px] h-[45px] rounded-[15px] bg-inputbox-outline-color text-alabaster hover:text-matterhorn  flex justify-center items-center font-bold text-lg  font-font2 transition ease-in-out delay-150 duration-500 hover:backdrop-blur-xl   px-4 py-2  mb-[90px] mt-5" 
            onClick={handleAddIngredient}
          >
           <div className="flex flex-row items-center">
           <FontAwesomeIcon icon={faPlus}  className='mx-2'/>
            <div className="">Add More Ingredient</div>
           </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormIngredientsSection;
