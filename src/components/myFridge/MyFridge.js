//State etc
import React, {useState, useEffect} from 'react'
import { useToCollection } from '../../custom-hooks/useSaveToCollection';
//Firebase
import {  deleteDoc, doc} from "firebase/firestore";
import { db } from '../../firebase/config';
//Icons
import { GrClose } from 'react-icons/gr';
import { BiPencil } from 'react-icons/bi';
//Components
import EditFood from '../editFood/EditFood';
//Style
import '../editFood/EditFood.css'
import './MyFridge.css'


function MyFridge() {
    //Modal state
    const [openModal, setOpenModal] = useState(false);
    //Data
    const {savedData} = useToCollection("myFridge")
    const [selectedFood, setSelectedFood] = useState(savedData[0])
    const [myFridge, setMyFridge] = useState(savedData)

    useEffect(() => {
        setMyFridge(savedData);
    }, [savedData]);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "myFridge", id));
    }

        const calcExpiry = (food) =>{
        console.log("TS " + food.timestamp)
        const expiryDays= Math.round((food.timestamp - Date.now())/(1000*60*60*24))
        return expiryDays
    }
        // const expiryDaysColor= Math.round((food.timestamp - Date.now())/(1000*60*60*24))

    // const countDownColor = (food) => {
    //     const colorDay = Math.round((food.timestamp - Date.now())/(1000*60*60*24));

    //     if(colorDay => 3){

    //     }
    // }
 
    

    return (
        <div className="my-fridge">
            <div className="my-fridge-intro">
              {myFridge.length === 0 && (
                    <p>Ditt kylskåp är tomt, lägg till matvaror för 
                        att se vilka matvaror som behöver ätas upp snart och 
                        få inspiration till matlagning!
                    </p>
                )}

            </div>




            {myFridge?.sort((a, b) =>  a.timestamp - b.timestamp).map((food) => {           

                return(
                    <div className="item" key={"item_" + food.id}>
                        <div className="item-left">
                        <img className="food-img" src={food.img} alt={food.myFood}/>
                        <p>{food.myFood}</p>
                        
                        </div>

                            <span className={`expiration ${calcExpiry(food) < 7 ? 'warning' : 'light-warning' }`}>{calcExpiry(food)+ " dagar"}</span>
                        {/* <p>{calcExpiry(food)+ " dagar"}  </p> */}
                        <div className="btn-btns">
                            <button onClick={() => {setSelectedFood(food)
                                setOpenModal(true)}} className='modalButton' ><BiPencil size={20}/></button> 
                            <button className="deleteBtn" onClick={() => handleDelete(food.id)}> <GrClose size={20}/> </button>
                        </div>

                        <EditFood className="modal" open={openModal} food={selectedFood} onClose={() => setOpenModal(false)}/>
                              
                    </div>
                    
    )
    
})}
            

    </div>
)
}

export default MyFridge
