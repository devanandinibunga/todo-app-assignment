import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo-form.scss";

export const TodoForm = ({
  todoData,
  setTodoData,
  handleAddTodo,
  handleEditTodo,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodoData({ ...todoData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(todoData);
    if (todoData?.id) {
      handleEditTodo(todoData);
    } else {
      const newTodo = { ...todoData, id: uuidv4() };
      handleAddTodo(newTodo);
    }
    setTodoData({
      title: "",
      description: "",
      dueDate: "",
      id: "",
      completed: false,
    });
  };

  return (
    <form className="row g-3 todo-form" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="validationDefault01" className="form-label" >
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault01"
          value={todoData?.title}
          required
          name="title"
          onChange={handleChange}
          placeholder="Enter the title"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault02" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault02"
          value={todoData?.description}
          name="description"
          onChange={handleChange}
          placeholder="Enter the description"
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault02" className="form-label">
          Due Date
        </label>
        <input
          type="date"
          className="form-control"
          id="validationDefault02"
          value={todoData?.dueDate}
          required
          name="dueDate"
          onChange={handleChange}
          placeholder="Select the date"
        />
      </div>
      <div className="col-12">
        <button className="btn btn-primary save-btn" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};
