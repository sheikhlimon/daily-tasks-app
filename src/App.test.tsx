import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe("App", () => {
  test("should render input fields and app button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("should add task to list when add button is clicked", () => {
    render(<App />);
    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, {
      target: {
        value: "New Task",
      },
    });

    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
});
