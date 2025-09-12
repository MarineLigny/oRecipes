
import './App.scss'
import './components/Header.scss'
import './components/NavBar.scss'
import './components/CardComponent.scss'

import NavBarComponent from './components/NavBar';
import Header from './components/Header';
import AccueilPage from './pages/AccueilPage';
import RecettePage from './pages/RecipePage';
import ErrorPage from './components/ErrorPage';

import type IRecipe from '../src/@types/recipe';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { recipes as staticRecipes } from './data/recipes';




function App() {
  const [recipes] = useState<IRecipe[]>(staticRecipes);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='app'>
      {/* Barre de navigation sur le côté gauche */}
      <NavBarComponent
        recipes={recipes}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />
      {/* Contenu principal (Header + Cartes) */}
      <div className="rightbloc">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />

        {/*route page d'accueil avec React Route*/}
        <Routes>
          <Route
            path='/'
            element={
              <AccueilPage recipes={recipes} />
            }
          />

          <Route path="/api/recipes/:idOrSlug"
            element={
              <RecettePage recipes={recipes} />
            } />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </div>
    </div>
  )
}

export default App;
