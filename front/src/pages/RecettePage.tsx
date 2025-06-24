import { useState } from "react";
import { useParams } from "react-router";
import type IRecipe from "../@types/recipe";
import { useEffect } from "react";
import axios from "axios";
import './RecipePage.scss'

interface RecetteProps {
    recipes: IRecipe[];
  }

function RecettePage({recipes}: RecetteProps) {

const [recette, setRecette] = useState<IRecipe|null>(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

console.log(recipes);
const params = useParams();
console.log(params);
const recipeSlug = params.idOrSlug as string;
console.log(recipeSlug);

useEffect(() => {
    const getRecipe = async () => {
        if (!recipeSlug) {
                setError("Aucun identifiant de recette fourni");
                setIsLoading(false);
                return;
            }

        try {
            setIsLoading(true);
            setError(null);

            const response = await axios.get(`http://localhost:3001/api/recipes/${recipeSlug}`);
            console.log(response.data);
            setRecette(response.data);
            setIsLoading(false);
        } catch (error) {
          console.log('Erreur lors du Fetch', error);
        }
    }
    getRecipe();
    //console.log(setRecipes);
    }, [recipeSlug]);

    if (isLoading) {
        return <p>Chargement en cours...</p>;
      }

    if (!recette) {
        return <p>Recette non trouvée</p>;
    }

    return (  
        <main className="recipe-page">
                <img className="recipe-image" src={recette?.thumbnail} alt={recette?.title} />
                <div className="recipe-title">
                    <h2>{recette?.title} </h2> 
                    <p>Difficulté - {recette?.difficulty}</p>
                </div>

            {/* Ingrédients */}
            <div className="ingredients">
                <h4>Ingrédients:</h4>
                <ul className="ingredients">
                    {recette?.ingredients.map((ingredient)=>(
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

        </main>
    )
}
export default RecettePage;