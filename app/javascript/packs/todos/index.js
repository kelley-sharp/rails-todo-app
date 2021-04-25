import React from "react";
import { render } from "react-dom";
import { TodoList } from "src/components/todo_list";

document.addEventListener("DOMContentLoaded", () => {
  const todoListContainer = document.getElementById("todo-list");

  // get the JSON string of todos off the data tag and convert it into
  //  an array of objects so we can pass it to the TodoList component
  const todos = JSON.parse(todoListContainer.getAttribute("data-todos"));

  render(<TodoList todos={todos} />, todoListContainer);
});
