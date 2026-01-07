import { ComponentStory } from '@/lib/component-registry'

export const switchStory: ComponentStory = {
  id: 'switch',
  name: 'Switch',
  description: 'Componente de interruptor (toggle) para alternar entre dos estados.',
  category: 'forms',
  tags: ['switch', 'toggle', 'form', 'boolean'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del switch',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error a mostrar',
      required: false,
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'Estado del switch',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el switch',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Switch básico apagado',
      props: {
        label: 'Activar notificaciones',
      },
    },
    {
      name: 'Checked',
      description: 'Switch activado',
      props: {
        label: 'Activar notificaciones',
        checked: true,
      },
    },
    {
      name: 'Disabled',
      description: 'Switch deshabilitado',
      props: {
        label: 'Función no disponible',
        disabled: true,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Switch } from '@/components/ui/switch/Switch'

// Switch básico
<Switch label="Activar notificaciones" />

// Switch activado
<Switch label="Activar notificaciones" checked />

// Switch deshabilitado
<Switch label="Función no disponible" disabled />`,
    },
  ],
  useCases: [
    'Activar/desactivar funcionalidades',
    'Configuración de preferencias',
    'Modo oscuro/claro',
    'Notificaciones y alertas',
  ],
}
