import React from "react";
import { useState } from "react";
import { categories } from "../constants";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => setSelectedCategory(i)}
            className={selectedCategory === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
