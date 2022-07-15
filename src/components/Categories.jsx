import React from "react";
import { categories } from "../constants";

const Categories = ({ value, onChangeCategory }) => {
  
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
