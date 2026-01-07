import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Pagination } from './Pagination'

export const paginationStory: ComponentStory = {
  id: 'pagination',
  name: 'Pagination',
  description: 'Componente de paginación para navegar entre páginas de resultados.',
  category: 'navigation',
  tags: ['pagination', 'navigation', 'pages', 'pager'],
  props: [
    {
      name: 'currentPage',
      type: 'number',
      description: 'Página actual',
      required: true,
    },
    {
      name: 'totalPages',
      type: 'number',
      description: 'Número total de páginas',
      required: true,
    },
    {
      name: 'onPageChange',
      type: '(page: number) => void',
      description: 'Callback cuando cambia la página',
      required: true,
    },
    {
      name: 'showFirstLast',
      type: 'boolean',
      description: 'Mostrar botones de primera y última página',
      default: 'false',
      required: false,
    },
    {
      name: 'maxVisible',
      type: 'number',
      description: 'Número máximo de páginas visibles',
      default: '5',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Basic',
      description: 'Paginación básica',
      props: {
        currentPage: 1,
        totalPages: 10,
      },
    },
    {
      name: 'Middle Page',
      description: 'Paginación en página intermedia',
      props: {
        currentPage: 5,
        totalPages: 10,
      },
    },
    {
      name: 'With First Last',
      description: 'Paginación con botones de primera y última',
      props: {
        currentPage: 5,
        totalPages: 20,
        showFirstLast: true,
      },
    },
    {
      name: 'Few Pages',
      description: 'Paginación con pocas páginas',
      props: {
        currentPage: 2,
        totalPages: 3,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Pagination } from '@/components/ui/pagination/Pagination'
import { useState } from 'react'

function MyComponent() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  )
}`,
    },
  ],
  useCases: [
    'Navegación de resultados',
    'Listas paginadas',
    'Tablas de datos',
    'Galerías de imágenes',
  ],
}

