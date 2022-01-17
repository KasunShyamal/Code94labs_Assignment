
const express = require("express");
const { addRecipe, getRecipe, updateRecipe, removeRecipe } = require("../controllers/recipeController");

const router = express.Router();

router.route("/").post(addRecipe);
router.route("/get").get(getRecipe);
router.route("/:id").put(updateRecipe).delete(removeRecipe);


module.exports = router