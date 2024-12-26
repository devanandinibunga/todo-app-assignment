import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./todo-list.scss";

export const TodoList = ({
  todoList,
  handleDelete,
  handleEdit,
  handleToggleCompletion,
  handleCompleted,
  handleAll,
  handleActive,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterClick = (filterName, filterHandler) => {
    setSelectedFilter(filterName); // Update the active filter
    filterHandler(); // Call the appropriate handler
  };
  return (
    <>
      <div className="filter-btns">
        <button
          onClick={() => handleFilterClick("all", handleAll)}
          className={selectedFilter === "all" ? "active-filter" : ""}
        >
          ALL
        </button>
        <button
          onClick={() => handleFilterClick("completed", handleCompleted)}
          className={selectedFilter === "completed" ? "active-filter" : ""}
        >
          COMPLETED
        </button>
        <button
          onClick={() => handleFilterClick("active", handleActive)}
          className={selectedFilter === "active" ? "active-filter" : ""}
        >
          ACTIVE
        </button>
      </div>
      <ul>
        {todoList?.map((todo) => (
          <div className="todo-list-container">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(todo.id)}
            />
            <li
              key={todo?.id}
              className={`todo-list ${todo.completed ? "completed" : ""}`}
            >
              <div className="details">
                <strong>Title:</strong> {todo.title} <br />
                <strong>Description:</strong> {todo.description} <br />
                <strong>Due Date:</strong> {todo.dueDate}
              </div>
              <div className="btns-container">
                <i
                  className="bi bi-pencil-square edit-btn"
                  onClick={() => handleEdit(todo)}
                ></i>

                <i
                  className="bi bi-trash delete-btn"
                  onClick={() => handleDelete(todo?.id)}
                ></i>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
