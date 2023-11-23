import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import Card from "./Card"
import Navbar from "./Navbar";
import "./styles.css"
let cards=undefined
function Main()
{
    const [recipies,setRecipies]=useState([])
    const [recipie,setRecipie]=useState("chicken")
   
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
      return(<div className="page-loader">
      <div className="spinner"></div>
      {
        setTimeout(function()
        {
          setRecipie("chicken")
        },1000)
      }
    </div>)
    }

    return result
  }

  useEffect(()=>{
    getRecipes().then(data => {
      setRecipies(data.meals);
    },[])
  }) 
   if(recipies===null|| recipies.length<1  || recipies===undefined)
  {
    
    setTimeout(function()
    {
      setRecipie("chicken")
    },1000)
 return (
        
      <div className="page-loader">
        <div className="spinner"></div>
      </div>
    )
      
  }
  else
  {
    cards=recipies.map((recipe)=>{
    return <Link to={`recipie/${recipe['idMeal']}`}><Card image={recipe["strMealThumb"]} recipeName={recipe["strMeal"]} recipeInst={recipe["strInstructions"]} key={recipe["idMeal"]}/></Link>
      });
   
  }
  return(
    <div className="container">
  <div className="main">
      <div className="main__nav-bar">
    <Navbar recipie={recipie} setRecipie={setRecipie} />
      </div>
      <div className="main_page-image">
      <img src={recipies[0]["strMealThumb"]} className="page-image"></img>
      <div className="image-recipie">
        <p>Simply Delicious Food</p>
      </div>
      </div>
      <div className="cards">
      {cards}
  
    </div>
    </div>
    
    </div>
  
  )

}
export {Main, cards}

