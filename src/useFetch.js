 import { useState, useEffect } from "react";
 
 const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
            } 
            return res.json();
            })
            .then(data => {
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          setLoading(false);
          setError(err.message);
        })
      }, 1000);
    }, [url])

    return{ data, setData, loading, setLoading, error, setError }

 }

 export default useFetch; 