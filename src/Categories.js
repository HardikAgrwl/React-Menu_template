import React from "react";
const Categories = ({ list, filterCategory }) => {
  return (
    <div className="btn-container">
      {list.map((category) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
