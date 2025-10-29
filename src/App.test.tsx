import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

describe("App", () => {
  test("should render input fields and app button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should add task to list when add button is clicked", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await userEvent.type(input, "New Task");

    await userEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("should clear input field after adding a task", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });

    const button = screen.getByRole("button", { name: "Add" });

    await userEvent.type(input, "New Task");

    await userEvent.click(button);

    expect(input).toHaveValue("");
  });

  test("should not add an empty task", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });

    const button = screen.getByRole("button", { name: "Add" });

    await userEvent.type(input, "     ");

    await userEvent.click(button);

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  test("should add a task by enter key", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });

    await userEvent.type(input, "New Task {enter}");

    expect(screen.queryAllByRole("listitem")).toHaveLength(1);
  });

  test("should toggle task completion when checkbox is clicked", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await userEvent.type(input, "New Task");
    await userEvent.click(button);

    const checkbox = screen.getByRole("checkbox", { name: "New Task" });
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("should delete task when delete button is clicked", async () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    await userEvent.type(input, "Task to Delete");
    await userEvent.click(button);

    expect(screen.getByText("Task to Delete")).toBeInTheDocument();

    const deleteButton = screen.getByRole("button", {
      name: "Delete Task to Delete",
    });
    await userEvent.click(deleteButton);

    expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
  });
});
