import React, {useState, useEffect} from 'react'; 
import {FaCarrot} from 'react-icons/fa'

function Ingredient(props) {
  // const [showPosts, setShowPosts] = useState()
  const apiUrl = `https://api.spoonacular.com/food/ingredients/${props.item}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

  let displayData

  // function pullJson(){
  //   fetch(apiUrl)
  //   .then(respone => respone.json())
  //   .then( responseData =>{
  //     displayData = responseData.map(function(element) {
  //       return(
          
  //         <p key={element.id}>{element.name}</p>
  //       )
  //     })
  //     setShowPosts(displayData)
  //   })

  // }

  //   async function pullJson() {
  //     const response = await fetch (apiUrl)
  //     const responseData = await response.json()
  //     displayData = responseData.map (function(element) {

  //       return(
  //         <div key={element.id} className="search-square">{element.name}</div>
  //       )
  //       }) 
  //       setShowPosts(displayData)
  //   }
  // useEffect(() =>{
  //   pullJson()
  // }, [])



  const [ingredient, setIngredient] = useState(null); 

  
    async function fetchData() {
      const response  = await fetch(apiUrl) 
      const responseData = await response.json() 
      displayData = responseData.map(function(element) {

        return(
          <div>
            return(
              {ingredient.map((element)=> {
              <div key={element.id} className="search-squares">
              <FaCarrot size={30}/>
              <div className="search-square">{element.name}</div>        
            </div>

              })}
          
          )
          </div>
        )
      })
      setIngredient(displayData)
    }

    useEffect(() => {
      fetchData()
  }, [])

}
  export default Ingredient