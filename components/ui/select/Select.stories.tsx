import { ComponentStory } from '@/lib/component-registry'

export const selectStory: ComponentStory = {
  id: 'select',
  name: 'Select',
  description: 'Componente de selección desplegable para elegir entre múltiples opciones.',
  category: 'forms',
  tags: ['select', 'dropdown', 'form', 'choice'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del campo',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error a mostrar',
      required: false,
    },
    {
      name: 'options',
      type: 'Array<{value: string, label: string}>',
      description: 'Opciones disponibles para seleccionar',
      required: true,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el select',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Select básico',
      props: {
        options: [
          { value: '1', label: 'Opción 1' },
          { value: '2', label: 'Opción 2' },
          { value: '3', label: 'Opción 3' },
        ],
      },
    },
    {
      name: 'With Label',
      description: 'Select con etiqueta',
      props: {
        label: 'Selecciona una opción',
        options: [
          { value: '1', label: 'Opción 1' },
          { value: '2', label: 'Opción 2' },
          { value: '3', label: 'Opción 3' },
        ],
      },
    },
    {
      name: 'Error',
      description: 'Select con error',
      props: {
        label: 'Selecciona una opción',
        error: 'Debes seleccionar una opción',
        options: [
          { value: '1', label: 'Opción 1' },
          { value: '2', label: 'Opción 2' },
          { value: '3', label: 'Opción 3' },
        ],
      },
    },
    {
      name: 'Disabled',
      description: 'Select deshabilitado',
      props: {
        label: 'Campo deshabilitado',
        disabled: true,
        options: [
          { value: '1', label: 'Opción 1' },
          { value: '2', label: 'Opción 2' },
        ],
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Select } from '@/components/ui/select/Select'

// Select básico
<Select 
  options={[
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
    { value: '3', label: 'Opción 3' },
  ]}
/>

// Select con etiqueta
<Select 
  label="Selecciona una opción"
  options={[
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
  ]}
/>

// Select con error
<Select 
  label="Selecciona una opción"
  error="Debes seleccionar una opción"
  options={[
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
  ]}
/>`,
    },
  ],
  useCases: [
    'Formularios con múltiples opciones',
    'Selección de categorías',
    'Filtros y búsquedas',
    'Configuración de preferencias',
  ],
}
