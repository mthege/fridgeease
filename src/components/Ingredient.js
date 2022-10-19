// import useFetch from "../useFetch"
import {useState} from 'react'



  const Ingredient =  ({foods, id, name}) => {

  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    const saveFoods = {
      method: "POST",
      headers: { 'Accept': 'application/json', "Content-Type": "application/json" },
      body: JSON.stringify({id: id, name: name})
    };
    fetch("http://localhost:8001/myFoods", saveFoods)
      .then(response => response.json())
      .then(res => console.log(res))
      .then(setMessage(""))
      .catch(e=> 'error');
      


};

  return(
    <div className="ingredient">
         <ul>
           <button type="submit" onClick={handleSubmit}>
            <div key={id}>{name}</div></button>
        </ul>

        {message && <div>{message}</div>}
    </div>
  )
}

export default Ingredient



