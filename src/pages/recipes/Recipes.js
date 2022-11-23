import React, {useState} from 'react'
import axios from "axios";
import Recipe from '../../components/Recipe/Recipe';
import { v4 as uuidv4 } from "uuid";
import './Recipes.css'
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import NavbarWider from '../../NavbarWider/NavbarWider';

const Recipes = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
  
    const APP_ID = "c5d479fa";
    const APP_KEY = "0056e07ddd060dbf8100be24352ad4d5";
  
    const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`;

   

    const getData = async () => {
        if (query !== "") {
          const result = await axios.get(url);
          if (!result?.data.more) {
            return setAlert("No food with such name");
          }
          console.log(result);
          setRecipes(result.data.hits);
          setQuery("");
          setAlert("");
        } else {
          setAlert("Please fill the form");
        }
      };
      
      const onChange = e => setQuery(e.target.value);

      const onSubmit = e => {
        e.preventDefault();
        getData()
    };   
    return (
      <>
      <Topbar/>
      <NavbarWider/>
        <div className="App">
          <div className="recipe-search">
            <form onSubmit={onSubmit} className="search-form">
              <input
                className="search-input-recipe"
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search Food"
              />  
              <input className="search-btn" type="submit" value="Search" />   
              <input className="search-btn" type="submit" value="Clear"/>
            </form>                
         </div>
         
        <div className="recipes-intro-container">
          <div className="recipes-intro">
              {recipes.length === 0 && (
                    <p>Sök recept och matcha med de råvaror du har i kylskåpet
                    </p>
                )}

            </div>
          </div>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
      <Navbar/>
      </>
    );
    
}

export default Recipes
