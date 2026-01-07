import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Skeleton } from './Skeleton'

export const skeletonStory: ComponentStory = {
  id: 'skeleton',
  name: 'Skeleton',
  description: 'Componente placeholder animado que se muestra mientras carga el contenido, mejorando la experiencia de usuario.',
  category: 'feedback',
  tags: ['skeleton', 'loading', 'placeholder', 'shimmer'],
  props: [
    {
      name: 'variant',
      type: 'text | circular | rectangular',
      description: 'Forma del skeleton',
      default: 'rectangular',
      required: false,
    },
    {
      name: 'className',
      type: 'string',
      description: 'Clases CSS adicionales para personalizar tamaño y forma',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Text',
      description: 'Skeleton para líneas de texto',
      props: {
        variant: 'text',
        className: 'w-64 h-4',
      },
    },
    {
      name: 'Circular',
      description: 'Skeleton circular para avatares',
      props: {
        variant: 'circular',
        className: 'h-12 w-12',
      },
    },
    {
      name: 'Rectangular',
      description: 'Skeleton rectangular para cards',
      props: {
        variant: 'rectangular',
        className: 'h-32 w-64',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Skeleton } from '@/components/ui/skeleton/Skeleton'

// Skeleton básico
<Skeleton className="h-4 w-64" />

// Skeleton circular (para avatares)
<Skeleton variant="circular" className="h-12 w-12" />

// Skeleton rectangular (para cards)
<Skeleton variant="rectangular" className="h-32 w-64" />

// Skeleton de texto (para líneas)
<Skeleton variant="text" className="w-full" />

// Skeleton de card completo
<div className="border rounded-lg p-4">
  <div className="flex items-center space-x-4">
    <Skeleton variant="circular" className="h-12 w-12" />
    <div className="space-y-2 flex-1">
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-2/3" />
    </div>
  </div>
  <Skeleton variant="rectangular" className="h-24 w-full mt-4" />
</div>`,
    },
  ],
  useCases: [
    'Placeholders mientras cargan datos',
    'Mejorar percepción de rendimiento',
    'Skeletons de cards, listas y tablas',
    'Evitar saltos de layout durante carga',
  ],
}

