import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const NewTodoForm = () => {
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // make request
    console.log("created new todo");
    setIsSubmitting(false);
    setNewTodo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="todoName">
        <Form.Label>Add a New Todo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Todo Name"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};
