const mongoose = require("mongoose")


const schema = mongoose.Schema;

const addSchema = new schema({
    
    Recipe_Name : {
        type : String,
        required : true
    },
    Ingredients : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    
    
});

const Recipe = mongoose.model('Recipe', addSchema);

module.exports = Recipe;
