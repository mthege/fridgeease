import React, {useState, useEffect} from 'react'
import { useToCollection } from '../../custom-hooks/useSaveToCollection';

function MyFridge() {

    const {savedData, isLoading} = useToCollection("myFridge")
    const [myFridge, setMyFridge] = useState(savedData)

        useEffect(() => {
        setMyFridge(savedData);
      }, [savedData]);
    return (
        <div className="my-fridge">
            {myFridge.map((food) => {
                return(
        <div className="item" key={food.id}>
            <p>{food.myFood}</p>
        </div>
    )
})}

            
        </div>
    )

 
}

export default MyFridge
