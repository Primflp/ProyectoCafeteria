import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//navbar
import NavBar from './components/Navbar'

// paginas
import Home from './pages/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>Página Sobre Nosotros</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
