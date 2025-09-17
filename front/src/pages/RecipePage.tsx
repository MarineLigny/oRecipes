import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type IRecipe from "../@types/recipe";
import './RecipePage.scss'

interface RecetteProps {
  recipes: IRecipe[];
}

function RecettePage({ recipes }: RecetteProps) {
  const navigate = useNavigate();
  const [recette, setRecette] = useState<IRecipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(recipes);
  const params = useParams();
  console.log(params);
  const recipeSlug = params.idOrSlug as string;
  console.log(recipeSlug);

  useEffect(() => {
    if (!recipeSlug) {
      setError("Aucun identifiant de recette fourni");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Chercher la recette dans les données locales
      const foundRecipe = recipes.find(recipe =>
        recipe.slug === recipeSlug || recipe.id.toString() === recipeSlug
      );

      if (foundRecipe) {
        setRecette(foundRecipe);
      } else {
        setError("Recette non trouvée");
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Erreur lors de la recherche de recette', error);
      setError("Erreur lors du chargement de la recette");
      setIsLoading(false);
    }
  }, [recipeSlug, recipes]);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (!recette) {
    return <p>Recette non trouvée</p>;
  }

  return (
    <div className="recipe-page-container">
      <button
        className="back-button"
        onClick={() => navigate('/')}
        type="button"
      >
        <ArrowLeft size={20} />
        Retour à l'accueil
      </button>

      <div className="recipe-page">
        <img className="recipe-image" src={recette?.thumbnail} alt={recette?.title} />
        <div className="recipe-title">
          <h2>{recette?.title} </h2>
          <p>Difficulté - {recette?.difficulty}</p>
        </div>

        {/* Ingrédients */}
        <div className="ingredients">
          <h4>Ingrédients:</h4>
          <ul className="ingredients">
            {recette?.ingredients.map((ingredient) => (
              <li
                key={ingredient.id}
              >
                <span className="ingredient-badge">{ingredient.quantity} {ingredient.unit}</span>
                <p>{ingredient.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <h4>Préparation</h4>
          <ul className="instructions">
            {recette.instructions.map((instruct, index) => (
              <li key={index}>
                {instruct}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>

  )
}
export default RecettePage;