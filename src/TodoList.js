import React from "react";
import Todoitem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo,todoComplete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} todoComplete={todoComplete}/>
      ))}
    </ul>
  );
}
