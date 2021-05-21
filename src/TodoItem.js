import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Checkbox, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useAppStyles = makeStyles(
  () => {
    return {
      listitem: {
        backgroundColor: "lightgreen",
        marginBottom: 10,
        borderRadius: 5
      },
      checkbox: {
        textAlign: "center"
      }
    };
  },
  {
    name: "Todoitem"
  }
);


export default function Todoitem({ todo, onDeleteTodo, onTodoComplete }) {
  function deleteTodo() {
    onDeleteTodo(todo.id);
  }
  function handleCheckbox() {
    onTodoComplete(todo.id);
  }


  function Deletebutton({ onClick }) {
    return (
      <IconButton onClick={onClick}><DeleteOutlineIcon color="error" /></IconButton>
    )
  }
  const classes = useAppStyles();

  return (
    //  <Grid item xs={12} >
    // <Paper >
    <ListItem className={classes.listitem}>
      {/* <Grid item xs={1} className={classes.checkbox}> */}
      {/* <Paper> */}
      <Checkbox size="medium"
        onClick={handleCheckbox}
        inputProps={{ 'aria-label': 'checkbox with small size' }}
        checked={todo.isComplete}
      />
      {/* </Paper> */}
      {/* // </Grid> */}
      <ListItemText primary={todo.task} style={{ textDecoration: todo.isComplete ? "line-through" : null }} />
      <Deletebutton onClick={deleteTodo} />
    </ListItem>
    // {/* </Grid> */}
  );
}
