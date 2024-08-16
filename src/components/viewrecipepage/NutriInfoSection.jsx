import React from 'react'
import { useSelector } from 'react-redux'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NutriInfoSection() {

    const { value: recipesdetails, loading: recipesdetails_loading, error: recipesdetails_error } = useSelector((state) => state.recipedetails);
    if (recipesdetails_loading) {
        return <div className="w-full flex justify-center items-center h-[50px]">
        <FontAwesomeIcon  icon={faSpinner}  className=' motion-safe:animate-spin h-[45px] text-matterhorn '/> 
      </div>;
      }
    
      if (recipesdetails_error) {
        return <div>Error: {recipesdetails_error}</div>;
      }
    if (!recipesdetails || !recipesdetails.recipes_nutritionalInfo || recipesdetails.recipes_nutritionalInfo.length === 0) {
        return null; // Return null or loading indicator if data is not yet available
    }

    const nutritionalInfo = recipesdetails.recipes_nutritionalInfo[0].allnutritions;
    const multiplier = nutritionalInfo.multiplier;

    // Function to multiply values by multiplier
    const multiplyValues = (value) => {
        return (value * multiplier).toFixed(1);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Filter out the 'multiplier' key
    const filteredNutritionalInfo = Object.entries(nutritionalInfo).filter(([key, value]) => key !== 'multiplier');


    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h3 className='flex justify-center w-full text-[40px] text-matterhorn my-[60px] font-semibold font-font1'>Nutritional Information</h3>
                <div className="flex justify-center">
                    <div className="flex flex-row w-[1100px] mb-[120px]">

                        <div className="flex flex-col justify-center items-center w-2/4 mx-[70px]">
                            <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per Serving</div>
                            <div className="flex flex-col w-full">

                                {filteredNutritionalInfo.map(([key, value]) => (
                                    <div className="flex justify-between" key={key}>
                                        <div className="text-2xl font-font1 font-medium text-matterhorn">{capitalizeFirstLetter(key.replace(/_/g, ' '))}:</div>
                                        <div className="text-2xl font-font1 font-normal text-matterhorn">{value} {key === 'energy_kJ' ? 'kJ' : key === 'energy_kcal' ? 'kcal' : 'g'}</div>
                                    </div>
                                ))}


                            </div>
                        </div>


                        <div className="flex flex-col justify-center items-center w-2/4 mx-[70px]">
                            <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per Serving</div>
                            <div className="flex flex-col w-full">
                                {filteredNutritionalInfo.map(([key, value]) => (
                                    <div className="flex justify-between" key={key}>
                                        <div className="text-2xl font-font1 font-medium text-matterhorn">{capitalizeFirstLetter(key.replace(/_/g, ' '))}:</div>
                                        <div className="text-2xl font-font1 font-normal text-matterhorn">{multiplyValues(value)} {key === 'energy_kJ' ? 'kJ' : key === 'energy_kcal' ? 'kcal' : 'g'}</div>
                                    </div>
                                ))}

                            </div>
                        </div>



                        {/* <div className="flex flex-col justify-center items-center w-2/4 mx-[60px]">
                            <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per Serving</div>
                            <div className="flex flex-col w-full">
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Energy (kJ):</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">2834 kJ</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Energy (kcal):</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">677 kcal</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Fat:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">25 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">of which saturates:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">11 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Carbohydrate:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">82 kg</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">of which sugars:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">14 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Protein:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">29 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Salt:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">2.1 g</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-2/4 mx-[60px]">
                            <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per Serving</div>
                            <div className="flex flex-col w-full">
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Energy (kJ):</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">2834 kJ</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Energy (kcal):</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">677 kcal</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Fat:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">25 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">of which saturates:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">11 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Carbohydrate:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">82 kg</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">of which sugars:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">14 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Protein:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">29 g</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-2xl font-font1 font-medium text-matterhorn">Salt:</div>
                                    <div className="text-2xl font-font1 font-normal text-matterhorn">2.1 g</div>
                                </div>
                            </div>
                        </div> */}




                    </div>
                </div>
            </div>
        </div>
    )
}

export default NutriInfoSection
