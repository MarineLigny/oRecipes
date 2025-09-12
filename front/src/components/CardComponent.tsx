import type IRecipe from '../@types/recipe';
import { useNavigate } from 'react-router-dom';


interface RecipeList {
  recipe: IRecipe;
}

function CardComponent({ recipe }: RecipeList) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/api/recipes/${recipe.slug}`);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/api/recipes/${recipe.slug}`);
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <img
        src={recipe.thumbnail}
        alt="cookies"
        className="card-img"
      />
      <h2 className="card-title">{recipe.title}</h2>
      <p className="card-difficulty">{recipe.difficulty}</p>
      <button
        type="button"
        className="card-btn"
        onClick={handleButtonClick}
      >
        Voir la recette
      </button>
    </div>
  );
}

export default CardComponent;