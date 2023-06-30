import React, { useState } from 'react';

const CategoryDropdown = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    props.onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Select a category:</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">-- Select a category --</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
};

export default CategoryDropdown;
