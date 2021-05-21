import "./styles.css";
import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useAppStyles = makeStyles(
  () => {
    return {
      item: {
        marginTop: "2rem",
        fontStyle: "italic"
      },
      root: {
        padding: 10,
        margin: "0 auto"
      },
      paper: {
        textAlign: 'center',
      },
      form: {
        marginTop: "2rem"
      },
      todolist: {
        marginTop: "1rem"
      }
    };
  },
  {
    name: "App"
  }
);

export default function App() {
  const [todos, setTodos] = React.useState(() => {
    return JSON.parse(localStorage.getItem("todos"));
  }

  );
  function handleAddTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function handleDeleteTodo(key) {
    setTodos(todos.filter((todo) => todo.id !== key));
  }
  function handleTodoComplete(key) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === key) {
          return {
            ...todo,
            isComplete: !todo.isComplete,

          };
        }
        return todo;
      })
    );
  }
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);
  const classes = useAppStyles();

  return (
    <>
      <Grid container xs={6} sm={5} className={classes.root} >
        <Grid item xs={12} className={classes.item} >
          <Typography variant="h3" className={classes.paper}  >Todo List</Typography>
        </Grid>
        <Grid item xs={12} className={classes.form}>
          <AddTodoForm onAddTodo={handleAddTodo} /></Grid>
        <Grid item xs={12} className={classes.todolist}>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTodoComplete={handleTodoComplete} />
        </Grid>
      </Grid>

    </>
  )
}
