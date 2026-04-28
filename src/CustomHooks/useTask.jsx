import { useEffect, useState } from "react";

export default function useTask() {
    const [tasks, setTask] = useState([]);
    const url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${url}/tasks`)
            .then((res) => res.json())
            .then((data) => setTask(data))

            .catch((error) => console.error(error))
    }, []);

    function addTask(obj) {

        fetch(`${url}/tasks`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.success){
                    setTask((prev) => [...prev, data.task])
                }else{
                    throw new Error(data.message)
                }
    })

            .catch((error) => console.error(error))


    }
    function removeTask() {

    }
    function updateTask() {

    }
    return { tasks, addTask, removeTask, updateTask }
}