import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContest";

export default function TaskDetail() {
    const { id } = useParams()
    const { tasks } = useContext(GlobalContext)
    console.log(tasks)
    
    const findData = tasks.find(t => t.id.toString() === id)
    console.log(findData)
    
    
    if (!findData) {
        return <p>Caricamento task...</p>
    }
    const formattedDate = new Date(findData.createdAt).toLocaleString("it-IT");
    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">
            <section className="mx-auto max-w-3xl rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 sm:p-8">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        {findData.title}
                    </h1>

                    <span className="w-fit rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
                        {findData.status}
                    </span>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                            Descrizione
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {findData.description}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Creata il
                            </p>
                            <p className="font-medium text-gray-900 dark:text-white">
                                {formattedDate}
                            </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Stato
                            </p>
                            <p className="font-medium text-gray-900 dark:text-white">
                                Doing
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
                        <button className="rounded-xl bg-gray-200 px-5 py-2 font-medium text-gray-800 hover:bg-gray-300">
                            Torna indietro
                        </button>

                        <button className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                            Modifica
                        </button>           </div>
                </div>
            </section>
        </main>

    )
}