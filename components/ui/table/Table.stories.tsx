import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Table } from './Table'

const sampleData = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin' },
  { id: 2, name: 'María García', email: 'maria@example.com', role: 'Usuario' },
  { id: 3, name: 'Carlos López', email: 'carlos@example.com', role: 'Usuario' },
]

export const tableStory: ComponentStory = {
  id: 'table',
  name: 'Table',
  description: 'Tabla para mostrar datos estructurados en filas y columnas.',
  category: 'layout',
  tags: ['table', 'data', 'grid', 'rows', 'columns'],
  props: [
    {
      name: 'columns',
      type: '{ key: string; header: string; render?: (value, row) => ReactNode }[]',
      description: 'Array de columnas de la tabla',
      required: true,
    },
    {
      name: 'data',
      type: 'any[]',
      description: 'Array de datos para mostrar',
      required: true,
    },
    {
      name: 'striped',
      type: 'boolean',
      description: 'Aplicar estilo rayado a las filas',
      default: 'false',
      required: false,
    },
    {
      name: 'hover',
      type: 'boolean',
      description: 'Efecto hover en las filas',
      default: 'true',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Basic',
      description: 'Tabla básica',
      props: {
        columns: [
          { key: 'name', header: 'Nombre' },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Rol' },
        ],
        data: sampleData,
      },
    },
    {
      name: 'Striped',
      description: 'Tabla con filas rayadas',
      props: {
        columns: [
          { key: 'name', header: 'Nombre' },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Rol' },
        ],
        data: sampleData,
        striped: true,
      },
    },
    {
      name: 'With Custom Render',
      description: 'Tabla con renderizado personalizado (ver código para implementación)',
      props: {
        columns: [
          { key: 'name', header: 'Nombre' },
          { key: 'email', header: 'Email' },
          { key: 'role', header: 'Rol' },
        ],
        data: sampleData,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Table } from '@/components/ui/table/Table'

const data = [
  { id: 1, name: 'Juan', email: 'juan@example.com' },
  { id: 2, name: 'María', email: 'maria@example.com' },
]

<Table
  columns={[
    { key: 'name', header: 'Nombre' },
    { key: 'email', header: 'Email' },
  ]}
  data={data}
/>

// Tabla con filas rayadas
<Table
  columns={[...]}
  data={data}
  striped
/>`,
    },
  ],
  useCases: [
    'Listados de datos',
    'Tablas de información',
    'Reportes y estadísticas',
    'Gestión de contenido',
  ],
}

