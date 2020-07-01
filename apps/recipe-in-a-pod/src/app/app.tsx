import React, { useEffect, useState } from 'react';
import { Recipe } from '@patandzeb/api-interfaces';
import Header from './components/header'

export const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      'MyRecipeOne': ['First', 'second', 'third']
    }
  ])
  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(r => setRecipes(recipes.concat(r)));
  }, []);

  const addRecipe = () => {
    const recipeName = `Pod ${recipes.length + 1}`
    const newRecipe = {
      [recipeName]: ['Ingredient 1']
    }
    fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(newRecipe)
    })
      .then(r => r.json())
      .then(r => setRecipes(recipes.concat(r)));
  }

  return (
    <>
      <Header />
      <div>
          {recipes.map(recipe => (
            <React.Fragment key={`${Math.floor(Math.random() * 100)}`} >
              <p>{Object.keys(recipe)[0]}</p>
              <ul>
                {Object.values(recipe).map(recipeItems => (
                  recipeItems.map(item => (
                    <li key={`${item}${Math.floor(Math.random() * 100)}`}>
                      {item}
                    </li>
                  ))
                ))}
              </ul>
            </React.Fragment>
          ))}
          <button onClick={addRecipe}>Add Recipe</button>
      </div>
    </>
  );
};

export default App;
