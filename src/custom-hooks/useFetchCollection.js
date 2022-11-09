import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

export const useFetchCollection = (collectionName) => {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, 'foods'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
       const allData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        foodType: doc.foodType,
        img: doc.img,
       ...doc.data(),
       }));
        console.log(allData);
        setFoodData(allData);
        setIsLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return { foodData, isLoading };
};

export default useFetchCollection;