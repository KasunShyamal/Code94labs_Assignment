//const asyncHandler = require("express-async-handler")
const Recipe = require('../Models/recipe')


const addRecipe = async (req,res) => {
    const {Recipe_Name,Ingredients,Description}=req.body;

    if(!Recipe_Name || !Ingredients || !Description){
        res.status(400);
        throw new Error("Please fill all the Feilds");
    }
    else{
       
        const recipe = new Recipe({Recipe_Name, Ingredients,  Description});

        const added = await recipe.save();

        res.status(201).json(added)
    }
};

const getRecipe =  async (req,res) => {
    const add = await Recipe.find()
    res.json(add);
    
};

const updateRecipe = async(req,res) => {
    const {Recipe_Name, Ingredients, Description} = req.body;

    const update = await Recipe.findById(req.params.id);

   
    if(update){
        update.Recipe_Name = Recipe_Name;
        update.Ingredients = Ingredients;
        update.Description = Description;
        

        const updatedRecipe = await update.save();
        res.json(updatedRecipe);
    }
    else{
        throw new Error("Recipe Not Found");
    }
}

const removeRecipe =  async(req,res) =>{
        //find the id whther exists or not
        const recipe = await Recipe.findById(req.params.id);

        if(recipe){
            await customer.remove();
            res.json({ message: "Customer Removed"})
        }
        else{
            res.json(404)
            throw new Error("Customer Not Found")
        }
    }

module.exports = {addRecipe,getRecipe,updateRecipe,removeRecipe};