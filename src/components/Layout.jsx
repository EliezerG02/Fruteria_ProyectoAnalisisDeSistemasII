import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Clientes', path: '/clientes', icon: '👥' },
  { name: 'Proveedores', path: '/proveedores', icon: '🚚' },
  { name: 'Productos', path: '/productos', icon: '🍓' },
  { name: 'Inventario', path: '/inventario', icon: '📦' },
  { name: 'Pedidos / Cotizaciones', path: '/pedidos', icon: '🛒' },
  { name: 'Compras', path: '/compras', icon: '🧾' },
  { name: 'Trazabilidad', path: '/trazabilidad', icon: '🔍' },
  { name: 'Reclamos y Devoluciones', path: '/reclamos', icon: '⚠️' },
  { name: 'Reportes e Indicadores', path: '/reportes', icon: '📈' },
  { name: 'Usuarios y Roles', path: '/usuarios', icon: '🔐' },
]

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-green-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-green-700">
          {sidebarOpen && (
            <div>
              <h1 className="text-lg font-bold">FRUTERRA ERP</h1>
              <p className="text-xs text-green-200">Análisis y Diseño</p>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-green-700 rounded">
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 mb-1 mx-2 rounded-lg transition-colors ${
                  isActive ? 'bg-green-700 text-white' : 'text-green-100 hover:bg-green-700'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm">{item.name}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-green-700">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-2 py-2 text-green-100 hover:bg-green-700 rounded-lg">
            <span className="text-xl">🚪</span>
            {sidebarOpen && <span className="text-sm">Cerrar Sesión</span>}
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Prototipo de Alta Fidelidad - FRUTERRA ERP</h2>
          <div className="text-sm text-gray-600">Usuario: Demo | Rol: Administrador</div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
