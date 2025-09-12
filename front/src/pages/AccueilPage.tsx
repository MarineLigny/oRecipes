import CardComponent from '../components/CardComponent';
import { FilterBar } from '../components/FilterBar';
import type IRecipe from '../@types/recipe';
import { useState, useMemo } from 'react';
import './AccueilPage.scss';

interface RecipeProps {
  recipes: IRecipe[]
}

function AccueilPage({ recipes }: RecipeProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('');

  // Filtrer les recettes selon les critères de recherche
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = difficulty === '' || recipe.difficulty === difficulty;
      return matchesSearch && matchesDifficulty;
    });
  }, [recipes, searchTerm, difficulty]);

  return (
    <div>
      <FilterBar
        searchTerm={searchTerm}
        difficulty={difficulty}
        onSearchChange={setSearchTerm}
        onDifficultyChange={setDifficulty}
      />

      <div className='accueil-page'>
        <h1>Recettes :</h1>
        <p className='accueil-text'>
          {filteredRecipes.length === recipes.length
            ? `Ici mes ${recipes.length} recettes`
            : `${filteredRecipes.length} recette(s) trouvé(s) sur ${recipes.length}`
          }
        </p>

        <div className="card-Container">
          <ul className="cardContainer">
            {filteredRecipes.map((recipe) => (
              <li key={recipe.id}>
                <CardComponent recipe={recipe} />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default AccueilPage;
