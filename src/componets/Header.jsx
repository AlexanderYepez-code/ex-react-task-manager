
import { Link } from "react-router-dom"
export default function Header() {

    const menu = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'TaskList',
            link: '/tasklist'
        },
        {
            name: 'AddTask',
            link: '/addTask'
        }

    ]
    return (
        <>
            <div className="container mx-auto ">
                <header className=' flex gap-5 bg-gray-900 text-white text-lg items-center'>
                    <h1 className="px-1">Task Manager</h1>
                    <div>
                        {menu.map(m => {
                            return (
                                <Link className="mx-4 hover:text-blue-500" to={m.link} key={m.name}>{m.name}</Link>
                            )
                        })}

                    </div>
                </header>
            </div>



        </>
    )
}