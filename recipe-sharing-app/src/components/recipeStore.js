import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',

  // Action to set the initial list of recipes
  setRecipes: (recipes) => set({ recipes }),

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),

  // Action to delete a recipe by its ID
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])]
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    if (state.favorites.length === 0) {
      // Simple mock: recommend random recipes if no favorites
      const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
      return { recommendations: shuffled.slice(0, 3) };
    }
    
    const favoriteRecipes = state.recipes.filter(recipe => state.favorites.includes(recipe.id));
    const allIngredients = [...new Set(favoriteRecipes.flatMap(r => r.ingredients))];

    // Recommend recipes that share common ingredients with favorites
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) &&
      recipe.ingredients.some(ingredient => allIngredients.includes(ingredient))
    );
    
    return { recommendations: recommended.slice(0, 3) };
  }),
}));

export default useRecipeStore;