import fakeDb from "~/db/fakeDb";
import RecipeDetails from "~/components/recipeDetails/RecipeDetails";
import type { Route } from "./+types/recipeDetailsPage";
import { Form, Link, redirect } from "react-router";

export function clientLoader({ params }: Route.LoaderArgs) {
  return fakeDb.getRecipeById(Number(params.id));
}

export async function clientAction({ params }: Route.ActionArgs) {
  await fakeDb.deleteRecipe(Number(params.id));
  return redirect("/");
}

export default function RecipeDetailsPage({
  loaderData,
}: Route.ComponentProps) {
  const recipe = loaderData;

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const buttonClassNames = "";

  return (
    <>
      <div className="flex justify-between m-8">
        <Link to="/" className="bg-blue-500 text-white p-2 rounded">
          Go Back
        </Link>
        <Form method="post" className="bg-red-500 text-white p-2 rounded">
          <button type="submit">Delete</button>
        </Form>
      </div>
      <RecipeDetails
        name={recipe.name}
        image={recipe.image}
        description={recipe.description}
      />
    </>
  );
}
