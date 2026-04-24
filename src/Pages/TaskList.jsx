import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContest"
import TaskRow from "../componets/TaskRow";

export default function TaskList() {
    const { tasks } = useContext(GlobalContext)
    console.log(tasks)



    return (
        <>
            <div className="container ">
                <h1>Lista dei Task</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">

                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Nome
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Stato
                                </th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Data di creazione
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {tasks.map(t => {
                                return (
                                    <TaskRow key={t.id}
                                        title={t.title}
                                        status={t.status}
                                        createdAt={t.createdAt} />
                                )


                            })}

                        </tbody>

                    </table>
                </div>
            </div>


        </>
    )
}