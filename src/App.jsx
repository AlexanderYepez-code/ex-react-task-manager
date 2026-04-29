
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import './App.css'
import Layout from './layout/Layout'
import AddTask from './Pages/AddTask'
import TaskList from './Pages/TaskList'
import TaskDaetail from './Pages/TaskDetail'
import { GlobalProvider } from './Context/GlobalContest'

function App() {


  return (
    <BrowserRouter>
      <GlobalProvider>
        <Layout>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/addTask' element={<AddTask />} />
            <Route path='/tasklist' element={<TaskList />} />
            <Route path="/task/:id" element={<TaskDaetail />} />
          </Routes>

        </Layout>
      </GlobalProvider>



    </BrowserRouter>
  )
}

export default App
