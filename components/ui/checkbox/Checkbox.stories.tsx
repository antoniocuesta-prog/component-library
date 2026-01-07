import { ComponentStory } from '@/lib/component-registry'

export const checkboxStory: ComponentStory = {
  id: 'checkbox',
  name: 'Checkbox',
  description: 'Componente de casilla de verificación para selecciones booleanas.',
  category: 'forms',
  tags: ['checkbox', 'form', 'boolean', 'selection'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del checkbox',
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
      description: 'Estado del checkbox',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el checkbox',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Checkbox básico',
      props: {
        label: 'Acepto los términos y condiciones',
      },
    },
    {
      name: 'Checked',
      description: 'Checkbox marcado',
      props: {
        label: 'Acepto los términos y condiciones',
        checked: true,
      },
    },
    {
      name: 'Error',
      description: 'Checkbox con error',
      props: {
        label: 'Debes aceptar los términos',
        error: 'Este campo es obligatorio',
      },
    },
    {
      name: 'Disabled',
      description: 'Checkbox deshabilitado',
      props: {
        label: 'Opción no disponible',
        disabled: true,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Checkbox } from '@/components/ui/checkbox/Checkbox'

// Checkbox básico
<Checkbox label="Acepto los términos y condiciones" />

// Checkbox marcado
<Checkbox label="Acepto los términos" checked />

// Checkbox con error
<Checkbox 
  label="Debes aceptar los términos"
  error="Este campo es obligatorio"
/>

// Checkbox deshabilitado
<Checkbox label="Opción no disponible" disabled />`,
    },
  ],
  useCases: [
    'Aceptación de términos y condiciones',
    'Selección múltiple de opciones',
    'Filtros y preferencias',
    'Configuración de notificaciones',
  ],
}
