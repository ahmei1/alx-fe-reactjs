import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipe.id);
      navigate('/');
    }
  };

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} setIsEditing={setIsEditing} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
          <button
            onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}
            style={{ marginLeft: '10px' }}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;