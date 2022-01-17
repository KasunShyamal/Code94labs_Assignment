import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';

const UpdateRecipe = ({history}) => {

    const [Recipe_Name, setRecipe_Name] = useState("");
    const [Ingredients, setIngredients] = useState("");
    const [Description, setDescription] = useState("");

    
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        
        let result = window.location.href.split("add/")[1]
        console.log(typeof(window.location.href), "abcd", result)
        
        
            axios.get(`http://localhost:8092/api/recipe/${result}`).then((res) => {
                setRecipe_Name(res.data.Recipe_Name);
                setIngredients(res.data.Ingredients);
                setDescription(res.data.Description);
                setRecipes(res.data)
                console.log(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        
    }, [])


        const updateHandler = async (e) => {
            e. preventDefault();
        
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                };
        
                const { data } = await axios.put(
                    `http://localhost:8092/api/recipe/${recipes._id}`,
                    { Recipe_Name, Ingredients, Description},
                    config
                    )
                    
                
        
                
        
            } catch (error) {
                
            }
        
            console.log(Recipe_Name);
            
        }


        
    return (
        
        <Container>
              <Card>
        <Card.Header>Recipe</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            
            <Form.Group controlId="Recipe_Name">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control
                type="text"
                value={Recipe_Name}
                
                onChange={(e) => setRecipe_Name(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                value={Ingredients}
                placeholder="Enter the Description"
                rows={4}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </Form.Group>
            

            <Form.Group controlId="content">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={Description}
                placeholder="Enter the Description"
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group><br></br>
            <Button  variant="primary" type="submit">
                Update
                </Button>
            </Form>
            </Card.Body> 
            </Card>
            </Container>
        
    )
    
}


export default UpdateRecipe
