import React, { useState } from "react";
import Aide from "../Composant/Aide";
import RecipeList from "../Composant/RecipeList";
import RecipeFilter from "../Composant/RecipeFilter";
import RecipeForm from "../Composant/RecipeForm";
import Pagination from "../Composant/Pagination";
import recipesData from "../data/Recipes";

function MainPagee() {

  const [recipes, setRecipes] = useState(recipesData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || r.category === category)
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedRecipes = filtered.slice(start, end);
  const addOrEditRecipe = (recipe) => {
  const now = new Date().toLocaleString();

  if (editingRecipe) {
    setRecipes(recipes.map((r) =>
      r.id === recipe.id ? { ...recipe, createdAt: r.createdAt } : r
    ));
  } else {
    setRecipes([...recipes, { ...recipe, createdAt: now }]);
  }
};

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  const duplicateRecipe = (recipe) => {
    const newRecipe = { ...recipe, id: Date.now() };
    setRecipes([...recipes, newRecipe]);
  };

  return (
      <div>
      <div className="header">
    <div className="logo-title">
      <img src="./images/logoRecipe.jpeg" alt="Logo" className="logo" /> 
      <h1>Creative Recipe Builder</h1>
    </div>
    <RecipeFilter
      search={search}
      category={category}
      setSearch={setSearch}
      setCategory={setCategory}
    />
    <button className="btn-Create" onClick={() => { setEditingRecipe(null); setShowForm(true); }}>
        + Nouvelle Recette
    </button>
  </div>

      <RecipeList
        recipes={paginatedRecipes} 
        onEdit={(r) => { setEditingRecipe(r); setShowForm(true); }}
        onDelete={deleteRecipe}
        onDuplicate={duplicateRecipe}
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChangePage={setPage}
      />

      <Aide />

      {showForm && (
        <RecipeForm
          onSubmit={addOrEditRecipe}
          editingRecipe={editingRecipe}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default MainPagee;
