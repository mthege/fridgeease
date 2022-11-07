import { useState, useEffect } from 'react';
import './SearchBar.css';
// import Loader from '../Loader/Loader'
import {GrClose, GrSearch} from 'react-icons/gr'
import {useFetchCollection} from '../../custom-hooks/useFetchCollection';
import { useSelector, useDispatch } from "react-redux";
import { SAVED_FOOD, selectFoods } from '../../redux/Reducer';
import { useToCollection } from '../../custom-hooks/useSaveToCollection';
import { db } from '../../firebase/config';
import { addDoc, collection, collectionRef, serverTimestamp,  } from '@firebase/firestore';
import MyFridge from '../myFridge/MyFridge';


export const SearchBar = () => {
  // const [foods, setFoods] = useState([]);
  const [input, setInput] = useState(""); 

  const {savedData} = useToCollection("myFridge")

  const {foodData, isLoading } = useFetchCollection("food")
  // const {savedData, isLoading} = useToCollection("myFridge")
  const [filteredFoods, setFilteredFoods] = useState(foodData); 

  const dispatch = useDispatch();
  const foodList = useSelector(selectFoods);


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

  // useEffect(() => {
  //   dispatch(
  //     SAVED_FOOD({
  //       foodList: foodData,
  //     })
  //   );
  // }, [dispatch, foodData]);

  

    // const handleSave= async (e)=>{
    // e.preventDefault();
    // // getSavedCollection()
    // await addDoc(collectionRef(db,'myFridge'),{
    //   myFood: foodData.foodType,
    // timestamp: serverTimestamp()
    // })
    // setInput('')
    // };

    async function handleSave(oneFood) {
    try {
      const docRef = await addDoc(collection(db, "myFridge"), {
        myFood: oneFood.foodType,
        timestamp: serverTimestamp()
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }}

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
                  <GrSearch />
                    ) : (
                  <GrClose id="clearBtn" onClick={clearInput} />
          )}
          </div> 
    </div>
        
        {filteredFoods?.length !== 0 && (
        <div className="data-result">
          {filteredFoods?.slice(0, 15).map((oneFood) => {
             
            return (
            <button className="search-button" onClick={() => handleSave(oneFood)}>
              <div className="search-item" key={oneFood.id}>
                <p>{oneFood.foodType} </p>

             
              
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