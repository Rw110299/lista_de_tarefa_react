import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../src/components/TaskItem";

const task = { id: 1, text: "Tarefa teste", completed: false };

test("exibe o texto da tarefa", () => {
  render(<TaskItem task={task} toggleTask={() => {}} deleteTask={() => {}} />);
  expect(screen.getByText("Tarefa teste")).toBeInTheDocument();
});

test("chama toggleTask ao clicar na tarefa", () => {
  const toggleTask = jest.fn();
  render(<TaskItem task={task} toggleTask={toggleTask} deleteTask={() => {}} />);
  fireEvent.click(screen.getByText("Tarefa teste"));
  expect(toggleTask).toHaveBeenCalledWith(1);
});

test("chama deleteTask ao clicar no botão", () => {
  const deleteTask = jest.fn();
  render(<TaskItem task={task} toggleTask={() => {}} deleteTask={deleteTask} />);
  fireEvent.click(screen.getByText("❌"));
  expect(deleteTask).toHaveBeenCalledWith(1);
});
