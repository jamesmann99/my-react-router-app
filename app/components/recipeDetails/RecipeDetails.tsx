interface RecipeDetailsProps {
  name: string;
  image: string;
  description?: string;
}

export default function RecipeDetails({
  name,
  image,
  description,
}: RecipeDetailsProps) {
  return (
    <div className="w-96 bg-blue-950 m-auto block mt-20 p-4 rounded-md">
      <h3>{name}</h3>
      <img src={image} alt={name} className="w-92 m-auto mt-4 mb-4" />
      <p>{description}</p>
    </div>
  );
}
