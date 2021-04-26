import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const Todo = ({ name, completed_at }) => {
  const [isComplete, setIsComplete] = useState(Boolean(completed_at));
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);

  const toggleComplete = () => {
    setIsComplete(!isComplete);

    if (!isComplete) {
      console.log("todo has been marked complete");
    } else {
      console.log("todo was marked incomplete");
    }
  };

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    console.log("todo updated");
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("todo deleted");
  };

  return (
    <Form.Row className="my-2 py-2 border-bottom border-dark">
      <Col xs={8} className="d-flex align-items-center">
        {isEditing ? (
          <Form.Control
            type="text"
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
          />
        ) : (
          <Form.Check
            type="checkbox"
            label={name}
            onChange={(event) => setIsComplete(event.target.checked)}
            checked={isComplete}
          />
        )}
      </Col>
      <Col xs={4} className="d-flex align-items-center">
        <Button
          variant={isEditing ? "primary" : "warning"}
          onClick={isEditing ? handleUpdate : toggleIsEditing}
          className="ml-auto mr-2"
        >
          {isEditing ? "update" : "edit"}
        </Button>
        <Button
          variant={isEditing ? "secondary" : "danger"}
          onClick={isEditing ? toggleIsEditing : handleDelete}
        >
          {isEditing ? "cancel" : "x"}
        </Button>
      </Col>
    </Form.Row>
  );
};
