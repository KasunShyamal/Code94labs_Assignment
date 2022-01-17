import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Button, Card, Container } from 'react-bootstrap'


const LandingPage = (props) => {

const [recipes, setRecipes] = useState([]);

useEffect(() => {
    const getRecipes = () =>  {
        //calling the api to fetch all the recipes
        axios.get("http://localhost:8092/api/recipe/get").then((res) => {
            //console.log(res.data);
            setRecipes(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }
    getRecipes();
}, [])

//calling the deleteHandler
const deleteHandler = async (id) => {
    
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        if (window.confirm("Are You Sure? want to remove this Customer?")) {
        axios.delete(
            `http://localhost:8092/api/recipe/${id}`,
            
            config
            )
        }
            
        

       

    } catch (error) {
        
    }
};


    return (
        <div>
           <hr></hr>
           <div align = "center">
            <a href = "/add">
           <Button bg = "primary" variant='secondary'>Add a recipe</Button>
           </a>
           </div>
           <hr></hr>
         
           {recipes &&  recipes.length > 0 ?

recipes.reverse().map((recipe, index) => {
    return(
        <Container>
           <Card>
  <Card.Header style={{ display: "flex" }} as="h5">{recipe.Recipe_Name}
  <div>
          <Button href={`/add/${recipe._id}`} variant="success" className="mx-2">
                       Update
            </Button>

            <Button variant="danger" className="mx-2"
                                        onClick={() => deleteHandler(recipe._id)}>
                                        Delete
                                    </Button>
</div>
  
  
  </Card.Header>
  <Card.Body>
    <Card.Title>Ingredients : {recipe.Ingredients}</Card.Title>
    <Card.Text>
      Description : {recipe.Description}
    </Card.Text>
    
  </Card.Body>
</Card>
</Container>         
        
    )
}) : null}
</div>
)
}

export default LandingPage
