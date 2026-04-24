import { useEffect, useState } from "react";

export default function useTask (){
    const [tasks, setTask] = useState([]);
    const url = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        fetch(`${url}/tasks`)
        .then((res)=> res.json())
        .then((data)=> setTask(data))

        .catch((error)=> console.error(error))
    },[]);

    function addTask (){

    }
    function removeTask (){

    }
    function updateTask(){

    }
    return {tasks, addTask, removeTask, updateTask}
}