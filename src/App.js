import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/todo-form/todo-form";
import { TodoList } from "./components/todo-list/todo-list";

function App() {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    dueDate: "",
    id: "",
    completed: false,
  });

  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const handleAddTodo = (newTodo) => {
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };
  const handleEditTodo = (todo) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === todo.id ? todo : item,
    );
    setTodoList(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const handleToggleCompletion = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodoList(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const handleDelete = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
  };

  const handleEdit = (todo) => {
    setTodoData(todo);
  };
  const handleCompleted = () => {
    const updatedTodoList = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => todo.completed === true,
    );
    setTodoList(updatedTodoList);
  };
  const handleAll = () => {
    setTodoList(JSON.parse(localStorage.getItem("todos")) || []);
  };
  const handleActive = () => {
    const updatedTodoList = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => todo.completed !== true,
    );
    setTodoList(updatedTodoList);
  };
  return (
    <div className="App">
      <TodoForm
        todoData={todoData}
        setTodoData={setTodoData}
        handleAddTodo={handleAddTodo}
        handleEditTodo={handleEditTodo}
      />
      <TodoList
        todoList={todoList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleCompletion={handleToggleCompletion}
        handleCompleted={handleCompleted}
        handleAll={handleAll}
        handleActive={handleActive}
      />
    </div>
  );
}

export default App;
