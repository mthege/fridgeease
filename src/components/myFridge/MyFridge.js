import React, {useState, useEffect} from 'react'
import { GrClose } from 'react-icons/gr';
import { BiPencil } from 'react-icons/bi';
import { useToCollection } from '../../custom-hooks/useSaveToCollection';
import './MyFridge.css'
import {  deleteDoc, collection, doc, where, getDocs, query} from "firebase/firestore";
import { db } from '../../firebase/config';
import EditFood from '../editFood/EditFood';
import '../editFood/EditFood.css'

function MyFridge() {
    const [openModal, setOpenModal] = useState(false);
    
    const {savedData} = useToCollection("myFridge")
    const [selectedFood, setSelectedFood] = useState(savedData[0])
    const [myFridge, setMyFridge] = useState(savedData)

    useEffect(() => {
        setMyFridge(savedData);
    }, [savedData]);


//  const handleDelete = async (id) => {
//     const docRef = doc(db, "myFridge", id);
//     await deleteDoc(docRef)
// };

 const handleQueryDelete = async (id) => {

    const snapshot = await deleteDoc(doc(db, "myFridge", id));
    
}







    //   const handleDelete = async (myFood) => {
    //     try {
    //       await deleteDoc(doc(db, "myFridge", myFood),
    //       {
    //         myFood: myFood.foodType,
    //         timestamp: serverTimestamp()
            
    //       });
    
    //       const storageRef = ref(storage, myFood);
    //       await deleteObject(storageRef);
    //     //   toast.success("Product deleted successfully.");
    //     } catch (e) {
    //         console.error("Error adding document: ", e)
    //     //   toast.error(error.message);
    //     }
    //   };

    //     useEffect((myFridge) => {
    //       handleDelete();
    //     }, [myFridge]);    
      

    //   const handleDelete = async (food) => {
    //     const taskDocRef = doc(db, 'myFridge', food.myFood)
    //     try{
    //       await deleteDoc(taskDocRef)
    //     } catch (err) {
    //       alert(err)
    //     }
    // }
    //    const openEditFood = () => {
    //     setOpenModal(true) 
    //    }
    //    const closeEditFood = () => {
    //     setOpenModal(false) 
    //    }

    return (
        <div className="my-fridge">
            
            {myFridge.map((food) => {

                return(
                    <div className="item" key={food.id}>
                        <p>{food.myFood}</p>
                        <div className="btn-btns">
                            <button onClick={() => {setSelectedFood(food)
                                setOpenModal(true)}} className='modalButton' ><BiPencil size={20}/></button> 
                            <button className="deleteBtn" onClick={() => handleQueryDelete(food.id)}> <GrClose size={20}/> </button>
                        </div>

                        

                        <EditFood className="modal" open={openModal} food={selectedFood} onClose={() => setOpenModal(false)}/>
                                {/* <p>{food.myFood}</p>
                                <p>Hej</p>
                        </EditFood> */}
                    </div>
                    
    )
    
})}
            

    </div>
)
}

export default MyFridge
