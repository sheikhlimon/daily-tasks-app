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

  test.todo("should add a task by enter key", () => {});
});
