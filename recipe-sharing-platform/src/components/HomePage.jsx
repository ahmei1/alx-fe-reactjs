import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import the mock data
import recipesData from '../data.json'; 

const RecipeCard = ({ recipe }) => (
  <Link to={`/recipe/${recipe.id}`}>
    {/* Responsive styling with hover effects */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02] cursor-pointer h-full">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://www.istockphoto.com/photo/sphagetti-and-meatball-gm2152450317-573454157?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fsphagitti&utm_medium=affiliate&utm_source=unsplash&utm_term=sphagitti%3A%3A%3A"; }}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 truncate">
          {recipe.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {recipe.summary}
        </p>
        <p className="mt-3 text-blue-600 font-medium">
          View Recipe Details →
        </p>
      </div>
    </div>
  </Link>
);

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data on mount
    setRecipes(recipesData);
  }, []);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Featured Recipes
      </h1>
      
      {/* Responsive Grid Layout (Task 1, Step 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;