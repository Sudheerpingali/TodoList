import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Checkbox,ListItem,ListItemText,IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


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
    // <Grid item xs>
    <ListItem style={{backgroundColor:"lightyellow",marginBottom:10,borderRadius:10,fontWeight:"bold"}}>
     <Checkbox size="small" 
        onClick={handleCheckbox}
        inputProps={{ 'aria-label': 'checkbox with small size' }}
        checked={todo.isComplete}
      />
      <ListItemText primary={todo.task} style={{ textDecoration: todo.isComplete ? "line-through" : null}}/>
      <Deletebutton onClick={deleteTodo}/>
    </ListItem>
    // </Grid>
  );
}
