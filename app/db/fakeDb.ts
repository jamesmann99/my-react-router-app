import { data, type RecipeDetails } from "./data";

export const fakeDb = (() => {
  let recipes: RecipeDetails[] = data;

  return {
    getRecipes: (): Promise<RecipeDetails[]> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(recipes), 1000);
      });
    },
    getRecipeById: (id: number): Promise<RecipeDetails | undefined> => {
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(recipes.find((recipe) => recipe.id === id)),
          1000,
        );
      });
    },
    addRecipe: (recipe: RecipeDetails): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          recipes.push(recipe);
          resolve();
        }, 1000);
      });
    },
    updateRecipe: (
      id: number,
      updatedRecipeDetails: Partial<RecipeDetails>,
    ): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          recipes = recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipeDetails } : recipe,
          );
          resolve();
        }, 1000);
      });
    },
    deleteRecipe: (id: number): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          recipes = recipes.filter((recipe) => recipe.id !== id);
          resolve();
        }, 1000);
      });
    },
  };
})();

export default fakeDb;
