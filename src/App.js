import "./styles.css";
import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

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
  function todoComplete(key) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === key) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          };
        }
        return todo;
      })
    );
  }
  // React.useEffect(() => {
  //   const storedtodos = JSON.parse(localStorage.getItem("todos"));
  //   if (storedtodos) {
  //     setTodos(storedtodos);
  //   }
  // }, []);
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="maindiv">
        <div className="childdiv">
          <h1>Todo List</h1>
          <AddTodoForm onAddTodo={handleAddTodo} />
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} todoComplete={todoComplete}/>
        </div>
      </div>
    </>
  );
}
