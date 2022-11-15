import React, {useState} from 'react'
import axios from "axios";
import Recipe from '../../components/Recipe/Recipe';
import { v4 as uuidv4 } from "uuid";
import Alert from '../../components/Alert/Alert';
import './Recipes.css'
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
    
        <div className="App">
        <h1>Food Searching App</h1>
        <form onSubmit={onSubmit} className="search-form">
          {alert !== "" && <Alert alert={alert} />}
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <input type="submit" value="Search" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
    );
    
}

export default Recipes
