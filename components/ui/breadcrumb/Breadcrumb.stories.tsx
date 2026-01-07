import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Breadcrumb } from './Breadcrumb'

export const breadcrumbStory: ComponentStory = {
  id: 'breadcrumb',
  name: 'Breadcrumb',
  description: 'Navegación jerárquica que muestra la ubicación actual en el sitio.',
  category: 'navigation',
  tags: ['breadcrumb', 'navigation', 'hierarchy', 'path'],
  props: [
    {
      name: 'items',
      type: '{ label: string; href?: string }[]',
      description: 'Array de elementos del breadcrumb',
      required: true,
    },
    {
      name: 'separator',
      type: 'ReactNode',
      description: 'Separador personalizado entre elementos',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Basic',
      description: 'Breadcrumb básico',
      props: {
        items: [
          { label: 'Inicio', href: '/' },
          { label: 'Componentes', href: '/components' },
          { label: 'Button' },
        ],
        children: React.createElement(Breadcrumb, {
          items: [
            { label: 'Inicio', href: '/' },
            { label: 'Componentes', href: '/components' },
            { label: 'Button' },
          ],
        }),
      },
    },
    {
      name: 'Without Links',
      description: 'Breadcrumb sin enlaces',
      props: {
        items: [
          { label: 'Inicio' },
          { label: 'Componentes' },
          { label: 'Button' },
        ],
        children: React.createElement(Breadcrumb, {
          items: [
            { label: 'Inicio' },
            { label: 'Componentes' },
            { label: 'Button' },
          ],
        }),
      },
    },
    {
      name: 'Long Path',
      description: 'Breadcrumb con ruta larga',
      props: {
        items: [
          { label: 'Inicio', href: '/' },
          { label: 'Documentación', href: '/docs' },
          { label: 'Componentes', href: '/docs/components' },
          { label: 'Formularios', href: '/docs/components/forms' },
          { label: 'Input' },
        ],
        children: React.createElement(Breadcrumb, {
          items: [
            { label: 'Inicio', href: '/' },
            { label: 'Documentación', href: '/docs' },
            { label: 'Componentes', href: '/docs/components' },
            { label: 'Formularios', href: '/docs/components/forms' },
            { label: 'Input' },
          ],
        }),
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Breadcrumb } from '@/components/ui/breadcrumb/Breadcrumb'

// Breadcrumb básico
<Breadcrumb
  items={[
    { label: 'Inicio', href: '/' },
    { label: 'Componentes', href: '/components' },
    { label: 'Button' },
  ]}
/>

// Breadcrumb sin enlaces
<Breadcrumb
  items={[
    { label: 'Inicio' },
    { label: 'Componentes' },
    { label: 'Button' },
  ]}
/>`,
    },
  ],
  useCases: [
    'Navegación jerárquica',
    'Indicador de ubicación',
    'Navegación en documentación',
    'Rutas de navegación',
  ],
}

