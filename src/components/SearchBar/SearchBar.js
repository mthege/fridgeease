import {useState, useEffect} from 'react';
import {FaSearch} from 'react-icons/fa'; 
// import {useNavigate} from 'react-router-dom';
// import {BsPlusLg} from 'react-icons/bs'
// import {GrClose} from 'react-icons/gr'
// import {FaCarrot} from 'react-icons/fa'
import Ingredient from '../Ingredient';

import './SearchBar.css';

 
  function SearchBar() {
    const [input, setInput] = useState(""); 
    const [ingredients, setIngredients] = useState([]); 

    useEffect(() => {
      const fetchData = async () => {
        // console.log(`https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}&addChildren=false`)
        const data  = await fetch(
         `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}&number=5 `);  
        const r = await data.json() 
        setIngredients(r.results);
        console.log("Got some ingredients " + JSON.stringify(r));
      }
      try {
        fetchData()
      } catch(err) {
        console.error(err);
      }
      
    }, [input])
    
    const submitHandler = (e) => {
        e.preventDefault();
       
    }

    
      return (
        <div className="searchbar">
          <form className="search" onSubmit={submitHandler}>
          <input prefix={<FaSearch/>} 
          placeholder="Lägg till matvara" 
          className="search-input" 
          onChange={(e) => setInput(e.target.value)} 
          type="text" value={input}/>
          </form>
          {/* <p>{ingredients?.length}</p><br/> */}
          
         

<div className="search-boxes">
          {ingredients?.map((item) => {
            return(
              <div key={item.id} className="search-squares" >
                <Ingredient/> 
               {/* <div className="search-square">{item.name}</div>   */}
              </div>             
          )
          
    })}
    </div>
    </div>) 

}









    // const [query, setQuery] = useState("");
    // const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const res = await fetch ( `https://api.spoonacular.com/food/search?${query}&offset=606&number=10&apiKey=c1d3aa66fef0466ba9eaff52d0df4b67`);
    //     setData(res.data);
    //   };
    //   if (query.length === 0 || query.length > 2) fetchData();
    // }, [query]);
  
    // return (
    //   <div className="app">
    //       <input
    //         className="search"
    //         placeholder="Search..."
    //         onChange={(e) => setQuery(e.target.value.toLowerCase())}
    //       />
    //     {<Ingredients data={data} />}
    //   </div>
    // );


export default SearchBar;