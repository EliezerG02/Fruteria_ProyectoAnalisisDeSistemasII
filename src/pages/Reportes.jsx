export default function Reportes() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Reportes e Indicadores Gerenciales</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button className="bg-white p-6 rounded-lg shadow hover:shadow-md text-left">
          <p className="text-2xl mb-2">📊</p>
          <p className="font-semibold text-gray-800">Ventas por Período</p>
          <p className="text-sm text-gray-600">Nacionales e Internacionales</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow hover:shadow-md text-left">
          <p className="text-2xl mb-2">🏆</p>
          <p className="font-semibold text-gray-800">Productos más Vendidos</p>
          <p className="text-sm text-gray-600">Top de productos</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow hover:shadow-md text-left">
          <p className="text-2xl mb-2">🌍</p>
          <p className="font-semibold text-gray-800">Exportaciones por País</p>
          <p className="text-sm text-gray-600">Volumen por destino</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow hover:shadow-md text-left">
          <p className="text-2xl mb-2">📦</p>
          <p className="font-semibold text-gray-800">Inventario Disponible</p>
          <p className="text-sm text-gray-600">Existencias por lote y almacén</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow hover:shadow-md text-left">
          <p className="text-2xl mb-2">⏰</p>
          <p className="font-semibold text-gray-800">Productos Próximos a Vencer</p>
          <p className="text-sm text-gray-600">Alerta de caducidad</p>
        </button>
        <button className="bg-white p-6 rounded-lg shadow hover:shadow-md text-left">
          <p className="text-2xl mb-2">💳</p>
          <p className="font-semibold text-gray-800">Cuentas por Cobrar/Pagar</p>
          <p className="text-sm text-gray-600">Cartera financiera</p>
        </button>
      </div>
    </div>
  )
}
