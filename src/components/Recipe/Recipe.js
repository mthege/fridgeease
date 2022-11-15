import React, { useState } from "react";
import { useToCollection } from '../../custom-hooks/useSaveToCollection';
import Loader from "../Loader/Loader";
import {CiTimer} from 'react-icons/ci';
import {MdPeopleOutline} from "react-icons/md"; 
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import './Recipe.css'

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, totalTime } = recipe.recipe;


  const {savedData, isLoading} = useToCollection("myFridge")
  const [sameFood, setSameFood] = useState(savedData[0])
  
  return (
<>
    {isLoading && <Loader />}

    <div className="recipe">
      <img src={image} alt={label} />
            <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
            </a>

        <div className="totalTime"><CiTimer/> {totalTime} min</div>
        <div className="yield"> <MdPeopleOutline/> 2 potioner</div>

        <button type="submit" className="recipe-btn" onClick={() => setShow(!show)}>Recept</button>
        {show && <RecipeDetails ingredients={ingredients} />}
        <div className="excisting-foods">
            <h4>Du har:</h4>
            <div className="excisting-foods-p">
            <p>Mjölk</p>
            <p>Morot</p>
            </div>

            </div>
    
    </div>
    </>
  );
};

export default Recipe;