import React from "react";

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
      onClick={() => toggleTask(task.id)}
    >
      {task.text}
      <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>
        ❌
      </button>
    </li>
  );
}
