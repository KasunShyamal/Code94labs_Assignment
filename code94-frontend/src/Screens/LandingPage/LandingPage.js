import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddRecipe from '../AddRecipe/AddRecipe'

const LandingPage = () => {
    return (
        <div>
           <hr></hr>
           <div align = "center">
            <a href = "/add">
           <Button bg = "primary" variant='secondary'>Add recipe</Button>
           </a>
           </div>
           <hr></hr>
           <div>
           <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
           </div>
           
        </div>
    )
}

export default LandingPage
