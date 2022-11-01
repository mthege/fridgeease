import { useState, useEffect } from 'react';
// import useFetch from '../../useFetch';
// import Ingredient from '../Ingredient';
import './SearchBar.css';
// import {GrClose, GrSearch} from 'react-icons/gr'
import useFetchCollection from "../../custom-hooks/useFetchCollection"
import { useDispatch, useSelector } from "react-redux";
import {selectProducts, FILTER_BY_SEARCH, STORE_PRODUCTS} from '../../redux/foodSlice';

export function SearchBar() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);


      return (
      <>
      {isLoading && <Loader />}
      <div className= "search">
        <input 
        placeholder="Lägg till matvara" 
        className="search-input" 
        onChange={handleFilter} 
        type="text" value={input}/>
        
        <div className="searchIcons">
          {filteredProducts?.length === null ? (
                  <GrSearch />
                    ) : (
                  <GrClose id="clearBtn" onClick={clearInput} />
          )}
          </div>
      </div>
      
      {filteredProducts?.length !== null && (
      <div className="search-results">
        {currentProducts?.slice(0, 15).map((type, index) =>{
        const { id, type } = product;
            
        return(
            <div key={item.id} className="search-result" >
              <tr key={id}>
                     <td>{index + 1}</td>
                     <td>
                     </td>
                     <td>{type}</td>           
            </div>
          )
        }
      </div>  
      )}
     <>
          )






{/* 
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState("")
//     const [input, setInput] = useState(""); 
//     const [filteredFoods, setFilteredFoods] = useState(""); 

//     const colRef = collection(db, 'books')

//     // queries
//     const q = query(colRef)
    
//     // realtime collection data
//     onSnapshot(q, (snapshot) => {
//       let foods = []
//       snapshot.docs.forEach(doc => {
        foods.push({ ...doc.data(), id: doc.id }) */}
      {/* })
      console.log(foods)
    })
    
    // fetching a single document (& realtime)
    const docRef = doc(db, 'foods')
    
    onSnapshot(docRef, (doc) => {
      console.log(doc.data(), doc.id)
    })
    
    // updating a document
    // const updateForm = document.querySelector('.update')
    // updateForm.addEventListener('submit', (e) => { */}
      {/* e.preventDefault() */}
      {/* let docRef = doc(db, 'books', updateForm.id.value) */}
      {/* updateDoc(docRef, { */}
    {/* //     title: 'updated title'
    //   })
    //   .then(() => { */}
    {/* //     updateForm.reset()
    //   })
    // })
    
    // // subscribing to auth changes
    // onAuthStateChanged(auth, (user) => { */}
    {/* //   console.log('user status changed:', user)
    // })
    
   


//       return (
//       <>
//       {isLoading && <Loader />}
//       <div className= "search">
//         <input 
//         placeholder="Lägg till matvara" 
//         className="search-input" 
//         onChange={handleFilter} 
//         type="text" value={input}/>
        
        // <div className="searchIcons">
        //   {filteredProducts?.length === null ? (
        //           <GrSearch />
        //             ) : (
        //           <GrClose id="clearBtn" onClick={clearInput} />
        //   )}
        //   </div>
//       </div>
      
//       {filteredProducts?.length !== null && (
//       <div className="search-results">
//         {filteredProducts?.slice(0, 15).map((product, index) =>{
//         const { id, type } = product;
            
//         return(
//             <div key={id} className="search-result" >
//               <div key={id}>
//                <div>{index + 1}</div>
//                <div>{product}</div> 
//               </div>          
//             </div>
//           );
//         }
//           )
//       }

//       </div>  
//       )}
//     </>
//   )



   


// return (
//   <section className="food-container">
//       <div className="food">
//           <h1 className="header">
//               Food-App
//           </h1>

//           <div>

//               <div>
//                   <input
//                       type="text"
//                       placeholder="What do you have to do today?"
//                       onChange={(e)=>setFood(e.target.value)}
//                   />
//               </div>

//               <div className="btn-container">
//                   <button
//                       type="submit"
//                       className="btn"
//                       onClick={addFood}
//                   >
//                       Submit
//                   </button>
//               </div>

//           </div>

//           <div className="todo-content">
//               {
//                   foods?.map((food,i)=>(
//                       <p key={i}>
//                           {food.food}
//                       </p>
//                   ))
//               }
//           </div>
//       </div>
//   </section>
// )


//   const [search, setSearch] = useState("");
//   const { data, isLoading } = useFetchCollection("products");
//   const [input, setInput] = useState(""); 
//   const [filteredFoods, setFilteredFoods] = useState(""); 
//   const filteredProducts = useSelector(selectFilteredProducts);

//   const products = useSelector(selectProducts);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       STORE_PRODUCTS({
//         products: data,
//       })
//     );
//   }, [dispatch, data]);

//   useEffect(() => {
//     dispatch(FILTER_BY_SEARCH({ products, search }));
//   }, [dispatch, products, search]);

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setInput(searchWord);
//     console.log("APA: " + data.length)
//     const updatedFoodsResult = data.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredFoods(data);
//     } else {
//       setFilteredFoods(updatedFoodsResult);
//     }
//   };   

//   const clearInput = () => {
//     setFilteredFoods([]);
//     setInput("");
//   };

//       return (
//       <>
//       {isLoading && <Loader />}
//       <div className= "search">
//         <input 
//         placeholder="Lägg till matvara" 
//         className="search-input" 
//         onChange={handleFilter} 
//         type="text" value={input}/>
        
//         <div className="searchIcons">
//           {filteredProducts?.length === null ? (
//                   <GrSearch />
//                     ) : (
//                   <GrClose id="clearBtn" onClick={clearInput} />
//           )}
//           </div>
//       </div>
      
//       {filteredProducts?.length !== null && (
//       <div className="search-results">
//         {filteredProducts?.slice(0, 15).map((product, index) =>{
//         const { id, type } = product;
            
//         return(
//             <div key={id} className="search-result" >
//               <div key={id}>
//                <div>{index + 1}</div>
//                <div>{product}</div> 
//               </div>          
//             </div>
//           );
//         }
//           )
//       }

//       </div>  
//       )}
//     </>
//   )
// }

    // const handleFilter = (event) => { */}
    //   event.preventDefault(); 
    //   const searchWord = event.target.value;
    //   setInput(searchWord);
      // const updatedFoodsResult = foods.filter((value) => {
      //   return value.name.toLowerCase().includes(searchWord.toLowerCase());
      // });
  
    //   if (searchWord === "") {
    //     setFilteredFoods(foods);
    //   } else {
    //     setFilteredFoods(updatedFoodsResult);
    //   }
    // };   

  //   useEffect(() => {
  //     const fetchData = async() => {
  //         try {
  //             const response = await Firebase.firestore()
  //                 .collection("foods")
  //                 .doc(slug)
  //                 .get();

  //             console.log('response', response);

  //             let data = { title: 'not found' };

  //             if (response.exists) {
  //                 data = response.data();
  //             }

  //             setCurrentPost(data);
  //             setLoading(false);

  //         } catch(err) {
  //             console.error(err);
  //         }

  //     };

  //     fetchData();

  // }, []);



//     useEffect(() => {
//       if(loading) {
//         axios.get(URL)
//         .then(res => {
//           if (res && res.status !== 200) { // error coming back from server
//             setError('does this happen??' + res.status);
//           } 
//           else {
//             console.log(res)
//             setIngList(res.data);
//           }
//         })
//         .catch(error => {
//           if(error.status !== 304) {
//             setError('could not fetch the data for that resource: ' + error);
//           }
//         })
//         .finally(() => {
//           setLoading(false);
//         })
//       }
//     }, [loading])



  // const clearInput = () => {
  //   setFilteredFoods([]);
  //   setInput("");
  // };
  
  //     return ( 
  //        <div className="searchbar">
  //         { error && <div>{ error }</div> }
  //         { loading && <div>Loading...</div> }
  //         <div className= "search">
  //           <input 
  //           placeholder="Lägg till matvara" 
  //           className="search-input" 
  //           onChange={handleFilter} 
  //           type="text" value={input}/>
            
  //           <div className="searchIcons">
  //             {filteredFoods?.length === null ? (
  //                 <GrSearch />
  //                   ) : (
  //                 <GrClose id="clearBtn" onClick={clearInput} />
  //               )}
  //             </div>
//   //         </div>
// {/* 
//           renders searchlist when starting to write */}
        //   {/* {filteredFoods?.length !== null && (
        //   <div className="search-results">
        //     {filteredFoods?.slice(0, 15).map((item) => { */}
        //     {/* // return(
        //     //   <div key={item.id} className="search-result" >
        //     //     {foods && <Ingredient id={item.id} name={item.name} />}
        //     //    </div>             
        //     //   );
        //     })} */}
        //   {/* </div> */}
        // {/* // )} */}
        
    //   </div>
    // );  
  }

export default SearchBar;