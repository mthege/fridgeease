import { useState, useEffect } from 'react';
import useFetch from '../../useFetch';
import Ingredient from '../Ingredient';
import './SearchBar.css';
import {GrClose, GrSearch} from 'react-icons/gr'
import axios from 'axios'

  function SearchBar() {
    ///- search function
    /// - parent component to Ingredients


    const URL = 'http://localhost:8001/foods/'
    const {data: foods} = useFetch(URL)


    const [ingList, setIngList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [input, setInput] = useState(""); 
    const [filteredFoods, setFilteredFoods] = useState(foods); 

    const handleFilter = (event) => {
      event.preventDefault(); 
      const searchWord = event.target.value;
      setInput(searchWord);
      console.log("APA: " + foods.length)
      const updatedFoodsResult = foods.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredFoods(foods);
      } else {
        setFilteredFoods(updatedFoodsResult);
      }
    };   

    useEffect(() => {
      if(loading) {
        axios.get(URL)
        .then(res => {
          if (res && res.status !== 200) { // error coming back from server
            setError('does this happen??' + res.status);
          } 
          else {
            console.log(res)
            setIngList(res.data);
          }
        })
        .catch(error => {
          if(error.status !== 304) {
            setError('could not fetch the data for that resource: ' + error);
          }
        })
        .finally(() => {
          setLoading(false);
        })
      }
    }, [loading])



  const clearInput = () => {
    setFilteredFoods([]);
    setInput("");
  };
  
      return ( 
         <div className="searchbar">
          { error && <div>{ error }</div> }
          { loading && <div>Loading...</div> }
          <div className= "search">
            <input 
            placeholder="Lägg till matvara" 
            className="search-input" 
            onChange={handleFilter} 
            type="text" value={input}/>
            
            <div className="searchIcons">
              {filteredFoods?.length === null ? (
                  <GrSearch />
                    ) : (
                  <GrClose id="clearBtn" onClick={clearInput} />
                )}
              </div>
          </div>
{/* 
          renders searchlist when starting to write */}
          {filteredFoods?.length !== null && (
          <div className="search-results">
            {filteredFoods?.slice(0, 15).map((item) => {
            return(
              <div key={item.id} className="search-result" >
                {foods && <Ingredient id={item.id} name={item.name} />}
               </div>             
              );
            })}
          </div>
        )}
        
      </div>
    );  
  }

export default SearchBar;