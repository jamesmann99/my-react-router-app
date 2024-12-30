import type { RecipeDetails } from "~/db/data";
import Recipe from "../recipe/Recipe";
import { Form } from "react-router";

interface RecipeListProps {
  recipes: RecipeDetails[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <>
      <Form method="post" navigate={false}>
        <input type="number" name="id" />
        <input type="text" name="name" />
        <button type="submit">Create Todo</button>
      </Form>
      <div className="recipeListContainer">
        <div>Recipes For You!</div>
        <div className="flex flex-row flex-wrap gap-6">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
