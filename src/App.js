import "./styles.css";
import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function App() {
  const [todos, setTodos] = React.useState(()=>{
    return JSON.parse(localStorage.getItem("todos"));
  }

  );
  //creating a function that will take any todo and add it to the array of TOdos
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

  return (
    <>
    <AppBar style={{padding:15,fontSize:35,alignItems:"center",fontStyle:"italic"}}>Todo App</AppBar>
      
      <Grid item xs={6} style={{textAlign:"center",marginTop:"5rem"}}>
          <Paper>
          <Typography variant="h3" style={{padding:10}}>Todo List</Typography>
          <AddTodoForm onAddTodo={handleAddTodo} />
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTodoComplete={handleTodoComplete}/>
          </Paper>
    </Grid>
     
  </>
  )
}
