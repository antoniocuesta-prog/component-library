import { ComponentStory } from '@/lib/component-registry'

export const dropdownStory: ComponentStory = {
  id: 'dropdown',
  name: 'Dropdown',
  description: 'Menú desplegable para seleccionar una opción de una lista.',
  category: 'navigation',
  tags: ['dropdown', 'menu', 'select', 'navigation'],
  props: [
    {
      name: 'options',
      type: '{ value: string; label: string; disabled?: boolean }[]',
      description: 'Array de opciones disponibles',
      required: true,
    },
    {
      name: 'value',
      type: 'string',
      description: 'Valor seleccionado',
      required: false,
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      description: 'Callback cuando cambia la selección',
      required: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Texto de placeholder',
      default: 'Selecciona una opción',
      required: false,
    },
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del dropdown',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error a mostrar',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el dropdown',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Dropdown básico',
      props: {
        options: [
          { value: 'option1', label: 'Opción 1' },
          { value: 'option2', label: 'Opción 2' },
          { value: 'option3', label: 'Opción 3' },
        ],
        placeholder: 'Selecciona una opción',
      },
    },
    {
      name: 'With Label',
      description: 'Dropdown con etiqueta',
      props: {
        label: 'Selecciona una opción',
        options: [
          { value: 'option1', label: 'Opción 1' },
          { value: 'option2', label: 'Opción 2' },
          { value: 'option3', label: 'Opción 3' },
        ],
      },
    },
    {
      name: 'With Selected Value',
      description: 'Dropdown con valor seleccionado',
      props: {
        label: 'País',
        value: 'es',
        options: [
          { value: 'es', label: 'España' },
          { value: 'mx', label: 'México' },
          { value: 'ar', label: 'Argentina' },
        ],
      },
    },
    {
      name: 'With Disabled Option',
      description: 'Dropdown con opción deshabilitada',
      props: {
        label: 'Estado',
        options: [
          { value: 'active', label: 'Activo' },
          { value: 'inactive', label: 'Inactivo' },
          { value: 'pending', label: 'Pendiente', disabled: true },
        ],
      },
    },
    {
      name: 'Error',
      description: 'Dropdown con error',
      props: {
        label: 'Categoría',
        error: 'Debes seleccionar una categoría',
        options: [
          { value: 'cat1', label: 'Categoría 1' },
          { value: 'cat2', label: 'Categoría 2' },
        ],
      },
    },
    {
      name: 'Disabled',
      description: 'Dropdown deshabilitado',
      props: {
        label: 'Campo deshabilitado',
        disabled: true,
        options: [
          { value: 'opt1', label: 'Opción 1' },
          { value: 'opt2', label: 'Opción 2' },
        ],
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Dropdown } from '@/components/ui/dropdown/Dropdown'

// Dropdown básico
<Dropdown
  options={[
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
  ]}
/>

// Dropdown con etiqueta
<Dropdown
  label="Selecciona una opción"
  options={[
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
  ]}
/>

// Dropdown con valor seleccionado
<Dropdown
  label="País"
  value="es"
  onChange={(value) => console.log(value)}
  options={[
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
  ]}
/>`,
    },
  ],
  useCases: [
    'Navegación en menús',
    'Selección de opciones',
    'Filtros y búsquedas',
    'Configuración de preferencias',
  ],
}

