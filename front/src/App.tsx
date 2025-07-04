
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

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';




function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  

  useEffect(() => {
  const getRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/recipes',)
        //console.log(response.data);
        setRecipes(response.data);
      } catch (error) {
        console.log(error);
      }
  }
  getRecipes();
  //console.log(setRecipes);
  }, []);

  return (
    <div className='app'>
      {/* Barre de navigation sur le côté gauche */}
      <NavBarComponent recipes={recipes} />
      {/* Contenu principal (Header + Cartes) */}
      <div className="rightbloc">
        <Header />

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
          }/>

          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </div>
    </div>
  )
}

export default App;
