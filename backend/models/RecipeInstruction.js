const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeInstructionSchema = new Schema({
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
    },
    allinstructions: [{
        instruction: {
            type: String,
            required: true
        },
        img: {
            type: String
        }
    }],
});

module.exports = mongoose.model("recipe_instructions", RecipeInstructionSchema)