import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe("App", () => {
  test("should render input fields and app button", () => {
    render(<App />);

    const input = screen.getByRole("textbox", { name: "Add Task:" });
    const button = screen.getByRole("button", { name: "Add" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
