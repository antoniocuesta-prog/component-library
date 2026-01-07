import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Tabs } from './Tabs'

export const tabsStory: ComponentStory = {
  id: 'tabs',
  name: 'Tabs',
  description: 'Componente de pestañas para organizar contenido en secciones.',
  category: 'navigation',
  tags: ['tabs', 'navigation', 'pestañas', 'sections'],
  props: [
    {
      name: 'items',
      type: '{ id: string; label: string; content: ReactNode; disabled?: boolean }[]',
      description: 'Array de pestañas',
      required: true,
    },
    {
      name: 'defaultTab',
      type: 'string',
      description: 'ID de la pestaña activa por defecto',
      required: false,
    },
    {
      name: 'orientation',
      type: 'horizontal | vertical',
      description: 'Orientación de las pestañas',
      default: 'horizontal',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Horizontal',
      description: 'Pestañas horizontales',
      props: {
        items: [
          {
            id: 'tab1',
            label: 'Pestaña 1',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Contenido de la pestaña 1'),
          },
          {
            id: 'tab2',
            label: 'Pestaña 2',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Contenido de la pestaña 2'),
          },
          {
            id: 'tab3',
            label: 'Pestaña 3',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Contenido de la pestaña 3'),
          },
        ],
        children: React.createElement(Tabs, {
          items: [
            {
              id: 'tab1',
              label: 'Pestaña 1',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Contenido de la pestaña 1'),
            },
            {
              id: 'tab2',
              label: 'Pestaña 2',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Contenido de la pestaña 2'),
            },
            {
              id: 'tab3',
              label: 'Pestaña 3',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Contenido de la pestaña 3'),
            },
          ],
        }),
      },
    },
    {
      name: 'Vertical',
      description: 'Pestañas verticales',
      props: {
        orientation: 'vertical',
        items: [
          {
            id: 'tab1',
            label: 'General',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Configuración general'),
          },
          {
            id: 'tab2',
            label: 'Avanzado',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Configuración avanzada'),
          },
        ],
        children: React.createElement(Tabs, {
          orientation: 'vertical',
          items: [
            {
              id: 'tab1',
              label: 'General',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Configuración general'),
            },
            {
              id: 'tab2',
              label: 'Avanzado',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Configuración avanzada'),
            },
          ],
        }),
      },
    },
    {
      name: 'With Default Tab',
      description: 'Pestañas con pestaña por defecto',
      props: {
        defaultTab: 'tab2',
        items: [
          {
            id: 'tab1',
            label: 'Primera',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Primera pestaña'),
          },
          {
            id: 'tab2',
            label: 'Segunda',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Segunda pestaña (activa por defecto)'),
          },
        ],
        children: React.createElement(Tabs, {
          defaultTab: 'tab2',
          items: [
            {
              id: 'tab1',
              label: 'Primera',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Primera pestaña'),
            },
            {
              id: 'tab2',
              label: 'Segunda',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Segunda pestaña (activa por defecto)'),
            },
          ],
        }),
      },
    },
    {
      name: 'With Disabled Tab',
      description: 'Pestañas con pestaña deshabilitada',
      props: {
        items: [
          {
            id: 'tab1',
            label: 'Activa',
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Pestaña activa'),
          },
          {
            id: 'tab2',
            label: 'Deshabilitada',
            disabled: true,
            content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Pestaña deshabilitada'),
          },
        ],
        children: React.createElement(Tabs, {
          items: [
            {
              id: 'tab1',
              label: 'Activa',
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Pestaña activa'),
            },
            {
              id: 'tab2',
              label: 'Deshabilitada',
              disabled: true,
              content: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Pestaña deshabilitada'),
            },
          ],
        }),
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Tabs } from '@/components/ui/tabs/Tabs'

// Tabs horizontales
<Tabs
  items={[
    {
      id: 'tab1',
      label: 'Pestaña 1',
      content: <div>Contenido 1</div>,
    },
    {
      id: 'tab2',
      label: 'Pestaña 2',
      content: <div>Contenido 2</div>,
    },
  ]}
/>

// Tabs verticales
<Tabs
  orientation="vertical"
  items={[
    {
      id: 'tab1',
      label: 'General',
      content: <div>Configuración general</div>,
    },
  ]}
/>`,
    },
  ],
  useCases: [
    'Organización de contenido',
    'Navegación entre secciones',
    'Configuración de opciones',
    'Vistas múltiples',
  ],
}

