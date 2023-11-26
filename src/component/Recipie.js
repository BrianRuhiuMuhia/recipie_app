import { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  function downloadNote(note) {
    const blobInstructions = new Blob([note["strInstructions"]], {type: 'text/plain'});
//     const blobIngredients=new Blob(note["strIngredients"],{type:"text/plain"})
//     const blobs = [blobInstructions, blobIngredients]
//     const promises = blobs.map(blob => blob.arrayBuffer());
//     Promise.all(promises)
//   .then(arrayBuffers => {
//     // Concatenate the array buffers into one
//     const combinedArrayBuffer = arrayBuffers.reduce((accumulator, current) => {
//       const totalLength = accumulator.byteLength + current.byteLength;
//       const result = new Uint8Array(totalLength);
//       result.set(new Uint8Array(accumulator), 0);
//       result.set(new Uint8Array(current), accumulator.byteLength);
//       return result.buffer;
//     });

    // const combinedBlob = new Blob([combinedArrayBuffer]);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blobInstructions);
    link.download = note["strMeal"] + '.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // console.log(combinedBlob);
//   })
//   .catch(error => {
//     console.error('An error occurred while converting the blobs:', error);
//   });

}
function ObjectToArray(obj)
{
    let arrIngredients=[]
    let arrMeasure=[]
    for(let element in obj)
    {
if(element.includes("Ingredient") && obj[element]!="")
{
    arrIngredients.push(obj[element])
}
if(element.includes("Measure") && obj[element]!="")
{
    arrMeasure.push(obj[element])
}
}
return [arrIngredients,arrMeasure]
}
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
        setIngredients(ObjectToArray(data.meals[0])[0]);
        setMeasure(ObjectToArray(data.meals[0])[1])
        
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
    <div className='container'>
        <div className="recipe-card">
        <div className="recipe-card-mainimage">
           <img alt="" className="recipe-card-image"src={recipe["strMealThumb"]}></img> 
        </div>
        <div className="recipe_card-text">
        <h1>{recipe.strMeal}</h1>
      <span>Ingredients</span>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}{measure[index]}</li>
        ))}
      </ul>
      <p>{recipe.strInstructions}</p>
      <Link to={recipe.strSource} target="_blank">Recipe Source</Link>
      <Link to={recipe.strYoutube} target="_blank">Recipe Video</Link>
     <div className="btns">
        <button className="btn btn-add">Add To Recipies</button>
        <button className="btn btn-download" onClick={()=>{
            downloadNote(recipe)
        }}>Download</button>
     </div>
        </div>
    </div>
  
    </div>
    
  );
}