import React, { useState } from 'react';
import  axios from "axios";
import { Button, Container, Form } from 'react-bootstrap';

const AddRecipe = () => {

//set use states for variables
const [Recipe_Name, setRecipe_Name] = useState("");
const [Ingredients, setIngredients] = useState("");
const [Description, setDescription] = useState("");

const submitHandler = async (e) => {
    e. preventDefault();

    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
// calling to the api
        const { data } = await axios.post(
            "http://localhost:8092/api/recipe",
            { Recipe_Name, Ingredients, Description},
            config
        );
// store data in the local storage
        localStorage.setItem("RecipeInfo", JSON.stringify(data));

    } catch (error) {
        
    }

    console.log(Recipe_Name);
}


    return (
        <div>
            <Container>
            <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Recipe Name</Form.Label>
    <Form.Control type="text" 
                value = {Recipe_Name}
                onChange={(e) => setRecipe_Name(e.target.value)}
                />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ingredients</Form.Label>
    <Form.Control as="textarea" rows={3}
                    value = {Ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    /> 
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3}
                value = {Description}
                onChange={(e) => setDescription(e.target.value)}
                /> 
  </Form.Group>

<Button  variant="primary" type="submit">
                Submit
                </Button>
</Form>
</Container>
        </div>
    )
}

export default AddRecipe;
