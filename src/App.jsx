import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import { Navbar } from "./components/Navegacion/Navbar"

function App() {
 
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/Navbar' element={<Navbar />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
