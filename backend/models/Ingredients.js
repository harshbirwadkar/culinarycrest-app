const mongoose = require('mongoose');
const { Schema } = mongoose;

const IngredientsSchema = new Schema({
    recipe_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'recipe'
    },
    allingredients: [{
        img : {
            type : String 
        },
        name : {
            type : String ,
            required : true
        },
        quantity : {
            type : String ,
            required : true
        },
    },]
});

module.exports = mongoose.model("ingredients" , IngredientsSchema)