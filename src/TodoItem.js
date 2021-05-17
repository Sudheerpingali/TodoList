import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton } from "@material-ui/core";

export default function Todoitem({ todo, onDeleteTodo,todoComplete}) {
  function deleteTodo() {
    onDeleteTodo(todo.id);
  }
  function handleCheckbox() {
    todoComplete(todo.id);
  }


  function Deletebutton({onClick}){
    return(
      <IconButton onClick={onClick}><DeleteOutlineIcon color="error"/></IconButton>
    )
  }

  return (
    <div className="list">
      <input type="checkbox" onClick={handleCheckbox} />
      <li style={{ textDecoration: todo.isComplete ? "line-through" : null }}>
        {todo.task}
      </li>
      <Deletebutton onClick={deleteTodo}/>
    </div>
  );
}
