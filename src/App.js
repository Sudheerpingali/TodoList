import "./styles.css";
import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
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
    <AppBar style={{padding:20,fontSize:35,alignItems:"center",fontStyle:"italic"}}>Todo App</AppBar>
      <div className="maindiv">
          <Typography variant="h2" style={{marginTop: 20,padding:20}}>ToDo List</Typography>
          <AddTodoForm onAddTodo={handleAddTodo} />
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onTodoComplete={handleTodoComplete}/>
        
      </div>
  </>
  )
}
