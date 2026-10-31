export default function Inventario() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Inventario</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md text-left">
          <p className="font-semibold text-gray-800">📥 Entradas</p>
          <p className="text-sm text-gray-600">Registrar ingreso de productos/lotes</p>
        </button>
        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md text-left">
          <p className="font-semibold text-gray-800">📤 Salidas</p>
          <p className="text-sm text-gray-600">Registrar salida de productos</p>
        </button>
        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md text-left">
          <p className="font-semibold text-gray-800">🔄 Transferencias</p>
          <p className="text-sm text-gray-600">Transferir entre almacenes</p>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Existencias por Producto y Lote</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Lote</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Producto</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Almacén</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Cantidad (Kg)</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Fecha Ingreso</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">LOT-2026-045</td>
              <td className="p-4 text-sm">Fresa Fresca</td>
              <td className="p-4 text-sm">Almacén Refrigerado 01</td>
              <td className="p-4 text-sm">450.00</td>
              <td className="p-4 text-sm">25/10/2026</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Disponible</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
