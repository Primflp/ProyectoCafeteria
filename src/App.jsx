import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//navbar
import NavBar from './components/Navbar'

// paginas
import Home from './pages/home/home'
import Register from './pages/register/register'
import Login from './pages/login/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
