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
      //reseting the task input
    } else {
      alert("Please Enter Task");
      // <Alert severity="info">
      // <AlertTitle>Info</AlertTitle>
      //  This is an info alert — <strong>Please Enter Task</strong>
      // </Alert>
}
  }
  function Addbutton(){
    return(
      <IconButton type="submit"><AddCircleOutlineIcon fontSize="large"/></IconButton>
    )
  }
  
  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <TextField 
        label="Enter Task"
        // type="text"
        value={todo}
        onChange={handleTaskInputChange}
        />
      <Addbutton />
      {/* <button type="submit">Add</button> */}
    </form>
  );
}
