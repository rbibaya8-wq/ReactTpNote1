import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, onEdit, onDelete, onDuplicate }) {
  return (
    <div className="recipe-list">
      {recipes.map((r) => (
        <RecipeItem 
          key={r.id} 
          recipe={r} 
          onEdit={onEdit} 
          onDelete={onDelete}
          onDuplicate={onDuplicate}
        />
      ))}
    </div>
  );
}
export default RecipeList;