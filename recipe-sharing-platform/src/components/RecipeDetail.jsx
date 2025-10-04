import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [recipe, setRecipe] = useState(null);
  
  // Find the recipe based on the URL ID
  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center p-12 text-2xl font-semibold text-gray-600">
        Recipe not found!
      </div>
    );
  }

  // Split instructions into an array for ordered list display
  const instructionsList = recipe.instructions.split('\n').filter(step => step.trim() !== '');

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-block transition-colors"
      >
        ← Back to all Recipes
      </Link>
      
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />
        
        <div className="p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            {recipe.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{recipe.summary}</p>

          {/* Ingredients Section (Styled with Tailwind) */}
          <div className="mb-10 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions Section (Styled with Tailwind) */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              Preparation Steps
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 pl-4">
              {instructionsList.map((step, index) => (
                <li key={index} className="text-base leading-relaxed">
                  <span className="font-semibold text-gray-800">Step {index + 1}:</span> {step.trim()}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;