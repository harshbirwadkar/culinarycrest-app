// import React, { useState, useEffect } from 'react';
// import { useFormContext } from 'react-hook-form';

// function FormNutriInfoSection() {
//     const { register } = useFormContext();
//     // Nutrient names and their respective keys
//     const nutrientNames = [
//         { name: 'Energy (kJ)', key: 'energy_kJ' },
//         { name: 'Energy (kcal)', key: 'energy_kcal' },
//         { name: 'Fat', key: 'fat' },
//         { name: 'of which saturates', key: 'saturates' },
//         { name: 'Carbohydrate', key: 'carbohydrate' },
//         { name: 'of which sugars', key: 'sugars' },
//         { name: 'Protein', key: 'protein' },
//         { name: 'Salt', key: 'salt' }
//     ];

//     // Creating state to manage input values for both "Per Serving" and "Per 100g"
//     const [inputValuesServing, setInputValuesServing] = useState(
//         nutrientNames.reduce((acc, nutrient) => {
//             acc[nutrient.key] = 0;
//             return acc;
//         }, {})
//     );

//     const [inputValues100g, setInputValues100g] = useState(
//         nutrientNames.reduce((acc, nutrient) => {
//             acc[nutrient.key] = 0;
//             return acc;
//         }, {})
//     );

//     const [multiplier, setMultiplier] = useState(1);

//     // Calculate the multiplier based on input values
//     useEffect(() => {
//         let totalMultiplier = 0;
//         let count = 0;
//         nutrientNames.forEach(({ key }) => {
//             if (inputValuesServing[key] > 0 && inputValues100g[key] > 0) {
//                 totalMultiplier += inputValues100g[key] / inputValuesServing[key];
//                 count++;
//             }
//         });
//         setMultiplier(count > 0 ? (totalMultiplier / count).toFixed(2) : 1);
//     }, [inputValuesServing, inputValues100g]);

//     // Handle change in input values for "Per Serving"
//     const handleInputChangeServing = (key, value) => {
//         setInputValuesServing({
//             ...inputValuesServing,
//             [key]: parseFloat(value)
//         });
//     };

//     // Handle change in input values for "Per 100g"
//     const handleInputChange100g = (key, value) => {
//         setInputValues100g({
//             ...inputValues100g,
//             [key]: parseFloat(value)
//         });
//     };

//     return (
//         <div>
//             <div className="flex flex-col justify-center items-center">
//                 <h3 className='flex justify-center w-full text-[40px] text-matterhorn my-[60px] font-semibold font-font1'>Nutritional Information</h3>
//                 <div className="flex justify-center">
//                     <div className="flex flex-row w-[1100px] mb-[120px]">

//                         <div className="flex flex-col justify-center items-center w-2/4 mx-[70px]">
//                             <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per Serving</div>
//                             <div className="flex flex-col w-full">
//                                 {nutrientNames.map(({ name, key }) => (
//                                     <div className="flex justify-between my-2" key={key}>
//                                         <div className="text-2xl font-font1 font-medium text-matterhorn">{name}:</div>
//                                         <input
//                                             type="number"
//                                             {...register(`nutrients.[${key}]`)}
//                                             value={inputValuesServing[key]}
//                                             onChange={(e) => handleInputChangeServing(key, e.target.value)}
//                                             className="text-2xl font-font1 font-normal text-matterhorn w-[100px] text-right"
//                                         />
//                                         <div className="text-2xl font-font1 font-normal text-matterhorn">
//                                             {key === 'energy_kJ' ? 'kJ' : key === 'energy_kcal' ? 'kcal' : 'g'}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="flex flex-col justify-center items-center w-2/4 mx-[70px]">
//                             <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per 100g</div>
//                             <div className="flex flex-col w-full">
//                                 {nutrientNames.map(({ name, key }) => (
//                                     <div className="flex justify-between my-2" key={key}>
//                                         <div className="text-2xl font-font1 font-medium text-matterhorn">{name}:</div>
//                                         <input
//                                             type="number"
//                                             value={inputValues100g[key]}
//                                             onChange={(e) => handleInputChange100g(key, e.target.value)}
//                                             className="text-2xl font-font1 font-normal text-matterhorn w-[100px] text-right"
//                                         />
//                                         <div className="text-2xl font-font1 font-normal text-matterhorn">
//                                             {key === 'energy_kJ' ? 'kJ' : key === 'energy_kcal' ? 'kcal' : 'g'}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="flex justify-center mt-4">
//                     <div className="text-2xl font-font1 font-bold text-matterhorn">Calculated Multiplier: {multiplier}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FormNutriInfoSection;






import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

function FormNutriInfoSection() {
    const { register } = useFormContext();

    // Nutrient names and their respective keys
    const nutrientNames = [
        { name: 'Energy (kJ)', key: 'energy_kJ' },
        { name: 'Energy (kcal)', key: 'energy_kcal' },
        { name: 'Fat', key: 'fat' },
        { name: 'of which saturates', key: 'saturates' },
        { name: 'Carbohydrate', key: 'carbohydrate' },
        { name: 'of which sugars', key: 'sugars' },
        { name: 'Protein', key: 'protein' },
        { name: 'Salt', key: 'salt' }
    ];

    // Creating state to manage input values for both "Per Serving" and "Per 100g"
    const [inputValuesServing, setInputValuesServing] = useState(
        nutrientNames.reduce((acc, nutrient) => {
            acc[nutrient.key] = 0;
            return acc;
        }, {})
    );

    const [inputValues100g, setInputValues100g] = useState(
        nutrientNames.reduce((acc, nutrient) => {
            acc[nutrient.key] = 0;
            return acc;
        }, {})
    );

    const [multiplier, setMultiplier] = useState(1);

    // Calculate the multiplier based on input values
    useEffect(() => {
        let totalMultiplier = 0;
        let count = 0;
        nutrientNames.forEach(({ key }) => {
            if (inputValuesServing[key] > 0 && inputValues100g[key] > 0) {
                totalMultiplier += inputValues100g[key] / inputValuesServing[key];
                count++;
            }
        });
        setMultiplier(count > 0 ? (totalMultiplier / count).toFixed(2) : 1);
    }, [inputValuesServing, inputValues100g]);

    // Handle change in input values for "Per Serving"
    const handleInputChangeServing = (key, value) => {
        const parsedValue = parseFloat(value);
        setInputValuesServing({
            ...inputValuesServing,
            [key]: isNaN(parsedValue) ? 0 : parsedValue
        });
    };

    // Handle change in input values for "Per 100g"
    const handleInputChange100g = (key, value) => {
        const parsedValue = parseFloat(value);
        setInputValues100g({
            ...inputValues100g,
            [key]: isNaN(parsedValue) ? 0 : parsedValue
        });
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h3 className='flex justify-center w-full text-[40px] text-matterhorn my-[60px] font-semibold font-font1'>Nutritional Information</h3>
                <div className="flex justify-center">
                    <div className="flex flex-row w-[1100px] mb-[80px]">

                        <div className="flex flex-col justify-center items-center w-2/4 mx-[70px]">
                            <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per Serving</div>
                            <div className="flex flex-col w-full">
                                {nutrientNames.map(({ name, key }) => (
                                    <div className="flex justify-between my-1" key={key}>
                                        <div className="text-2xl font-font1 font-medium text-matterhorn">{name}:</div>
                                        <div className="flex flex-row">
                                            <input
                                                type="number"
                                                {...register(`allnutritions.${key}`)}
                                                value={inputValuesServing[key]}
                                                onChange={(e) => handleInputChangeServing(key, e.target.value)}
                                                className="text-2xl font-font1 font-normal text-matterhorn w-[100px] h-[30px] py-1 text-right mr-2 rounded-[8px] outline-1 outline-inputbox-outline-color"
                                            />
                                            <div className="text-2xl font-font1 font-normal text-matterhorn">
                                                {key === 'energy_kJ' ? 'kJ' : key === 'energy_kcal' ? 'kcal' : 'g'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center w-2/4 mx-[70px]">
                            <div className="text-2xl font-font1 font-bold text-matterhorn mb-[30px]">Per 100g</div>
                            <div className="flex flex-col w-full">
                                {nutrientNames.map(({ name, key }) => (
                                    <div className="flex justify-between my-1" key={key}>
                                        <div className="text-2xl font-font1 font-medium text-matterhorn">{name}:</div>
                                        <div className="flex flex-row">
                                            <input
                                                type="number"
                                                value={inputValues100g[key]}
                                                onChange={(e) => handleInputChange100g(key, e.target.value)}
                                                className="text-2xl font-font1 font-normal text-matterhorn w-[100px] text-right outline-1 outline-inputbox-outline-color rounded-[8px] mr-2 h-[30px]"
                                            />
                                            <div className="text-2xl font-font1 font-normal text-matterhorn">
                                                {key === 'energy_kJ' ? 'kJ' : key === 'energy_kcal' ? 'kcal' : 'g'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <input
                    type="hidden"
                    {...register('allnutritions.multiplier')}
                    value={multiplier}
                />
                <div className="w-full px-[65px]">
                    <div className="w-full h-[4px] bg-mid-line-color"></div>
                </div>
            </div>
        </div>
    );
}

export default FormNutriInfoSection;
