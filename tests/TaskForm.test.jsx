import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../src/components/TaskForm";

test("adiciona uma nova tarefa ao enviar o formulário", () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);

  const input = screen.getByPlaceholderText("Nova tarefa");
  const button = screen.getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Minha tarefa" } });
  fireEvent.click(button);

  expect(addTask).toHaveBeenCalledWith("Minha tarefa");
  expect(input.value).toBe("");
});
