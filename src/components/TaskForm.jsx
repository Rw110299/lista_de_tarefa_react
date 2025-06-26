import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (taskText.trim() === "") return;
    addTask(taskText.trim());
    setTaskText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
