import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const AddRecipe = () => {


    return (
        <div>
            <Container>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Recipe Name</Form.Label>
    <Form.Control type="text" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Ingredients</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
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
