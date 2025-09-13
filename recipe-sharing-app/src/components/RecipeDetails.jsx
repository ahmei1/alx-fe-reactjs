import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

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
          
          <DeleteRecipeButton recipeId={recipe.id} />
          
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