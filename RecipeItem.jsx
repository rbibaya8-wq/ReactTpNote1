import React from "react";

function RecipeItem({ recipe, onEdit, onDelete, onDuplicate }) {

  const Flames = () => {
    const flames = [];
    for (let i = 0; i < recipe.difficulty; i++) {
      flames.push(<span key={i} className="flame">🔥</span>);
    }
    return <div className="difficulty-flames">{flames}</div>;
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-img" />

      <h2>{recipe.name}</h2>
      <p className="cat">{recipe.category}</p>

      <div className="ingredients-container">
        {recipe.ingredients.map((ing, index) => (
          <span className="ingredient-tag" key={index}>
            {ing}
          </span>
        ))}
      </div>

      <div className="difficulty-box">
        <b>Difficulté: </b>
        <Flames />
      </div>

      <p className="description">{recipe.description}</p>

      {recipe.createdAt && (
        <p className="created-date">
          Créée le : <span>{recipe.createdAt}</span>
        </p>
      )}

      <div className="btns">
        <button onClick={() => onEdit(recipe)}>Modifier</button>
        <button onClick={() => onDuplicate(recipe)}>Dupliquer</button>
        <button onClick={() => onDelete(recipe.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default RecipeItem;