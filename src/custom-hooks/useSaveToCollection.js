import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

export const useToCollection = (collectionName) => {
  const [savedData, setSavedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSavedCollection = () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, 'myFridge'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
       const allData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        myFood: doc.myFood,
        img: doc.img,
        desc: doc.desc,
       ...doc.data(),
       }));
        console.log(allData);
        setSavedData(allData);
        setIsLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getSavedCollection();
  }, []);

  

  return { savedData, isLoading };
};

export default useToCollection;
