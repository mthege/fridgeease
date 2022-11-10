import React from 'react';
import './EditFood.css'


const EditFood = ({ open, onClose, food }) => {

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
            <p className='closeBtn' onClick={onClose}>
            X
          </p>
        </div>

        <div className="modal-middle">
        <h4>Description</h4>
          <p>{food.desc}</p>
          <p>Klimatklass</p>
          <p>{food.klimatKlass}</p>
        </div>
      </div>
    </div>
  );
};

export default EditFood;