import React, { useState } from "react";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import './Recipe.css'

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, totalTime } = recipe.recipe;

  return (
    <div className="recipe">
      <img src={image} alt={label} />
            <h5>{label} </h5>
            <a href={url} target="_blank" rel="noopener noreferrer">
        URL
            </a>

      <div className="totalTime">{totalTime} min</div>
      <div className="yield"> 2 potioner</div>

      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    <div className="excisting-foods">
<h4>Du har:</h4>
<div className="excisting-foods-p">
<p>Mjölk</p>
<p>Morot</p>
</div>

    </div>
    
    </div>
  );
};

export default Recipe;