import React, { useState, useEffect } from "react";

function RecipeForm({ onSubmit, editingRecipe, onClose }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Entrée");
  const [ingredients, setIngredients] = useState([""]);
  const [difficulty, setDifficulty] = useState(1);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingRecipe) {
      setName(editingRecipe.name);
      setCategory(editingRecipe.category);
      setIngredients(editingRecipe.ingredients);
      setDifficulty(editingRecipe.difficulty);
      setDescription(editingRecipe.description);
      setImage(editingRecipe.image);
    }
  }, [editingRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: editingRecipe ? editingRecipe.id : Date.now(),
      name,
      category,
      ingredients,
      difficulty,
      description,
      image,
    });
    onClose();
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const removeIngredient = (i) =>
    setIngredients(ingredients.filter((_, index) => index !== i));

  const updateIngredient = (value, i) => {
    const newArr = [...ingredients];
    newArr[i] = value;
    setIngredients(newArr);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="form">
        <h2>{editingRecipe ? "Modifier la recette" : "Nouvelle recette"}</h2>

        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nom" />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Plat</option>
          <option>Entrée</option>
          <option>Dessert</option>
          <option>Boisson</option>
        </select>

        <h4>Ingrédients :</h4>
        {ingredients.map((ing, index) => (
          <div key={index} className="row">
            <input
              value={ing}
              onChange={(e) => updateIngredient(e.target.value, index)}
            />
            <button type="button" className="btn-remove-ing" onClick={() => removeIngredient(index)}>X</button>
          </div>
        ))}
        <button className="btn-add-ing" type="button" onClick={addIngredient}>Ajouter ingrédient</button>

        <input
          type="number"
          min="1"
          max="5"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />

        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <input onChange={(e) => setImage(e.target.value)} type="file"  />

        <button type="submit" className="btn-save">Enregistrer</button>
        <button type="button" className="btn-cancel" onClick={onClose}>Annuler</button>
      </form>
    </div>
  );
}
export default  RecipeForm;
