import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Button, Card, Container } from 'react-bootstrap'


const LandingPage = () => {

const [recipes, setRecipes] = useState([]);

useEffect(() => {
    const getRecipes = () =>  {
        axios.get("http://localhost:8092/api/recipe/get").then((res) => {
            //console.log(res.data);
            setRecipes(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }
    getRecipes();
}, [])


    return (
        <div>
           <hr></hr>
           <div align = "center">
            <a href = "/add">
           <Button bg = "primary" variant='secondary'>Add recipe</Button>
           </a>
           </div>
           <hr></hr>
         
           {recipes &&  recipes.length > 0 ?

recipes.reverse().map((recipe, index) => {
    return(
        <Container>
           <Card>
  <Card.Header as="h5">{recipe.Recipe_Name}</Card.Header>
  <Card.Body>
    <Card.Title>Ingredients : {recipe.Ingredients}</Card.Title>
    <Card.Text>
      Description : {recipe.Description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Container>         
        
    )
}) : null}
</div>
)
}

export default LandingPage
