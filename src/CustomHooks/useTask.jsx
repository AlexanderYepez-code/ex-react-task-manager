import { useEffect, useState } from "react";

export default function useTask() {
    const [tasks, setTask] = useState([]);
    const url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        async function fetchTasks() {
            try {
                const res = await fetch(`${url}/tasks`);
                const data = await res.json();

                setTask(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchTasks();
    }, [url]);

    async function addTask(obj) {
        try {
            const res = await fetch(`${url}/tasks`, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            });

            const data = await res.json();

            if (data.success) {
                setTask((prev) => [...prev, data.task]);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function removeTask(id) {
        try {
            const res = await fetch(`${url}/tasks/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (res.ok || data.success) {
                setTask((prev) => prev.filter((t) => t.id !== id));
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function updateTask(id, taskModified) {
        try {
            const res = await fetch(`${url}/tasks/${id}`, {
                method: "PUT",
                body: JSON.stringify(taskModified),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            });
            const data = await res.json();

            if (res.ok || data.success) {
                setTask((prev) =>
                    prev.map((t) => (t.id === id ? { ...t, ...taskModified } : t))
                );
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error(error);

        }

        
    }
return { tasks, addTask, removeTask, updateTask };
}