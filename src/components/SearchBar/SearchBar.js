import { useState, useEffect } from 'react';
import './SearchBar.css';
// import Loader from '../Loader/Loader'
import { db } from '../../firebase/config';
import { query, collection, onSnapshot } from "firebase/firestore";
import {GrClose, GrSearch} from 'react-icons/gr'



export const SearchBar = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState(""); 
  const [filteredFoods, setFilteredFoods] = useState(foods); 

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setInput(searchWord);
    console.log("APA: " + foods.length)
    const updatedFoodsResult = foods.filter((value) => {
      return value.foodType?.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredFoods(foods);
    } else {
      setFilteredFoods(updatedFoodsResult);
    }
  };   

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'foods'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let foodsArr = [];
      querySnapshot.forEach((doc) => {
        foodsArr.push({ ...doc.data(), id: doc.id });
      });
      setFoods(foodsArr);
    });
    return () => unsubscribe();
  }, []);


const clearInput = () => {
  setFilteredFoods([]);
  setInput("");
};

return (
  <div className="search">
    <div className="search-inputs">
      <input 
        placeholder="Lägg till matvara" 
        className="search-input" 
        onChange={handleFilter} 
        type="text" value={input}/>
        {/* <div className="search-icons">
          {filteredFoods?.length === null ? (
                  <GrSearch />
                    ) : (
                  <GrClose id="clearBtn" onClick={clearInput} />
          )}
          </div> */}
    </div>

        
      <div className="search-result">
        {filteredFoods.length !== 0 && (
        <div className="data-result">
          {filteredFoods.slice(0, 15).map((food) => {
             
            return (
            <div key={food.id}>
                <p>{food.foodType} </p>
            </div>
            ); 
          }    
        )}
        </div>
        )}
        </div>
    </div>
  );
}





export default SearchBar;