import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext();

export function GlobalProvider ({children}){
    const [tasks, setTask] = useState([]);
    
    useEffect(()=>{
        const url = import.meta.env.VITE_API_URL;
        fetch(`${url}/tasks`)
        .then(res => res.json())
        .then(data => setTask(data))
        .catch((err)=> console.error(err))


    },[])
    return(
        <GlobalContext.Provider value ={{ tasks , setTask}}>
            {children}
        </GlobalContext.Provider>
    )

}
