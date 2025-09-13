import React from 'react';
import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Personalized Recommendations</h2>
      <button onClick={generateRecommendations} style={{ marginBottom: '15px' }}>
        Refresh Recommendations
      </button>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available. Add some favorites to get started!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
