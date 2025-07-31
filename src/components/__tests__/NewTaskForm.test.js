import { render, screen } from "@testing-library/react";
import NewTaskForm from '../NewTaskForm';


test("renders form inputs", () => {
  const categories = ["All", "Code", "Food"];
  render(<NewTaskForm categories={categories} onTaskFormSubmit={() => {}} />);
  expect(screen.getByPlaceholderText("New task details")).toBeInTheDocument();
});


