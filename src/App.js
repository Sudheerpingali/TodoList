import "./styles.css";
import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
const useAppStyles = makeStyles(
  () => {
    return {
      item: {
        marginTop: "2rem",
      },
      root: {
        background: "black",
        padding: 10
      },
      paper: {
        textAlign: 'center',
        backgroundColor: 'yellow'
      },
      listitem: {
        backgroundColor: "lightyellow",
        marginBottom: 10,
        borderRadius: 10
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
      {/* <AppBar style={{padding:15,fontSize:35,alignItems:"center",fontStyle:"italic"}}>Todo App</AppBar> */}
      <Grid container xs={12} className={classes.root} >
        <Grid item xs={12} className={classes.item} >
          <Grid items xs={12}>
            <Paper className={classes.paper} >
              <Typography variant="h3" >Todo List</Typography>
            </Paper>
          </Grid>

          <Paper>
            <AddTodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTodoComplete={handleTodoComplete} />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
