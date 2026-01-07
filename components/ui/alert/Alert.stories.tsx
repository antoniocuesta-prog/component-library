import { ComponentStory } from '@/lib/component-registry'

export const alertStory: ComponentStory = {
  id: 'alert',
  name: 'Alert',
  description: 'Componente de alerta para mostrar mensajes importantes con diferentes variantes de color.',
  category: 'feedback',
  tags: ['alert', 'notification', 'message', 'feedback'],
  props: [
    {
      name: 'variant',
      type: 'success | error | warning | info',
      description: 'Tipo de alerta',
      default: 'info',
      required: false,
    },
    {
      name: 'title',
      type: 'string',
      description: 'Título de la alerta',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido de la alerta',
      required: true,
    },
    {
      name: 'dismissible',
      type: 'boolean',
      description: 'Permite cerrar la alerta',
      default: 'false',
      required: false,
    },
    {
      name: 'onDismiss',
      type: '() => void',
      description: 'Callback al cerrar la alerta',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Success',
      description: 'Alerta de éxito',
      props: {
        variant: 'success',
        title: 'Éxito',
        children: 'Operación completada correctamente',
      },
    },
    {
      name: 'Error',
      description: 'Alerta de error',
      props: {
        variant: 'error',
        title: 'Error',
        children: 'Ha ocurrido un error. Por favor, intenta de nuevo.',
      },
    },
    {
      name: 'Warning',
      description: 'Alerta de advertencia',
      props: {
        variant: 'warning',
        title: 'Advertencia',
        children: 'Por favor, revisa los datos ingresados.',
      },
    },
    {
      name: 'Info',
      description: 'Alerta informativa',
      props: {
        variant: 'info',
        title: 'Información',
        children: 'Este es un mensaje informativo.',
      },
    },
    {
      name: 'Simple',
      description: 'Alerta sin título',
      props: {
        variant: 'info',
        children: 'Este es un mensaje simple sin título.',
      },
    },
    {
      name: 'Dismissible',
      description: 'Alerta que se puede cerrar',
      props: {
        variant: 'info',
        title: 'Alerta cerrable',
        children: 'Puedes cerrar esta alerta haciendo clic en la X.',
        dismissible: true,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Alert } from '@/components/ui/alert/Alert'

// Alerta de éxito
<Alert variant="success" title="Éxito">
  Operación completada correctamente
</Alert>

// Alerta de error
<Alert variant="error" title="Error">
  Ha ocurrido un error
</Alert>

// Alerta de advertencia
<Alert variant="warning" title="Advertencia">
  Por favor, revisa los datos
</Alert>

// Alerta informativa
<Alert variant="info" title="Información">
  Este es un mensaje informativo
</Alert>

// Alerta simple sin título
<Alert variant="info">
  Mensaje simple
</Alert>

// Alerta cerrable
<Alert 
  variant="info" 
  title="Alerta cerrable"
  dismissible
  onDismiss={() => console.log('Cerrado')}
>
  Puedes cerrar esta alerta
</Alert>`,
    },
  ],
  useCases: [
    'Mostrar mensajes de éxito después de operaciones',
    'Alertar sobre errores en formularios',
    'Informar sobre cambios importantes',
    'Notificaciones temporales',
  ],
}

