import React from "react";
import Todoitem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}
