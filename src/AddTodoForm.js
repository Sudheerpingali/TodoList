import React from "react";
import {IconButton, TextField} from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Alert ,AlertTitle} from '@material-ui/lab'

export default function AddTodoForm({ onAddTodo }) {
  const [todo, setTodo] = React.useState("");
  function handleTaskInputChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (todo) {
      onAddTodo({
        task: todo,
        isComplete:false,
        id: Math.random() * 100,
        
      });
      setTodo("");
      
    } else {
      alert("Please Enter Task");
      
}
  }
  
  
  return (
    <form  onSubmit={handleSubmit}>
      <TextField 
        label="Enter Task"
        value={todo}
        onChange={handleTaskInputChange}
      />
      <AddButton />
      
     </form>
  );
}
function AddButton(){
  return(
    <IconButton type="submit" color="primary"><AddCircleOutlineIcon fontSize="large"/></IconButton>
  )
}

{/* <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
       This is an info alert — <strong>Please Enter Task</strong>
      </Alert> */}