import Link from 'next/link'
import { categories } from '@/lib/component-registry'
import '@/lib/init-components' // Inicializar componentes

export default function Home() {
  // Asegurar que los componentes estén inicializados
  const allComponents = categories.flatMap(cat => cat.components || [])

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Catálogo de Componentes</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Bienvenido al catálogo interactivo de componentes reutilizables. 
          Explora los componentes disponibles en la barra lateral y descubre 
          sus variantes, propiedades y ejemplos de código.
        </p>

        {/* Componentes disponibles */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Componentes Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allComponents.map((component) => (
              <Link
                key={component.id}
                href={`/components/${component.category}/${component.id}`}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow hover:border-blue-500 dark:hover:border-blue-400"
              >
                <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {component.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {component.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Ver detalles →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Instrucciones */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Cómo usar este catálogo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Navegación</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Navega por las categorías en la barra lateral</li>
                <li>Busca componentes usando el buscador</li>
                <li>Selecciona un componente para ver detalles</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visualización</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Explora las diferentes variantes de cada componente</li>
                <li>Visualiza el código fuente con syntax highlighting</li>
                <li>Consulta la documentación completa de propiedades</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {allComponents.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Componentes Disponibles
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {categories.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Categorías
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {allComponents.reduce((acc, comp) => acc + (comp.variants?.length || 0), 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Variantes Totales
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

