import CardComponent from '../components/CardComponent';
import type IRecipe from '../@types/recipe';
import './AccueilPage.scss';

interface RecipeProps {
  recipes: IRecipe[]
}

function AccueilPage({recipes}: RecipeProps) {
  
//console.log(recipes);
  return (
          <main className='accueil-page'>
            <h1>Recettes:</h1>
            <p className='accueil-text'>Voici nos {recipes.length} desserts</p>
            <div className="card-Container">
              <ul className="cardContainer">
                {recipes.map((recipe)=>(
                  <li
                  key={recipe.id}
                  >
                  <CardComponent
                  recipe = {recipe}
                  /> 
                  </li>
                ))}
              </ul>
            </div>
          </main>
  )
}

export default AccueilPage;
