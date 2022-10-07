import React, {useEffect, useState} from 'react'; 
import {useParams, Link} from 'react-router-dom'; 

function Ingredients() {
  const [searchedRecipes, setSearchedRecipes] = useState([]); 
  let params = useParams; 

  const getSearched = async (name) => {
    const data  = await fetch(
            `https://api.spoonacular.com/food/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${name} `);  
      const recipes = await data.json(); 
      setSearchedRecipes(recipes.results);

        };

        useEffect(() => {
            getSearched(params.search)
        }, [params.search]);

    return (  
        <div className="search-result">
            {searchedRecipes?.map((item) =>{
                return(
                    <div className="search-list" key={item.id}>
                        <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                        </Link>
                    </div>)
            })}
        </div>        
    )
}
export default Ingredients
