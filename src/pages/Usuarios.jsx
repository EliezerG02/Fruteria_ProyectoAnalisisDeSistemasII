export default function Usuarios() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Administración de Usuarios y Roles</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">+ Nuevo Usuario</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Usuario</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Nombre Completo</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Rol</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Departamento</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Estado</th>
              <th className="text-left p-4 text-sm font-medium text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">admin</td>
              <td className="p-4 text-sm">Administrador del Sistema</td>
              <td className="p-4 text-sm">Administrador</td>
              <td className="p-4 text-sm">Sistemas</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Activo</span></td>
              <td className="p-4 text-sm text-blue-600">Editar / Permisos</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-sm">vendedor01</td>
              <td className="p-4 text-sm">Juan Pérez</td>
              <td className="p-4 text-sm">Vendedor</td>
              <td className="p-4 text-sm">Ventas</td>
              <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Activo</span></td>
              <td className="p-4 text-sm text-blue-600">Editar / Permisos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
