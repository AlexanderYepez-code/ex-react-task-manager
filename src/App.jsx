
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import './App.css'
import Layout from './layout/Layout'
import AddTask from './Pages/AddTask'
import TaskList from './Pages/TaskList'

function App() {


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addTask' element={<AddTask/>}/>
          <Route path='/tasklist' element={<TaskList/>}/>
        </Routes>

      </Layout>


    </BrowserRouter>
  )
}

export default App
