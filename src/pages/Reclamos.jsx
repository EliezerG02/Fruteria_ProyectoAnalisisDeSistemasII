export default function Reclamos() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Reclamos y Devoluciones</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">+ Nuevo Reclamo</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-600">No. Reclamo</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Cliente</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Pedido</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Tipo</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Fecha</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Estado</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">REC-00012</td>
              <td className="p-4 text-sm">Fresh Fruits Inc.</td>
              <td className="p-4 text-sm">PED-00125</td>
              <td className="p-4 text-sm">Retraso en Entrega</td>
              <td className="p-4 text-sm">27/10/2026</td>
              <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">En Seguimiento</span></td>
              <td className="p-4 text-sm text-blue-600">Dar Seguimiento</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
