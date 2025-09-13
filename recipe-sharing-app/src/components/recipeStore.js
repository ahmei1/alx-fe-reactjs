import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  setRecipes: (recipes) => set({ recipes }),
  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
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
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

export default useRecipeStore;