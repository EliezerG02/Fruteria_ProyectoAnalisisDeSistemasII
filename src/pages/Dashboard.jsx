export default function Dashboard() {
  const stats = [
    { title: 'Ventas del Mes', value: 'Q. 245,680.00', icon: '💰', color: 'bg-blue-500' },
    { title: 'Pedidos Pendientes', value: '18', icon: '🛒', color: 'bg-yellow-500' },
    { title: 'Productos en Inventario', value: '1,245', icon: '📦', color: 'bg-green-500' },
    { title: 'Alertas Cadena de Frío', value: '2', icon: '❄️', color: 'bg-red-500' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Principal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-full text-2xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Pedidos Recientes</h2>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">No. Pedido</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Cliente</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 text-sm">PED-00125</td>
                  <td className="py-2 text-sm">Fresh Fruits Inc.</td>
                  <td className="py-2"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">En Preparación</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 text-sm">PED-00124</td>
                  <td className="py-2 text-sm">Distribuidora Nacional</td>
                  <td className="py-2"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Confirmado</span></td>
                </tr>
                <tr>
                  <td className="py-2 text-sm">PED-00123</td>
                  <td className="py-2 text-sm">Exportadora XYZ</td>
                  <td className="py-2"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Despachado</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Alertas</h2>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
              <span className="text-xl">❄️</span>
              <div>
                <p className="text-sm font-medium text-red-800">Temperatura fuera de rango - Cámara 01</p>
                <p className="text-xs text-red-600">Lote LOT-2026-045</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <span className="text-xl">⏰</span>
              <div>
                <p className="text-sm font-medium text-yellow-800">Productos próximos a vencer</p>
                <p className="text-xs text-yellow-600">5 lotes en los próximos 7 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
