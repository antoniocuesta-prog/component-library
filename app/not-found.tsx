import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Componente no encontrado</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          El componente que buscas no existe o ha sido movido.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

