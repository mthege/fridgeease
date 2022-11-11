import React from 'react';
import { GrClose } from 'react-icons/gr';
import './EditFood.css'


const EditFood = ({ open, onClose, food }) => {

    const calcExpiry = (food) =>{
    console.log("TS " + food.timestamp)
    const expiryDays= Math.round((food.timestamp - Date.now())/(1000*60*60*24))
    return expiryDays
}



  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>       
        <div className='modal-top'>
          
          <div className="modal-content">
          <img className="food-img" src={food.img} alt={food.myFood}/>
          <p>{food.myFood}</p>
          </div>
          <div className="expiry-div-modal">

          <p>{calcExpiry(food)+ " dagar"}</p>
          </div>
          <GrClose id="closeBtn" style={{padding: '10px'}}size= {25} onClick={onClose}/>
           
        </div>

        <div className="modal-middle">
        <h4>Description</h4>
          <p>{food.desc}</p>
          <p>Klimatklass</p>          
          <div className="klimat-div">
          <p>{food.klimatKlass}</p>
          <img src={food.klimatKlassImg} alt="klimat"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFood;