import { useState,useEffect } from "react";
import ImageSlider from "./ImageSlider";
import Card from "./Card"
import Navbar from "./Navbar";
import "./styles.css"
let cards=undefined
function Main()
{
    const [recipies,setRecipies]=useState([])
    const [recipie,setRecipie]=useState("")
   
  async function getRecipes()
  {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipie}`;
    const options = {
      method: 'GET'
    };
let result=undefined;
    try {
      const response = await fetch(url, options);
      result = await response.json();
    } catch (error) {
      console.log(error);
    }
    return result
  }

  useEffect(()=>{
    getRecipes().then(data => {
      setRecipies(data.meals);
    },[])
  }) 
   if(recipies.length>0)
  {

cards=recipies.map((recipe)=>{
    return <Card image={recipe["strMealThumb"]} recipeName={recipe["strMeal"]} recipeInst={recipe["strInstructions"]} key={recipe["idMeal"]}/>
      });
      
  }
  else
  {
    return (
      <div className="page-loader">
        <div className="spinner"></div>
      </div>
    )
  }
  return(
    <div className="main">
      <div className="main__nav-bar">
    <Navbar recipie={recipie} setRecipie={setRecipie} />

      </div>
      <div className="main__image-slider">
 <ImageSlider deviceType={"desktop"}/>
  
    </div>
    </div>
    
  )

}
export {Main, cards}

