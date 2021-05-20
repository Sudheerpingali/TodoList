import React from "react";
import {IconButton, TextField} from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Alert ,AlertTitle} from '@material-ui/lab'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


export default function AddTodoForm({ onAddTodo }) {
  const [todo, setTodo] = React.useState("");
  function handleTaskInputChange(e) {
    setTodo(e.target.value);
  }
  const [showAlert,setShowAlert]=React.useState(false)
  function handleSubmit(event) {
    event.preventDefault();
    if (todo) {
      onAddTodo({
        task: todo,
        isComplete:false,
        id: Math.random() * 100,
      });
      setTodo("");
      
    } else{
       alert("Please Enter Task");
       
    }

  }
  
  
  return (
    <Grid item xs={13} style={{alignItems:"center",margin:10}}>
    <Paper style={{backgroundColor:"lightblue"}}>
    <form  onSubmit={handleSubmit}>
    <Typography variant="h4" style={{padding:5}}>Todo List</Typography>
      <TextField 
        label="Enter Task"
        value={todo}
        onChange={handleTaskInputChange}
      />
      <AddButton />
      
      </form>
      </Paper>
     </Grid>
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
      </Alert>  */}