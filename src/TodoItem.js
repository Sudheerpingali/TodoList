import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Checkbox, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useItemStyles = makeStyles(
  () => {
    return {
      listitem: {
        backgroundColor: "lightgrey",
        marginBottom: 10,
        borderRadius: 5
      },
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
  const classes = useItemStyles();

  return (
    <ListItem className={classes.listitem}>
      <Checkbox size="medium"
        onClick={handleCheckbox}
        inputProps={{ 'aria-label': 'checkbox with small size' }}
        checked={todo.isComplete}
      />
      <ListItemText primary={todo.task} style={{ textDecoration: todo.isComplete ? "line-through" : null }} />
      <Deletebutton onClick={deleteTodo} />
    </ListItem>
  );
}
