import { memo } from "react"

 function TaskRow({ title, status, createdAt }) {
    const statusColor = {
        "To do": "bg-red-500",
        "Doing": "bg-yellow-500",
        "Done": "bg-green-500"
    }
    const formattedDate = new Date(createdAt).toLocaleDateString("it-IT");
    return (
        <>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-500">
                    {title}
                </td>
                <td className={`px-4 py-3 text-sm text-gray-800 dark:text-gray-500 ${statusColor[status]}`}
      >
                    {status}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-500">
                    {formattedDate}
                </td>
            </tr>
        </>
    )
}
export default memo(TaskRow);