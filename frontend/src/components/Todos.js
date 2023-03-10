import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
import AddTodo from "./AddTodo";

export default function Todos() {
  const [todosList, setTodosList] = useState([]);
  const getTodos = async () => {
    const { data } = await axios.get("/api/todo");
    setTodosList(data);
    console.log("----", data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  const onDelete = async id => {
    const { data } = await axios.delete(`/api/todo/${id}`);
    setTodosList(data);
  };

  const onSelect = async (id, completed) => {
    console.log("selected");
    const { data } = await axios.put(`/api/todo/${id}`, { completed });
    console.log("data od select", data);
    setTodosList(data);
  };

  const onAddTodo = item => {
    setTodosList(prevTodos => [...prevTodos, item]);
  };

  return (
    <>
      <AddTodo onAddTodo={onAddTodo} />
      <div className="bg-white rounded-md my-6">
        {todosList.map(item => (
          <TodoItem
            onSelect={onSelect}
            onDelete={onDelete}
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}
