import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/recipeListPage.tsx"),
  route("/:id", "routes/recipeDetailsPage.tsx"),
] satisfies RouteConfig;
