import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import Detalle from './pages/productos/detalleProductos/detalle'

// administrador

import AdminHome from './pages/administrador/adminHome/adminHome'
import AdminProductos from './pages/administrador/adminHome/adminProductos'
import AdminUsuarios from './pages/administrador/adminHome/adminUsuarios'
import AdminNuevoUsuario from './pages/administrador/adminHome/adminNuevoUsuario'
import AdminNuevoProducto from './pages/administrador/adminHome/adminNuevoProducto'
import VendedorHome from './pages/vendedor/vendedorHome'
import VendedorProductos from './pages/vendedor/vendedorProductos'
import Carrito from './pages/carrito/carrito'
import CompraExitosa from './pages/carrito/compraExitosa'
import { RutaProtegida } from './auth/RutaProtegida'
import AdminEditarProducto from './pages/administrador/adminHome/adminEditarProducto'

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
        <Route path="/carrito/compraExitosa" element={<CompraExitosa/>} />
        

        {/* detalle de cada producto */}
        <Route path="/detalle" element={<Navigate to="/productos" replace />} />
        <Route path="/detalle/:id" element={<Detalle/>} />

        {/* administrador */}
        <Route path="/admin/home" element={
          <RutaProtegida rolRequerido="ROLE_ADMIN">
            <AdminHome/>
          </RutaProtegida>
        } />
        <Route path="/admin/productos" element={
          <RutaProtegida rolRequerido="ROLE_ADMIN">
            <AdminProductos/>
          </RutaProtegida>
        } />
        <Route path="/admin/productos/crear" element={
          <RutaProtegida rolRequerido="ROLE_ADMIN">
            <AdminNuevoProducto/>
          </RutaProtegida>
        } />
        <Route path="/admin/usuarios" element={
          <RutaProtegida rolRequerido="ROLE_ADMIN">
            <AdminUsuarios/>
          </RutaProtegida>
        } />
        <Route path="/admin/usuarios/crear" element={
          <RutaProtegida rolRequerido="ROLE_ADMIN">
            <AdminNuevoUsuario/>
          </RutaProtegida>
        } />
        <Route path="/admin/productos/editar/:id" element={
          <RutaProtegida rolRequerido="ROLE_ADMIN">
            <AdminEditarProducto/>
          </RutaProtegida>
        } />

        {/* vendedor */}
        <Route path="/vendedor/home" element={
          <RutaProtegida rolRequerido="ROLE_VENDEDOR">
            <VendedorHome/>
          </RutaProtegida>
          } />
        <Route path="/vendedor/productos" element={
          <RutaProtegida rolRequerido="ROLE_VENDEDOR">
            <VendedorProductos/>
          </RutaProtegida>
          } />
        
      </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
