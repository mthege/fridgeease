import React, {useState} from 'react';
import './EditFood.css'

// import nft from './nft.jpg';

const EditFood = ({ open, onClose, food }) => {


  // const [updateFood, setUpdateFood] = useState({
    // myFood: food.myFood,
    // expirationDate: new Date(product.expirationDate),
    // category: product.category,
    // amount: product.amount,
  // });

  if (!open) return null;
  return (


    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          
          e.stopPropagation();
        }}
        className='modalContainer'
      >
         
        
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <p>{food.myFood}</p>
          {/* <div className='content'>
            <p>Hej</p>
            
             {savedData?.map((item) =>(
              <p>{item.myFood}</p>
          ))} */}
            
            {/* <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p> */}
          {/* </div> */}
          {/* <div className='btnContainer'>
            <button className='btnPrimary'>
            knapp
            </button>
        
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EditFood;