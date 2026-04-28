import { useState, useRef, useMemo } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContest"

export default function AddTask() {
    const { addTask } = useContext(GlobalContext)
    const [title, setTitle] = useState("");
    const descrptionref = useRef(null)
    const statusRef = useRef(null)


    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";
    const isTitleValid = useMemo(() => {
        return title.trim() !== "" && ![...title].some(t => symbols.includes(t))

        
    }, [title]);
    const handelSubmit = (e) => {
        e.preventDefault()
        const descrizione = descrptionref.current.value;
        const status = statusRef.current.value;
        const fromObj = {
            title: title,
            description: descrizione,
            status: status,
        }

        if (
            !isTitleValid ||
            !descrizione.trim() ||
            !status.trim()

        ) {
            alert("Errore nella copmpilazione dei form ricontrollare")
            return
        } else {
            alert("Task creata")
            addTask(fromObj)
            setTitle("")
            descrptionref.current.value = ""
            statusRef.current.value = ""
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-6">
                <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">

                    <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        ✨ Aggiungi Task
                    </h1>

                    <form className="space-y-6" onSubmit={handelSubmit}>

                        {/* Titolo */}
                        <div>
                            <label
                                htmlFor="Title"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Titolo
                            </label>
                            <input
                                type="text"
                                id="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Inserisci il titolo..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            />
                            <p style={{color:isTitleValid? 'green':'red'}}>{isTitleValid?'Il titolo è valido': 'Il titolo non è valido '}</p>
                        </div>

                        {/* Descrizione */}
                        <div>
                            <label
                                htmlFor="Descrizione"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Descrizione
                            </label>
                            <input
                                type="text"
                                id="Descrizione"
                                ref={descrptionref}
                                placeholder="Scrivi una descrizione..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            />
                        </div>

                        {/* Stato */}
                        <div>
                            <label
                                htmlFor="status"
                                className="block text-sm font-semibold text-gray-700 mb-2"
                            >
                                Stato
                            </label>
                            <select
                                name="status"
                                id="status"
                                ref={statusRef}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            >
                                <option value="">Seleziona Stato</option>
                                <option value="To do">📝 To do</option>
                                <option value="Doing">⚡ Doing</option>
                                <option value="Done">✅ Done</option>
                            </select>
                        </div>

                        {/* Bottone */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                            disabled={!isTitleValid}
                        >
                            ➕ Aggiungi Task
                        </button>

                    </form>
                </div>
            </div>

        </>
    )

}