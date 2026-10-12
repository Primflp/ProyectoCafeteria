import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//navbar
import NavBar from './components/Navbar'

//Footer
import Footer from './components/Footer'

// paginas
import Home from './pages/home/home'
import Register from './pages/register/register'
import Login from './pages/login/login'
import Nosotros from './pages/nosotros/nosotros'
import Preparaciones from './pages/preparaciones/preparaciones'
import Contacto from './pages/contacto/contacto'
import Productos from './pages/productos/productos'
import Detalle1 from './pages/productos/detalleProductos/detalle1'
import Detalle2 from './pages/productos/detalleProductos/detalle2'
import Detalle3 from './pages/productos/detalleProductos/detalle3'
import Detalle4 from './pages/productos/detalleProductos/detalle4'
import Detalle5 from './pages/productos/detalleProductos/detalle5'
import Detalle6 from './pages/productos/detalleProductos/detalle6'
import Detalle7 from './pages/productos/detalleProductos/detalle7'
import Detalle8 from './pages/productos/detalleProductos/detalle8'
import Detalle9 from './pages/productos/detalleProductos/detalle9'
import Detalle10 from './pages/productos/detalleProductos/detalle10'
import Detalle11 from './pages/productos/detalleProductos/detalle11'
import Detalle12 from './pages/productos/detalleProductos/detalle12'

// administrador

import AdminHome from './pages/administrador/adminHome/adminHome'
import AdminProductos from './pages/administrador/adminHome/adminProductos'
import AdminUsuarios from './pages/administrador/adminHome/adminUsuarios'
import AdminNuevoUsuario from './pages/administrador/adminHome/adminNuevoUsuario'
import Carrito from './pages/carrito/carrito'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/preparaciones" element={<Preparaciones/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/carrito" element={<Carrito/>} />

        {/* detalle de cada producto */}
        <Route path="/detalle1" element={<Detalle1/>} />
        <Route path="/detalle2" element={<Detalle2/>} />
        <Route path="/detalle3" element={<Detalle3/>} />
        <Route path="/detalle4" element={<Detalle4/>} />
        <Route path="/detalle5" element={<Detalle5/>} />
        <Route path="/detalle6" element={<Detalle6/>} />
        <Route path="/detalle7" element={<Detalle7/>} />
        <Route path="/detalle8" element={<Detalle8/>} />
        <Route path="/detalle9" element={<Detalle9/>} />
        <Route path="/detalle10" element={<Detalle10/>} />
        <Route path="/detalle11" element={<Detalle11/>} />
        <Route path="/detalle12" element={<Detalle12/>} />

        {/* administrador */}
        <Route path="/admin/home" element={<AdminHome/>} />
        <Route path="/admin/productos" element={<AdminProductos/>} />
        <Route path="/admin/usuarios" element={<AdminUsuarios/>} />
        <Route path="/admin/usuarios/crear" element={<AdminNuevoUsuario/>} />
        
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
