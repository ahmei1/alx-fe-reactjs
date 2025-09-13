import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import useRecipeStore from './recipeStore';
import SearchBar from './components/SearchBar';

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  React.useEffect(() => {
    // Initialize some dummy data on first render
    setRecipes([
      { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.' },
      { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy Indian chicken dish.' },
      { id: 3, title: 'Vegetable Soup', description: 'A hearty and healthy soup with a mix of vegetables.' },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
        <nav style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Link to="/">Home</Link>
          {/* Add more links for future tasks like Favorites and Recommendations */}
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
          {/* Routes for Favorites and Recommendations will go here in later tasks */}
        </Routes>
      </div>
    </Router>
  );
);

export default App;