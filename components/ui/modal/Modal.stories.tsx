import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Modal } from './Modal'

export const modalStory: ComponentStory = {
  id: 'modal',
  name: 'Modal',
  description: 'Ventana modal para mostrar contenido importante o solicitar confirmación.',
  category: 'feedback',
  tags: ['modal', 'dialog', 'overlay', 'popup'],
  props: [
    {
      name: 'isOpen',
      type: 'boolean',
      description: 'Controla si el modal está abierto',
      required: true,
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback para cerrar el modal',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      description: 'Título del modal',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido del modal',
      required: true,
    },
    {
      name: 'size',
      type: 'sm | md | lg | xl | full',
      description: 'Tamaño del modal',
      default: 'md',
      required: false,
    },
    {
      name: 'showCloseButton',
      type: 'boolean',
      description: 'Mostrar botón de cerrar',
      default: 'true',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Small',
      description: 'Modal pequeño',
      props: {
        isOpen: true,
        title: 'Modal Pequeño',
        size: 'sm',
        children: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Este es un modal pequeño.'),
      },
    },
    {
      name: 'Medium',
      description: 'Modal mediano (por defecto)',
      props: {
        isOpen: true,
        title: 'Modal Mediano',
        size: 'md',
        children: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Este es un modal mediano con contenido adicional.'),
      },
    },
    {
      name: 'Large',
      description: 'Modal grande',
      props: {
        isOpen: true,
        title: 'Modal Grande',
        size: 'lg',
        children: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Este es un modal grande con más espacio para contenido.'),
      },
    },
    {
      name: 'Extra Large',
      description: 'Modal extra grande',
      props: {
        isOpen: true,
        title: 'Modal Extra Grande',
        size: 'xl',
        children: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Este es un modal extra grande para contenido extenso.'),
      },
    },
    {
      name: 'Without Title',
      description: 'Modal sin título',
      props: {
        isOpen: true,
        size: 'md',
        children: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Modal sin título.'),
      },
    },
    {
      name: 'Without Close Button',
      description: 'Modal sin botón de cerrar',
      props: {
        isOpen: true,
        title: 'Modal Sin Cerrar',
        showCloseButton: false,
        children: React.createElement('div', { className: 'text-gray-600 dark:text-gray-400' }, 'Este modal no tiene botón de cerrar visible.'),
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Modal } from '@/components/ui/modal/Modal'
import { useState } from 'react'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Título del Modal"
        size="md"
      >
        <p>Contenido del modal</p>
      </Modal>
    </>
  )
}`,
    },
  ],
  useCases: [
    'Confirmación de acciones',
    'Formularios en overlay',
    'Visualización de detalles',
    'Alertas importantes',
  ],
}

