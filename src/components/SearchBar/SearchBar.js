//State etc
import { useState, useEffect } from 'react';
import {useFetchCollection} from '../../custom-hooks/useFetchCollection';
import { useToCollection } from '../../custom-hooks/useSaveToCollection';
//Firebase
import { db } from '../../firebase/config';
import { addDoc, collection } from '@firebase/firestore';
//Icons
import {GrClose, GrSearch} from 'react-icons/gr'
//Style
import './SearchBar.css';
//Components
import MyFridge from '../myFridge/MyFridge';
// import Loader from '../Loader/Loader'
//Redux
// import { useSelector, useDispatch } from "react-redux";
// import { SAVED_FOOD, selectFoods } from '../../redux/Reducer';


export const SearchBar = () => {
  const [input, setInput] = useState(""); 

  //Custom hooks
  const {savedData} = useToCollection("myFridge")
  const {foodData } = useFetchCollection("food")

  const [filteredFoods, setFilteredFoods] = useState(foodData); 

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setInput(searchWord);
    const updatedFoodsResult = foodData?.filter((value) => {
      return value.foodType?.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredFoods(foodData);
    } else {
      setFilteredFoods(updatedFoodsResult);
    }

  };   

  const clearInput = () => {
    setFilteredFoods([]);
    setInput("");
  };

  async function handleSave(oneFood) {
    try {
      const docRef = await addDoc(collection(db, "myFridge"), {
        myFood: oneFood.foodType,
        img: oneFood.img,
       // timestamp: serverTimestamp(),
        timestamp: Date.now() + (1000*60*60*24*oneFood.expirationDays),
        desc: oneFood.desc, 
        klimatKlass: oneFood.klimatKlass, 
        klimatKlassImg: oneFood.klimatKlassImg,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      // console.error("Error adding document: ", e);
    }
  

  }

  useEffect(() => {
    handleSave();
  }, []);

 
  return (
    <div className="search">
      <div className="searchbar">
       <input 
          placeholder="Lägg till matvara" 
          className="search-input" 
          onChange={handleFilter} 
          type="text" value={input}/>
          <div className="search-icons">
            {filteredFoods?.length === null ? (
                    <GrSearch id="searchBtn" />
                      ) : (
                    <GrClose id="clearBtn" style={{paddingRight: '15px'}} onClick={clearInput} />
           )}
            </div> 
     </div>
        
        {filteredFoods?.length !== 0 && (
          <div className="data-result">
            {filteredFoods?.slice(0, 15).map((oneFood) => {

                         
              return (
                <button className="search-button" onClick={() => handleSave(oneFood)}>
                 <div className="search-item" key={"searchResult_" + oneFood.id}>
                 <p>{oneFood.foodType}</p>
                 <img className="food-img" src={oneFood.img} alt={oneFood.myFood}/>

                 </div>
                </button>
              ); 
            }    
        )}
          </div>
        )}
        
        {savedData && <MyFridge id={savedData.id} name={savedData.name} />}

    </div>
  );
}





export default SearchBar;