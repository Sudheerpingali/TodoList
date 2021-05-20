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
      setShowAlert(false)
      setTodo("");
      
    } else{
       setShowAlert(true);
    }

  }
  
  
  return (
    <Grid item xs={12}  style={{alignItems:"center",margin:10}}>
    <form  onSubmit={handleSubmit}>
      <div style={{display:"flex"}}>
   
      <TextField 
        label="Enter Task"
        value={todo}
        onChange={handleTaskInputChange}
        fullWidth
      />
      <AddButton />

      </div>
      <AlertE show={showAlert}/>
      </form>
     </Grid>
  );
}
function AddButton(){
  return(
    <IconButton type="submit" color="primary"><AddCircleOutlineIcon fontSize="medium"/></IconButton>
  )
}

function AlertE({show}){
  if(!show){
    return null;
  }
  return(
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
       This is an info alert — <strong>Please Enter Task</strong>
      </Alert>
  )
}

