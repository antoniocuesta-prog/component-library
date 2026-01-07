'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CodeBlock from './CodeBlock'
import PropsEditor from './PropsEditor'
import { ComponentStory } from '@/lib/component-registry'
import { Eye, Code, Settings, Download, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ComponentViewerProps {
  component: ComponentStory
  componentId: string
}

type ViewMode = 'preview' | 'code' | 'both'

// Mapeo de componentes para importación dinámica en el cliente
const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  'button': () => import('@/components/ui/button/Button').then(m => ({ default: m.Button })),
  'input': () => import('@/components/ui/input/Input').then(m => ({ default: m.Input })),
  'textarea': () => import('@/components/ui/textarea/Textarea').then(m => ({ default: m.Textarea })),
  'select': () => import('@/components/ui/select/Select').then(m => ({ default: m.Select })),
  'checkbox': () => import('@/components/ui/checkbox/Checkbox').then(m => ({ default: m.Checkbox })),
  'switch': () => import('@/components/ui/switch/Switch').then(m => ({ default: m.Switch })),
  'radio': () => import('@/components/ui/radio/RadioGroup').then(m => ({ default: m.RadioGroup })),
  'alert': () => import('@/components/ui/alert/Alert').then(m => ({ default: m.Alert })),
  'card': () => import('@/components/ui/card/Card').then(m => ({ default: m.Card })),
  'badge': () => import('@/components/ui/badge/Badge').then(m => ({ default: m.Badge })),
  'spinner': () => import('@/components/ui/spinner/Spinner').then(m => ({ default: m.Spinner })),
  'avatar': () => import('@/components/ui/avatar/Avatar').then(m => ({ default: m.Avatar })),
  'progress': () => import('@/components/ui/progress/Progress').then(m => ({ default: m.Progress })),
  'divider': () => import('@/components/ui/divider/Divider').then(m => ({ default: m.Divider })),
  'breadcrumb': () => import('@/components/ui/breadcrumb/Breadcrumb').then(m => ({ default: m.Breadcrumb })),
  'pagination': () => import('@/components/ui/pagination/Pagination').then(m => ({ default: m.Pagination })),
  'accordion': () => import('@/components/ui/accordion/Accordion').then(m => ({ default: m.Accordion })),
  'table': () => import('@/components/ui/table/Table').then(m => ({ default: m.Table })),
  'typography': () => import('@/components/ui/typography/Typography').then(m => ({ default: m.Typography })),
  'modal': () => import('@/components/ui/modal/Modal').then(m => ({ default: m.Modal })),
  'dropdown': () => import('@/components/ui/dropdown/Dropdown').then(m => ({ default: m.Dropdown })),
  'tabs': () => import('@/components/ui/tabs/Tabs').then(m => ({ default: m.Tabs })),
  'tooltip': () => import('@/components/ui/tooltip/Tooltip').then(m => ({ default: m.Tooltip })),
  'skeleton': () => import('@/components/ui/skeleton/Skeleton').then(m => ({ default: m.Skeleton })),
  'toast': () => import('@/components/ui/toast/Toast').then(m => ({ default: m.Toast })),
  'slider': () => import('@/components/ui/slider/Slider').then(m => ({ default: m.Slider })),
  'file-upload': () => import('@/components/ui/file-upload/FileUpload').then(m => ({ default: m.FileUpload })),
  'date-picker': () => import('@/components/ui/date-picker/DatePicker').then(m => ({ default: m.DatePicker })),
  'time-picker': () => import('@/components/ui/time-picker/TimePicker').then(m => ({ default: m.TimePicker })),
  'drawer': () => import('@/components/ui/drawer/Drawer').then(m => ({ default: m.Drawer })),
  'autocomplete': () => import('@/components/ui/autocomplete/Autocomplete').then(m => ({ default: m.Autocomplete })),
}

export default function ComponentViewer({ component, componentId }: ComponentViewerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('both')
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Asegurar que variants existe y tiene al menos un elemento
  const safeVariants = component.variants || []
  const initialProps = safeVariants[0]?.props || {}
  const [props, setProps] = useState(initialProps)

  // Asegurar que selectedVariant no exceda la longitud del array
  const safeSelectedVariant = Math.min(selectedVariant, safeVariants.length - 1)
  const currentVariant = safeVariants[safeSelectedVariant]

  // Cargar el componente dinámicamente en el cliente
  useEffect(() => {
    const loadComponent = async () => {
      setLoading(true)
      const id = componentId || component.id
      const loader = componentMap[id]
      
      if (loader) {
        try {
          const ComponentModule = await loader()
          setComponent(() => ComponentModule?.default || null)
        } catch (error) {
          console.error(`Error loading component ${id}:`, error)
          setComponent(null)
        }
      } else {
        console.warn(`No loader found for component ${id}`)
        setComponent(null)
      }
      setLoading(false)
    }
    
    loadComponent()
  }, [component.id, componentId])
  
  // Generar código específico para la variante actual
  const generateVariantCode = () => {
    if (!currentVariant || !currentVariant.props) {
      const fallbackCode = component.codeExamples[0]?.code || ''
      return fallbackCode
    }
    
    const variantProps = currentVariant.props
    
    // Si tiene children como JSX (como Card), usar el ejemplo completo
    if (React.isValidElement(variantProps.children)) {
      const jsxCode = component.codeExamples[0]?.code || ''
      return jsxCode
    }
    
    const propStrings: string[] = []
    let childrenValue: string | undefined
    
    try {
      Object.entries(variantProps).forEach(([key, value]) => {
        if (key === 'children') {
          childrenValue = typeof value === 'string' ? value : undefined
        } else {
          if (typeof value === 'boolean') {
            if (value) propStrings.push(key)
          } else if (typeof value === 'string') {
            propStrings.push(`${key}="${value}"`)
          } else {
            propStrings.push(`${key}={${JSON.stringify(value)}}`)
          }
        }
      })
    } catch (error) {
      console.warn('Error processing variant props:', error)
    }
    
    const propsString = propStrings.length > 0 ? ' ' + propStrings.join(' ') : ''
    const generatedCode = childrenValue !== undefined 
      ? `<${component.name}${propsString}>${childrenValue}</${component.name}>`
      : `<${component.name}${propsString} />`
    return generatedCode
  }
  
  const currentCode = generateVariantCode()
  
  // Función para filtrar props y eliminar funciones
  const filterProps = (propsToFilter: Record<string, any>): Record<string, any> => {
    const filtered: Record<string, any> = {}
    
    for (const [key, value] of Object.entries(propsToFilter)) {
      // Saltar funciones
      if (typeof value === 'function') {
        continue
      }
      
      // Si es un array, filtrar elementos que sean funciones
      if (Array.isArray(value)) {
        const filteredArray = value.map((item: any) => {
          if (typeof item === 'object' && item !== null) {
            const filteredItem: Record<string, any> = {}
            for (const [itemKey, itemValue] of Object.entries(item)) {
              if (typeof itemValue !== 'function') {
                filteredItem[itemKey] = itemValue
              }
            }
            return filteredItem
          }
          return typeof item === 'function' ? undefined : item
        }).filter((item: any) => item !== undefined)
        filtered[key] = filteredArray
        continue
      }
      
      // Si es un objeto, filtrar recursivamente
      if (typeof value === 'object' && value !== null && !React.isValidElement(value)) {
        filtered[key] = filterProps(value)
        continue
      }
      
      // Para otros valores (strings, numbers, booleans, elementos React válidos)
      filtered[key] = value
    }
    
    return filtered
  }

  // Si la variante tiene children como JSX, usarlo directamente
  const renderPreview = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="text-gray-500 dark:text-gray-400">Cargando componente...</div>
        </div>
      )
    }

    if (!Component) {
      return (
        <div className="p-4 border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700 rounded-md">
          <p className="text-yellow-800 dark:text-yellow-200 font-medium">
            Componente no disponible
          </p>
          <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">
            El componente {component.name} está registrado pero no se pudo cargar.
          </p>
        </div>
      )
    }

    // Filtrar props para eliminar funciones
    const filteredProps = filterProps(props)

    if (filteredProps.children && React.isValidElement(filteredProps.children)) {
      return filteredProps.children
    }
    // Para componentes normales, renderizar con props filtradas
    if (component.id === 'card') {
      // Card se renderiza con sus subcomponentes en children
      return <Component {...filteredProps} />
    }
    // Para componentes que requieren estado interno o props especiales
    if (component.id === 'radio') {
      return <Component {...filteredProps} />
    }
    if (component.id === 'modal') {
      return <Component {...filteredProps} isOpen={true} onClose={() => {}} />
    }
    if (component.id === 'tabs') {
      return <Component {...filteredProps} />
    }
    if (component.id === 'pagination') {
      return <Component {...filteredProps} onPageChange={() => {}} />
    }
    if (component.id === 'accordion') {
      return <Component {...filteredProps} />
    }
    if (component.id === 'drawer') {
      return <Component {...filteredProps} isOpen={true} onClose={() => {}}>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400">
            Contenido del drawer. Puedes poner cualquier cosa aquí.
          </p>
        </div>
      </Component>
    }
    if (component.id === 'toast') {
      // Toast se renderiza sin container para preview
      return <Component {...filteredProps} onClose={() => {}} />
    }
    if (component.id === 'date-picker') {
      return <Component {...filteredProps} onChange={() => {}} />
    }
    if (component.id === 'time-picker') {
      return <Component {...filteredProps} onChange={() => {}} />
    }
    if (component.id === 'autocomplete') {
      return <Component {...filteredProps} onChange={() => {}} onSelect={() => {}} />
    }
    if (component.id === 'table') {
      // Para Table, asegurarse de que las columnas no tengan funciones render
      const tableProps = { ...filteredProps }
      if (tableProps.columns) {
        tableProps.columns = tableProps.columns.map((col: any) => {
          const { render, ...rest } = col
          return rest
        })
      }
      return <Component {...tableProps} />
    }
    return <Component {...filteredProps} />
  }

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al listado de componentes
        </Link>
        <h1 className="text-4xl font-bold mb-2">{component.name}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {component.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setViewMode('preview')}
          className={cn(
            "px-4 py-2 flex items-center gap-2 border-b-2 transition-smooth focus-visible-ring",
            viewMode === 'preview'
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          )}
          aria-label="Vista previa"
          aria-pressed={viewMode === 'preview'}
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button
          onClick={() => setViewMode('code')}
          className={cn(
            "px-4 py-2 flex items-center gap-2 border-b-2 transition-smooth focus-visible-ring",
            viewMode === 'code'
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          )}
          aria-label="Vista de código"
          aria-pressed={viewMode === 'code'}
        >
          <Code className="w-4 h-4" />
          Código
        </button>
        <button
          onClick={() => setViewMode('both')}
          className={cn(
            "px-4 py-2 flex items-center gap-2 border-b-2 transition-smooth focus-visible-ring",
            viewMode === 'both'
              ? "border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          )}
          aria-label="Vista combinada"
          aria-pressed={viewMode === 'both'}
        >
          <Settings className="w-4 h-4" />
          Ambos
        </button>
      </div>

      {/* Variants */}
      {safeVariants.length > 1 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Variantes</h3>
          <div className="flex flex-wrap gap-2">
            {safeVariants.map((variant, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedVariant(index)
                  setProps(variant.props || {})
                }}
                className={cn(
                  "px-4 py-2 rounded-md border transition-colors",
                  safeSelectedVariant === index
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                )}
              >
                {variant.name}
              </button>
            ))}
          </div>
          {currentVariant?.description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {currentVariant.description}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className={cn(
        "grid gap-6",
        viewMode === 'both' ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
      )}>
        {(viewMode === 'preview' || viewMode === 'both') && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="min-h-[200px] flex items-center justify-center">
              {renderPreview()}
            </div>
          </div>
        )}

        {(viewMode === 'code' || viewMode === 'both') && (
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Código</h3>
              <button
                onClick={async () => {
                  try {
                    const response = await fetch('/api/export-code', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ componentId: component.id, code: currentCode }),
                    })
                    const blob = await response.blob()
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `${component.name}.tsx`
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(url)
                    document.body.removeChild(a)
                  } catch (error) {
                    console.error('Error al exportar:', error)
                  }
                }}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-smooth focus-visible-ring"
                aria-label="Exportar código"
              >
                <Download className="w-4 h-4" />
                Exportar
              </button>
            </div>
            <CodeBlock code={currentCode} language="tsx" />
          </div>
        )}
      </div>

      {/* Props Editor */}
      {component.props.length > 0 && (
        <div className="mt-8">
          <PropsEditor
            component={component}
            props={props}
            onPropsChange={setProps}
          />
        </div>
      )}

      {/* Props Documentation */}
      {component.props.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Documentación de Propiedades</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Nombre</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Tipo</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Descripción</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {component.props.map((prop) => (
                  <tr key={prop.name} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-4 py-3 text-sm font-mono">
                      {prop.name}
                      {prop.required && <span className="text-red-500 ml-1">*</span>}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-gray-600 dark:text-gray-400">
                      {prop.type}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {prop.description}
                    </td>
                    <td className="px-4 py-3 text-sm font-mono text-gray-500 dark:text-gray-500">
                      {prop.default || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Use Cases */}
      {component.useCases.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Casos de Uso</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            {component.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

