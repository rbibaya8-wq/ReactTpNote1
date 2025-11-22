import React from "react";

function RecipeFilter({ search, category, setSearch, setCategory }) {
  return (
    <div className="filter">
      <input 
        placeholder="Rechercher une recette"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Toutes</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}
export default RecipeFilter;