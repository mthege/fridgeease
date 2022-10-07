import {useState} from 'react';
import {FaSearch} from 'react-icons/fa'; 
// import {useNavigate} from 'react-router-dom';
// import {BsPlusLg} from 'react-icons/bs'
// import {GrClose} from 'react-icons/gr'
import './SearchBar.css';

  function SearchBar() {
    const [input, setInput] = useState(""); 
    // const navigate = useNavigate(); 
    const submitHandler = (e) => {
        e.preventDefault(); 
        // navigate('/searched/' + input)
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
    </div>
)

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