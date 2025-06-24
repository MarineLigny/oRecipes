import type IRecipe from '../@types/recipe';
import { Link, } from 'react-router';


interface RecipeList {
  recipe: IRecipe;
}

function CardComponent({recipe}: RecipeList) {
//console.log(recipe);
  //Retourne le morceau de JSX qui décrit une recette
  return (
    <Link to={`/api/recipes/${recipe.slug}`} className="card-link">
      <div className="card">
          <img
            src={recipe.thumbnail}
            alt="cookies"
            className="card-img"
          />
          <h2 className="card-title">{recipe.title}</h2>
          <p className="card-difficulty">{recipe.difficulty}</p>
          <Link to={`/api/recipes/${recipe.slug}`}>
            <button 
              type="button" 
              className="card-btn"
              >
              Voir la recette
            </button>
          </Link>
      </div>  
    </Link> 
  );
}

export default CardComponent;