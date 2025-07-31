import { render, screen } from "@testing-library/react";
import Task from "../components/Task";

test("renders task text and category", () => {
  render(<Task text="Learn React" category="Code" onDeleteTask={() => {}} />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Code")).toBeInTheDocument();
});
