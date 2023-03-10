import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const onAdd = async () => {
    const { data } = await axios.post("/api/todo/create", {
      title,
      completed: false,
    });
    onAddTodo(data);
    console.log("Data", data);
    setTitle("");
  };

  const onEnterPress = event => {
    if (event.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="flex items-center justify-between space-x-4 mt-4">
      <input
        type="text"
        placeholder="Add todo"
        className="h-[50px] flex-1 rounded-md px-4 bordr-none outline-none text-lg"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={onEnterPress}
      />
      <button
        disabled={!title}
        onClick={onAdd}
        className="px-6 h-[50px] text-lg font-medium text-white bg-green-400 rounded-md disabled:bg-gray-200"
      >
        Add
      </button>
    </div>
  );
}
