//const asyncHandler = require("express-async-handler")
const Recipe = require('../Models/recipe')

//functionality for add new recipe
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
//functionality for fetch all recipes
const getRecipe =  async (req,res) => {
    const add = await Recipe.find()
    res.json(add);
    
};

//functionaloity to fetch recipe by id
const getRecipeById = async (req,res) => {
    const recipe = await Recipe.findById(req.params.id);

    if(recipe) {
        res.json(recipe);
    }
    else {
        res.status(404).json({message: "Recipe Not Found"});
    }
}
//functionality to update recipe
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
//functionality to delete recipe
const removeRecipe =  async(req,res) =>{
        //find the id whther exists or not
        const recipe = await Recipe.findById(req.params.id);

        if(recipe){
            await recipe.remove();
            res.json({ message: "Recipe Removed"})
        }
        else{
            res.json(404)
            throw new Error("Recipe Not Found")
        }
    }

module.exports = {addRecipe,getRecipeById,getRecipe,updateRecipe,removeRecipe};