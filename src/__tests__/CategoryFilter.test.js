import { render, screen } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";

test("renders category buttons", () => {
  const categories = ["All", "Code", "Food"];
  render(<CategoryFilter categories={categories} selectedCategory="All" onCategoryChange={() => {}} />);
  categories.forEach(category => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});
