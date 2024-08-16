const mongoose = require('mongoose');
const { Schema } = mongoose;

const UtensilsSchema = new Schema({
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipe'
    },
    allutensils: [{
        name: {
            type: String,
            required: true
        }
    }],
});

module.exports = mongoose.model("utensils", UtensilsSchema)