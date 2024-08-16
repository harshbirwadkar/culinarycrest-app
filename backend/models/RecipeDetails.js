const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeDetailSchema = new Schema({
    heading : {
        type : String ,
        required : true
    },
    subheading : {
        type : String 
    },
    duration : {
        type : String ,
        required : true
    },
    recipeimg : {
        type : String 
    },
    date : {
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model("recipe" , RecipeDetailSchema)