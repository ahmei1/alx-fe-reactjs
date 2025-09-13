import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  React.useEffect(() => {
    // Initialize some dummy data with ingredients for recommendations
    setRecipes([
      { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.', ingredients: ['spaghetti', 'eggs', 'pancetta', 'parmesan cheese'] },
      { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy Indian chicken dish.', ingredients: ['chicken', 'curry powder', 'onion', 'coconut milk'] },
      { id: 3, title: 'Vegetable Soup', description: 'A hearty and healthy soup with a mix of vegetables.', ingredients: ['carrots', 'potatoes', 'celery', 'onion'] },
      { id: 4, title: 'Roasted Chicken', description: 'Simple and delicious roasted chicken.', ingredients: ['chicken', 'rosemary', 'garlic', 'potatoes'] },
      { id: 5, title: 'Chicken Tacos', description: 'Spicy chicken tacos with salsa.', ingredients: ['chicken', 'taco shells', 'salsa', 'lettuce'] },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
        <nav style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/recommendations">Recommendations</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <AddRecipeForm />
                </div>
                <div style={{ flex: 2 }}>
                  <RecipeList />
                </div>
              </div>
            </>
          } />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;