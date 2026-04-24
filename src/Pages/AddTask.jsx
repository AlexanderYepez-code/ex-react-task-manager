import { useState, useRef } from "react";

export default function AddTask() {
    const [title, setTitle] = useState();
    const descrptionref = useRef(null)
    const statusRef = useRef(null)
    
    return (
        <>
            <div className="">
                <h1 className="text-2xl py-4 "> Aggiungi Task</h1>
                <form >
                    <div>
                        <label htmlFor="Title">Titolo</label>
                        <input type="text" value={title} id="Title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="Descrizione"> Descrizione</label>
                        <input type="text" ref={descrptionref}/>

                    </div>
                    <div>
                        <label htmlFor="status">Stato</label>
                        <select name="status" id=""></select>
                    </div>


                </form>
            </div>

        </>
    )

}