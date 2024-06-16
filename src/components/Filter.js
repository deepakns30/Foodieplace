import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [ingredient, setIngredient] = useState('');
  const [diet, setDiet] = useState('');

  const handleFilter = () => {
    onFilter({ ingredient, diet });
  };

  return (
    <div>
      <h2>Filter Recipes</h2>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Ingredient"
      />
      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="">Select Diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
