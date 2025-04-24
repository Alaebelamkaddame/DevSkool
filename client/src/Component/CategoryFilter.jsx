// components/CategoryFilter.js
import React from "react";

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`cursor-pointer border border-gray-400 px-5 py-2 rounded-full font-semibold transition 
            ${activeCategory === category
              ? "bg-blue-500 text-white border-blue-500"
              : "text-black hover:bg-gray-100"}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
