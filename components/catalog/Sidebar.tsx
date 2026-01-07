'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, ChevronRight, ChevronDown, X } from 'lucide-react'
import { categories, searchComponents, getAllComponents } from '@/lib/component-registry'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

// Asegurar que los componentes se inicialicen
import '@/lib/init-components'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['essential']))
  const [filteredCategories, setFilteredCategories] = useState(() => {
    // Usar getAllComponents para obtener todos los componentes registrados
    const allComponents = getAllComponents()
    return categories.map(cat => ({
      ...cat,
      components: allComponents.filter(comp => comp.category === cat.id)
    }))
  })

  // Recargar categorías cuando cambien (por si se agregan componentes dinámicamente)
  useEffect(() => {
    // Forzar recarga inicial de categorías después de que se monten los componentes
    const updateCategories = () => {
      const allComponents = getAllComponents()
      const updatedCategories = categories.map(cat => ({
        ...cat,
        components: allComponents.filter(comp => comp.category === cat.id)
      }))
      setFilteredCategories(updatedCategories)
    }
    
    // Ejecutar inmediatamente
    updateCategories()
    
    // También ejecutar después de un breve delay para asegurar que los componentes estén registrados
    const timeout = setTimeout(updateCategories, 100)
    
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchComponents(searchQuery)
      // Reconstruir categorías con resultados filtrados
      const allComponents = getAllComponents()
      const filtered = categories.map(cat => ({
        ...cat,
        components: allComponents
          .filter(comp => comp.category === cat.id)
          .filter(comp => results.some(r => r.id === comp.id))
      })).filter(cat => cat.components.length > 0)
      setFilteredCategories(filtered)
    } else {
      // Crear una copia nueva usando getAllComponents
      const allComponents = getAllComponents()
      setFilteredCategories(categories.map(cat => ({
        ...cat,
        components: allComponents.filter(comp => comp.category === cat.id)
      })))
    }
  }, [searchQuery])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  // Cerrar sidebar cuando se hace clic en un link en móvil
  const handleLinkClick = () => {
    if (onClose && window.innerWidth < 768) {
      onClose()
    }
  }

  return (
    <>
      {/* Overlay para móvil */}
      {onClose && (
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Componentes</h2>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {onClose && (
                <button
                  onClick={onClose}
                  className="md:hidden p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-2">
        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-2">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              <span>{category.name}</span>
              {expandedCategories.has(category.id) ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            
            {expandedCategories.has(category.id) && (
              <div className="ml-4 mt-1 space-y-1">
                {category.components.length === 0 ? (
                  <p className="px-3 py-2 text-xs text-gray-400 dark:text-gray-500 italic">
                    No hay componentes disponibles
                  </p>
                ) : (
                  category.components.map((component) => {
                    const isActive = pathname === `/components/${component.category}/${component.id}`
                    return (
                      <Link
                        key={component.id}
                        href={`/components/${component.category}/${component.id}`}
                        onClick={handleLinkClick}
                        className={cn(
                          "block px-3 py-2 text-sm rounded-md transition-colors",
                          isActive
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-medium"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        {component.name}
                      </Link>
                    )
                  })
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
    </>
  )
}

