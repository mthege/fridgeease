import { useState } from 'react';
import useFetch from '../../useFetch';
import Ingredient from '../Ingredient';
import './SearchBar.css';
import {GrClose, GrSearch} from 'react-icons/gr'
 
  function SearchBar() {
    const URL = 'http://localhost:8001/foods/'
    const {data: foods, loading, error} = useFetch(URL)

    const [input, setInput] = useState(""); 
    const [filteredFoods, setFilteredFoods] = useState(foods); 

    const handleFilter = (event) => {
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

   


  // const submitHandler = (e) => {
  //       e.preventDefault(); 
  //   }


  const clearInput = () => {
    setFilteredFoods([]);
    setInput("");
  };
      return ( 
         <div className="searchbar">
          { error && <div>{ error }</div> }
          { loading && <div>Loading...</div> }
          <div className= "search">
          {/* <form className="search" onSubmit={submitHandler}> */}
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
         {/* </form> */}
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