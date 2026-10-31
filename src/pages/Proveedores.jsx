export default function Proveedores() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Proveedores</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">+ Nuevo Proveedor</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Código</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Razón Social</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Productos Suministrados</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Contacto</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Estado</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">PRV-0001</td>
              <td className="p-4 text-sm">Agroinsumos Petén S.A.</td>
              <td className="p-4 text-sm">Fertilizantes, Abonos</td>
              <td className="p-4 text-sm">+502 7945-1234</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Activo</span></td>
              <td className="p-4 text-sm text-blue-600">Ver / Editar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
