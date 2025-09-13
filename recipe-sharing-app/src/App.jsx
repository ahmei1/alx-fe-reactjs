import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './recipeStore';

const App = () => {
  // Initialize some dummy data for demonstration
  const setRecipes = useRecipeStore(state => state.setRecipes);
  React.useEffect(() => {
    setRecipes([
      { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
      { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy chicken dish.' }
    ]);
  }, [setRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;