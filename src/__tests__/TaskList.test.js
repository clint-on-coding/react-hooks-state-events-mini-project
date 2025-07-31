import { render, screen } from "@testing-library/react";
import TaskList from '../components/TaskList';

test("renders task list", () => {
  const tasks = [
    { text: "One", category: "Code" },
    { text: "Two", category: "Food" }
  ];
  render(<TaskList tasks={tasks} onDeleteTask={() => {}} />);
  expect(screen.getByText("One")).toBeInTheDocument();
  expect(screen.getByText("Two")).toBeInTheDocument();
});

