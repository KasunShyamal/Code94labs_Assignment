
const express = require("express");
const { addRecipe, getRecipeById, getRecipe, updateRecipe, removeRecipe } = require("../controllers/recipeController");

const router = express.Router();

router.route("/").post(addRecipe);
router.route("/get").get(getRecipe);
router.route("/:id").get(getRecipeById).put(updateRecipe).delete(removeRecipe);


module.exports = router