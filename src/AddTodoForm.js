import React from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [todo, setTodo] = React.useState("");
  function handleTaskInputChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (todo) {
      onAddTodo({
        task: todo,
        isComplete:false,
        id: Math.random() * 100
      });
      setTodo("");
      //reseting the task input
    } else {
      alert("Please Enter Task");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={handleTaskInputChange}
        placeholder="Enter Task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
