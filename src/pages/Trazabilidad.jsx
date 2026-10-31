export default function Trazabilidad() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Consulta de Trazabilidad por Lote</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Ingrese Código de Lote (Ej: LOT-2026-045)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">Consultar</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recorrido del Lote: LOT-2026-045</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">1</div>
              <div className="w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div className="flex-1 pb-4">
              <p className="font-semibold text-gray-800">Producción - Finca El Paraíso</p>
              <p className="text-sm text-gray-600">Fecha: 20/10/2026 | Cantidad: 500 Kg | Producto: Fresa Fresca</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">2</div>
              <div className="w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div className="flex-1 pb-4">
              <p className="font-semibold text-gray-800">Empaque y Clasificación</p>
              <p className="text-sm text-gray-600">Fecha: 22/10/2026 | Clasificación: Primera Calidad</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">3</div>
              <div className="w-0.5 h-16 bg-gray-300"></div>
            </div>
            <div className="flex-1 pb-4">
              <p className="font-semibold text-gray-800">Ingreso a Almacén Refrigerado</p>
              <p className="text-sm text-gray-600">Fecha: 23/10/2026 | Almacén: Refrigerado 01 | Temp: 2°C</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">4</div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Despacho a Cliente</p>
              <p className="text-sm text-gray-600">Fecha: 27/10/2026 | Cliente: Fresh Fruits Inc. | Pedido: PED-00125</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
