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
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className="modal-content">
          <p>{food.myFood}</p>

          </div>
   
        </div>
      </div>
    </div>
  );
};

export default EditFood;