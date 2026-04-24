import { createContext } from "react";
import useTask from '../CustomHooks/useTask'


export const GlobalContext = createContext();

export function GlobalProvider ({children}){
    
    const {tasks, addTask, removeTask, updateTask} = useTask();
    
    return(
        <GlobalContext.Provider value ={{ tasks ,addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    )

}
