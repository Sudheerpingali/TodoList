import React from "react";
import { IconButton, TextField } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Alert, AlertTitle } from '@material-ui/lab'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles"
const useFormStyles = makeStyles(
  () => {
    return {
      button: {
        textAlign: "center"
      }
    };
  },
  {
    name: "Todoform"
  }
);

export default function AddTodoForm({ onAddTodo }) {
  const [todo, setTodo] = React.useState("");
  function handleTaskInputChange(e) {
    setTodo(e.target.value);
  }
  const [showAlert, setShowAlert] = React.useState(false)
  function handleSubmit(event) {
    event.preventDefault();
    if (todo) {
      onAddTodo({
        task: todo,
        isComplete: false,
        id: Math.random() * 100,
      });
      setShowAlert(false)
      setTodo("");

    } else {
      setShowAlert(true);
    }

  }
  const classes = useFormStyles();

  return (
    <form onSubmit={handleSubmit}>
      <div className='div'>
        <Grid component={Paper} item xs={10}>
          <TextField
            label="Enter Task"
            value={todo}
            onChange={handleTaskInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2} component={Paper} className={classes.button}><AddButton /></Grid>
      </div>
      <ErrorAlert show={showAlert} />
    </form>

  );
}
function AddButton() {
  return (
    <IconButton type="submit" color="primary"><AddCircleOutlineIcon fontSize="medium" /></IconButton>
  )
}

function ErrorAlert({ show }) {
  if (!show) {
    return null;
  }
  return (
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
       This is an info alert — <strong>Please Enter Task</strong>
    </Alert>
  )
}

