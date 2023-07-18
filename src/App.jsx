import React from 'react'
import "../src/App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navegation/Navbar' 
import Dashboard from './components/pages/Dashboard'
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}

export default App
