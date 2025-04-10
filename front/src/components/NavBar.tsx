import { NavLink } from "react-router";
import type IRecipe from "../@types/recipe";

interface INavBar {
  recipes: IRecipe[];
}

function NavBarComponent({recipes}: INavBar) {
  return (
    <>
      <nav className="leftbloc">
        <NavLink 
          className="nav-item" 
          to="/" 
          data-discover="true">Accueil
        </NavLink >
      <ul className="nav" >
        {recipes.map((recipe)=>(
          <li key={recipe.id}
          className="nav-item" 
          >
          <NavLink  
          className="nav-item" 
          to={`/api/recipes/${recipe.id}`}
          data-discover="true">{recipe.title}
          </NavLink >
        </li>
        ))}
        
      </ul>
    </nav>
    </>
  );
}

export default NavBarComponent;