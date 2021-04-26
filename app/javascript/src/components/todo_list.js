import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NewTodoForm } from "./new_todo_form";
import { Todo } from "./todo";

export const TodoList = ({ todos }) => {
  console.log(todos);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <NewTodoForm />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h1>Todos</h1>
            {todos.map((todo, idx) => (
              <Todo key={todo.id} {...todo} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
