import React from 'react';
import { render, screen } from "@testing-library/react";
import TaskList from "../src/components/TaskList";

const tasks = [
  { id: 1, text: "Tarefa 1", completed: false },
  { id: 2, text: "Tarefa 2", completed: true },
];

test("renderiza a lista de tarefas", () => {
  render(<TaskList tasks={tasks} toggleTask={() => {}} deleteTask={() => {}} />);
  expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
  expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
});
