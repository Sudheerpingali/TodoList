import React from "react";
import Todoitem from "./TodoItem";
import { Grid, List, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useAppStyles = makeStyles(
  () => {
    return {
      list: {
        marginTop: "1rem",
        padding: 10,
        backgroundColor: "pink"
      }
    };
  },
  {
    name: "Todolist"
  }
);


export default function TodoList({ todos, onDeleteTodo, onTodoComplete }) {
  const classes = useAppStyles();
  return (
    // <Grid container>
    <Grid item xs={12} className={classes.list}>
      <Paper>
        <List>
          {todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onTodoComplete={onTodoComplete} />
          ))}
        </List>
      </Paper>
    </Grid>
    // </Grid>
  );
}
