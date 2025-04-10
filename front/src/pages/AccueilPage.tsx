//import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from '../components/CardComponent';
import type IRecipe from '../@types/recipe';

interface RecipeProps {
  recipes: IRecipe[]
}

function AccueilPage({recipes}: RecipeProps) {
  
//console.log(recipes);
  return (
          <main>
            <h1>Les recettes:</h1>
            <p>Voici nos 6 recettes</p>
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
