// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const NutriInfoSchema = new Schema({
//     recipe_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'recipe'
//     },
//     allnutritions: [{
//         energy_kJ: {
//             type: String,
//             required: true
//         },
//         energy_kcal: {
//             type: String,
//             required: true
//         },
//         fat: {
//             type: String,
//             required: true
//         },
//         of_which_saturates: {
//             type: String,
//             required: true
//         },
//         carbohydrate: {
//             type: String,
//             required: true
//         },
//         of_which_sugars: {
//             type: String,
//             required: true
//         },
//         protein: {
//             type: String,
//             required: true
//         },
//         salt: {
//             type: String,
//             required: true
//         },
//         multiplier: {
//             type: String,
//             required: true
//         }
//     }],
// });

// module.exports = mongoose.model("nutri_info", NutriInfoSchema)








const mongoose = require('mongoose');
const { Schema } = mongoose;

const NutriInfoSchema = new Schema({
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
    },
    allnutritions: {
        energy_kJ: {
            type: Number
        },
        energy_kcal: {
            type: Number
        },
        fat: {
            type: Number
        },
        of_which_saturates: {
            type: Number
        },
        carbohydrate: {
            type: Number
        },
        of_which_sugars: {
            type: Number
        },
        protein: {
            type: Number
        },
        salt: {
            type: Number
        },
        multiplier: {
            type: Number,
            required: true ,
            min: 0, // Minimum value allowed
            max: 1, // Maximum value allowed
            get: (v) => parseFloat(v).toFixed(3) // Specify precision (3 decimal places)
        }
    },
});

module.exports = mongoose.model("nutri_info", NutriInfoSchema);
