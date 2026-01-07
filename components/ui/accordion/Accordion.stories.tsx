import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Accordion } from './Accordion'

export const accordionStory: ComponentStory = {
  id: 'accordion',
  name: 'Accordion',
  description: 'Componente de acordeón para mostrar contenido expandible y colapsable.',
  category: 'layout',
  tags: ['accordion', 'collapse', 'expand', 'faq'],
  props: [
    {
      name: 'items',
      type: '{ id: string; title: string; content: ReactNode; defaultOpen?: boolean }[]',
      description: 'Array de elementos del acordeón',
      required: true,
    },
    {
      name: 'allowMultiple',
      type: 'boolean',
      description: 'Permitir múltiples elementos abiertos',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Single Open',
      description: 'Acordeón con un solo elemento abierto',
      props: {
        items: [
          {
            id: 'item1',
            title: '¿Qué es esto?',
            content: React.createElement('p', null, 'Esta es la respuesta a la primera pregunta.'),
          },
          {
            id: 'item2',
            title: '¿Cómo funciona?',
            content: React.createElement('p', null, 'Esta es la respuesta a la segunda pregunta.'),
          },
          {
            id: 'item3',
            title: '¿Dónde puedo obtener más información?',
            content: React.createElement('p', null, 'Esta es la respuesta a la tercera pregunta.'),
          },
        ],
        children: React.createElement(Accordion, {
          items: [
            {
              id: 'item1',
              title: '¿Qué es esto?',
              content: React.createElement('p', null, 'Esta es la respuesta a la primera pregunta.'),
            },
            {
              id: 'item2',
              title: '¿Cómo funciona?',
              content: React.createElement('p', null, 'Esta es la respuesta a la segunda pregunta.'),
            },
            {
              id: 'item3',
              title: '¿Dónde puedo obtener más información?',
              content: React.createElement('p', null, 'Esta es la respuesta a la tercera pregunta.'),
            },
          ],
        }),
      },
    },
    {
      name: 'Multiple Open',
      description: 'Acordeón con múltiples elementos abiertos',
      props: {
        allowMultiple: true,
        items: [
          {
            id: 'item1',
            title: 'Sección 1',
            content: React.createElement('p', null, 'Contenido de la sección 1.'),
          },
          {
            id: 'item2',
            title: 'Sección 2',
            content: React.createElement('p', null, 'Contenido de la sección 2.'),
          },
        ],
        children: React.createElement(Accordion, {
          allowMultiple: true,
          items: [
            {
              id: 'item1',
              title: 'Sección 1',
              content: React.createElement('p', null, 'Contenido de la sección 1.'),
            },
            {
              id: 'item2',
              title: 'Sección 2',
              content: React.createElement('p', null, 'Contenido de la sección 2.'),
            },
          ],
        }),
      },
    },
    {
      name: 'With Default Open',
      description: 'Acordeón con elemento abierto por defecto',
      props: {
        items: [
          {
            id: 'item1',
            title: 'Sección cerrada',
            content: React.createElement('p', null, 'Esta sección está cerrada.'),
          },
          {
            id: 'item2',
            title: 'Sección abierta',
            defaultOpen: true,
            content: React.createElement('p', null, 'Esta sección está abierta por defecto.'),
          },
        ],
        children: React.createElement(Accordion, {
          items: [
            {
              id: 'item1',
              title: 'Sección cerrada',
              content: React.createElement('p', null, 'Esta sección está cerrada.'),
            },
            {
              id: 'item2',
              title: 'Sección abierta',
              defaultOpen: true,
              content: React.createElement('p', null, 'Esta sección está abierta por defecto.'),
            },
          ],
        }),
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Accordion } from '@/components/ui/accordion/Accordion'

// Acordeón básico
<Accordion
  items={[
    {
      id: 'item1',
      title: '¿Qué es esto?',
      content: <p>Esta es la respuesta.</p>,
    },
    {
      id: 'item2',
      title: '¿Cómo funciona?',
      content: <p>Esta es otra respuesta.</p>,
    },
  ]}
/>

// Acordeón con múltiples abiertos
<Accordion
  allowMultiple
  items={[...]}
/>`,
    },
  ],
  useCases: [
    'Preguntas frecuentes (FAQ)',
    'Contenido colapsable',
    'Secciones de ayuda',
    'Organización de información',
  ],
}

