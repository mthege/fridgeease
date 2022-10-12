import React from 'react'; 
import {useParams} from 'react-router-dom'; 

function Ingredient() {
    let params = useParams; 


    {params.ingredients?.forEach ((item) => {
      return (  
        <div key={params.item.id}>
            <li>{params.item.name}</li>
        </div>            
      )    
    })}  
}
       






    //       <div className="search-result">
    //           {
    //               <p>{params.item.name}</p>
    //           }
    //       </div>        
    //   )
  
  export default Ingredient