import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Checkbox,ListItem,ListItemText,IconButton } from '@material-ui/core';


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
    <ListItem style={{backgroundColor:"white",borderRadius:10,marginBottom:5,marginTop:5}}>
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
