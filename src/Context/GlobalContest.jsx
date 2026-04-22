import { createContext, useEffect, useState } from "react";
import 'dotenv' 

const TaskContext = createContext();

export function TaskProvider ({children}){
    const [task, setTask] = useState({});
    
    useEffect(()=>{
        const url = import.meta.env.API_URL;
        fetch({url})

    },[])

}