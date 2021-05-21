import React from "react";
import { IconButton, TextField } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Alert, AlertTitle } from '@material-ui/lab'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles"
const useAppStyles = makeStyles(
  () => {
    return {
      form: {
        marginTop: "2rem",
        padding: 10,
        backgroundColor: "lightblue"
      },
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
  const classes = useAppStyles();
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


  return (
    // <Grid container>
    <Grid item xs={12} className={classes.form} component="form" onSubmit={handleSubmit}>
      <div className='div'>
        <Grid item xs={10}>
          <Paper>
            <TextField
              label="Enter Task"
              value={todo}
              onChange={handleTaskInputChange}
            // fullWidth
            /></Paper>
        </Grid>
        <Grid item xs={2} className={classes.button}><Paper><AddButton /></Paper></Grid>
      </div>
      <ErrorAlert show={showAlert} />
    </Grid>
    //  </Grid>

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

