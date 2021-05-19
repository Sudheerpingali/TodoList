import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import { IconButton } from "@material-ui/core";
import { Checkbox,ListItem,ListItemText,IconButton } from '@material-ui/core';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

export default function Todoitem({ todo, onDeleteTodo,onTodoComplete}) {
  function deleteTodo() {
    onDeleteTodo(todo.id);
  }
  function handleCheckbox() {
    onTodoComplete(todo.id);
  }


  function Deletebutton({onClick}){
    return(
      <IconButton onClick={onClick}><DeleteOutlineIcon color="error"/></IconButton>
    )
  }


  return (
    <ListItem>
     <Checkbox size="small" 
        onClick={handleCheckbox}
        inputProps={{ 'aria-label': 'checkbox with small size' }}
        checked={todo.isComplete}
      />
      <ListItemText  primary={todo.task} style={{ textDecoration: todo.isComplete ? "line-through" : null }}/>
      <Deletebutton onClick={deleteTodo}/>
    </ListItem>
  );
}
