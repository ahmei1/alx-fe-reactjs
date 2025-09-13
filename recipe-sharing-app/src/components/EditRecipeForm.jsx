import React, { useState } from 'react';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = ({ recipe, setIsEditing }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <br />
      <button type="submit">Save Changes</button>
      <button onClick={() => setIsEditing(false)} style={{ marginLeft: '10px' }}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;