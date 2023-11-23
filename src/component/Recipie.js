import { useState, useEffect } from 'react';

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);

  async function getRecipe() {
    try {
      const urlPath = window.location.pathname;
      const id = urlPath.split('/').pop();
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const options = {
        method: 'GET'
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        throw new Error('Recipe not found');
      }
    } catch (error) {
      console.error(error);
      setRecipe(null);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  if (recipe === null) {
    return (
      <div className="page-loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}