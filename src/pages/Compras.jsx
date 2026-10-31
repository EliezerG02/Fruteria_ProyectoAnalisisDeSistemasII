export default function Compras() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Compras</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">+ Nueva Solicitud de Compra</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-600">No. OC</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Proveedor</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Fecha Solicitud</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Total</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Estado</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">OC-00045</td>
              <td className="p-4 text-sm">Agroinsumos Petén S.A.</td>
              <td className="p-4 text-sm">26/10/2026</td>
              <td className="p-4 text-sm">Q. 8,450.00</td>
              <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pendiente Aprobación</span></td>
              <td className="p-4 text-sm text-blue-600">Aprobar / Ver</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">OC-00044</td>
              <td className="p-4 text-sm">Agroinsumos Petén S.A.</td>
              <td className="p-4 text-sm">25/10/2026</td>
              <td className="p-4 text-sm">Q. 5,200.00</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Recibida</span></td>
              <td className="p-4 text-sm text-blue-600">Ver</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
