import React from "react";
import Todoitem from "./TodoItem";
import { List } from "@material-ui/core"

export default function TodoList({ todos, onDeleteTodo, onTodoComplete }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onTodoComplete={onTodoComplete} />
      ))}
    </List>
  );
}
