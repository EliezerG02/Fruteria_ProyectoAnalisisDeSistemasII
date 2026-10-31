import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Proveedores from './pages/Proveedores'
import Productos from './pages/Productos'
import Inventario from './pages/Inventario'
import Pedidos from './pages/Pedidos'
import Compras from './pages/Compras'
import Trazabilidad from './pages/Trazabilidad'
import Reclamos from './pages/Reclamos'
import Reportes from './pages/Reportes'
import Usuarios from './pages/Usuarios'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="proveedores" element={<Proveedores />} />
        <Route path="productos" element={<Productos />} />
        <Route path="inventario" element={<Inventario />} />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="compras" element={<Compras />} />
        <Route path="trazabilidad" element={<Trazabilidad />} />
        <Route path="reclamos" element={<Reclamos />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="usuarios" element={<Usuarios />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
