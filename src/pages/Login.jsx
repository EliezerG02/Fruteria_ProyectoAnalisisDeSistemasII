import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-2">FRUTERRA ERP</h1>
            <p className="text-gray-600">Sistema Integrado de Gestión Agroexportadora</p>
            <p className="text-sm text-gray-500 mt-1">FRUTERRA EXPORT, S.A.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors font-semibold"
            >
              Iniciar Sesión
            </button>
          </form>
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>Prototipo de Alta Fidelidad - Solo Interfaz</p>
            <p>Análisis de Sistemas II - UMGB Petén</p>
          </div>
        </div>
      </div>
    </div>
  )
}
