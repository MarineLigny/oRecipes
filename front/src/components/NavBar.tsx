import { NavLink } from "react-router-dom";
import type IRecipe from "../@types/recipe";

interface INavBar {
  recipes: IRecipe[];
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

function NavBarComponent({ recipes, isMobileMenuOpen, onToggleMobileMenu }: INavBar) {
  const handleLinkClick = () => {
    // Fermer le menu mobile quand on clique sur un lien
    if (isMobileMenuOpen) {
      onToggleMobileMenu();
    }
  };

  return (
    <>
      <nav className={`leftbloc ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <NavLink
          className="nav-item"
          to="/"
          data-discover="true"
          onClick={handleLinkClick}
        >
          Accueil
        </NavLink>
        <ul className="nav">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="nav-item">
              <NavLink
                className="nav-item"
                to={`/api/recipes/${recipe.slug}`}
                data-discover="true"
                onClick={handleLinkClick}
              >
                {recipe.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay pour fermer le menu en cliquant à côté */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={onToggleMobileMenu}
        />
      )}
    </>
  );
}

export default NavBarComponent;