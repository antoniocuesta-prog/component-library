import React from 'react'
import { ComponentStory } from '@/lib/component-registry'

export const toastStory: ComponentStory = {
  id: 'toast',
  name: 'Toast',
  description: 'Notificaciones emergentes temporales que aparecen en una esquina y desaparecen automáticamente.',
  category: 'feedback',
  tags: ['toast', 'notification', 'alert', 'popup'],
  props: [
    {
      name: 'title',
      type: 'string',
      description: 'Título del toast',
      required: false,
    },
    {
      name: 'description',
      type: 'string',
      description: 'Descripción del mensaje',
      required: false,
    },
    {
      name: 'variant',
      type: 'success | error | warning | info',
      description: 'Tipo de toast',
      default: 'info',
      required: false,
    },
    {
      name: 'duration',
      type: 'number',
      description: 'Duración en milisegundos antes de cerrar',
      default: '3000',
      required: false,
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback al cerrar el toast',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Success',
      description: 'Toast de éxito',
      props: {
        title: 'Éxito',
        description: 'Operación completada correctamente',
        variant: 'success',
      },
    },
    {
      name: 'Error',
      description: 'Toast de error',
      props: {
        title: 'Error',
        description: 'Ha ocurrido un error',
        variant: 'error',
      },
    },
    {
      name: 'Warning',
      description: 'Toast de advertencia',
      props: {
        title: 'Advertencia',
        description: 'Por favor revisa esto',
        variant: 'warning',
      },
    },
    {
      name: 'Info',
      description: 'Toast informativo',
      props: {
        title: 'Info',
        description: 'Nueva actualización disponible',
        variant: 'info',
      },
    },
    {
      name: 'Interactive',
      description: 'Toast interactivo con múltiples (ver código para implementación)',
      props: {
        title: 'Toast Interactivo',
        description: 'Este toast requiere implementación con estado para mostrar múltiples toasts',
        variant: 'info',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Toast, ToastContainer } from '@/components/ui/toast/Toast'
import { useState } from 'react'

function ToastExample() {
  const [toasts, setToasts] = useState([])

  const showToast = (toast) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts([...toasts, { ...toast, id }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }

  return (
    <>
      <button onClick={() => showToast({ 
        title: 'Éxito', 
        description: 'Operación completada',
        variant: 'success' 
      })}>
        Mostrar Toast
      </button>
      <ToastContainer 
        toasts={toasts} 
        onClose={(id) => setToasts(prev => prev.filter(t => t.id !== id))} 
      />
    </>
  )
}

// Uso individual
<Toast 
  title="Éxito" 
  description="Operación completada" 
  variant="success" 
  onClose={() => {}}
/>`,
    },
  ],
  useCases: [
    'Confirmación de acciones exitosas',
    'Mensajes de error temporales',
    'Notificaciones de estado',
    'Feedback inmediato de operaciones',
  ],
}

