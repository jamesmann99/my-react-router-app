import { useState } from "react";
import { Link } from "react-router";
import type { RecipeDetails } from "~/db/data";

interface RecipeProps extends RecipeDetails {}

export default function Recipe({ name, image, id }: RecipeProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/${id}`}>
      <div className="w-60 bg-blue-950 m-auto block mt-4 p-4 rounded-md">
        <h3>{name}</h3>
        <img src={image} alt={name} className="w-60 m-auto" />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleLikeClick();
          }}
        >
          {isLiked ? "Unlike" : "Like"}{" "}
        </button>
      </div>
    </Link>
  );
}
