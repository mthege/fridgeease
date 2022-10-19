import useFetch from '../../useFetch';
import axios from 'axios';
import {GrClose} from 'react-icons/gr'
import './MyFoods.css'

function MyFoods() {
  
  const URL = 'http://localhost:8001/myFoods/'
  const {loading, error, data} = useFetch(URL)




  function onDelete(id) {
    axios.delete(`${URL}/${id}`, {id: id})
        .then(res => {
            console.log(res)
            console.log('it works')
        })
        .catch(function (error) {
            console.log(error);
        });
}


    // const deleteData = async (id) => {
    //   try {
    //     const res = await axios.delete(`${URL}/${id}`)
    //     setUsers(
    //       users.filter((user) => {
    //         return user.id !== id;
    //       })
    //     );
    //     console.log('Item successfully deleted.')
    //   } 
    //   catch (error) {
    //     alert(error)  
    //   }
    // }
    

    // const deleteData = async (id) => {
    //   fetch(`http://localHost:8001/myFoods/${id}`, {
    //     method: 'DELETE',
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log(res))

    // }


  // function deleteData(name){
  //   fetch(`http://localHost:8001/myFoods/${item.name}`, {
  //     method: 'DELETE',
  //     headers: {
  //         'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(data)
  //     })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     // .then(json => displayData(json))
  //   }



    
    return (
    <div className= "myfoods">
      {error && 'Error!'}
      {loading && 'Loading...'}
      {data?.map((res) => (
        <div className="myfood" key={res.id}>{res.name}
        <button onClick={() => onDelete(res.id)}><GrClose/></button>
        </div>
      ))}
    </div>

    )
}

export default MyFoods
