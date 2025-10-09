// import axios from "axios";
// import { useEffect, useState } from "react"

// const useAppsData =  () =>{
//     const [apps , setApps ] = useState([]);
//     const [loading , setLoading] = useState (true);
//     const [error , setError ] = useState(null);


//     useEffect( ()=> {
//         setLoading(true)
//         axios('../AppsData.json').then(res => 
//         setApps(res.data))
//         .catch(error=> setError(error))
//         .finally(() => setLoading(false))
//     }, [])
    
//     return{apps , loading , error}

// }

// export default useAppsData;
// src/Hooks/useApps.js
import axios from "axios";
import { useEffect, useState } from "react";

const useAppsData = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('../AppsData.json')
      .then(res => setApps(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
};

export default useAppsData;
