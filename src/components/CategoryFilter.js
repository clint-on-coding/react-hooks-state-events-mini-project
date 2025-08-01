import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const buttons = categories.map(cat => (
    <button
      key={cat}
      className={cat === selectedCategory ? "selected" : ""}
      onClick={() => onCategoryChange(cat)}
    >
      {cat}
    </button>
  ));

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;

