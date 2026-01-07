import React from 'react'
import { ComponentStory } from '@/lib/component-registry'

export const autocompleteStory: ComponentStory = {
  id: 'autocomplete',
  name: 'Autocomplete',
  description: 'Campo de búsqueda con sugerencias desplegables. Permite buscar y seleccionar entre múltiples opciones.',
  category: 'forms',
  tags: ['autocomplete', 'combobox', 'search', 'select'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del campo',
      required: false,
    },
    {
      name: 'options',
      type: 'Array<{value: string, label: string}>',
      description: 'Opciones disponibles',
      required: true,
    },
    {
      name: 'value',
      type: 'string',
      description: 'Valor seleccionado (solo single select)',
      required: false,
    },
    {
      name: 'onChange',
      type: '(value: string) => void',
      description: 'Callback al cambiar el valor',
      required: false,
    },
    {
      name: 'onSelect',
      type: '(option: AutocompleteOption) => void',
      description: 'Callback al seleccionar una opción',
      required: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Texto de placeholder',
      default: '"Buscar o seleccionar..."',
      required: false,
    },
    {
      name: 'searchable',
      type: 'boolean',
      description: 'Permitir búsqueda',
      default: 'true',
      required: false,
    },
    {
      name: 'multiple',
      type: 'boolean',
      description: 'Permitir selección múltiple',
      default: 'false',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el componente',
      default: 'false',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Autocomplete básico',
      props: {
        label: 'Seleccionar opción',
        options: [
          { value: '1', label: 'Opción 1' },
          { value: '2', label: 'Opción 2' },
          { value: '3', label: 'Opción 3' },
          { value: '4', label: 'Opción 4' },
          { value: '5', label: 'Opción 5' },
        ],
        placeholder: 'Buscar opción...',
      },
    },
    {
      name: 'Multiple',
      description: 'Selección múltiple',
      props: {
        label: 'Seleccionar opciones',
        options: [
          { value: '1', label: 'Opción 1' },
          { value: '2', label: 'Opción 2' },
          { value: '3', label: 'Opción 3' },
          { value: '4', label: 'Opción 4' },
          { value: '5', label: 'Opción 5' },
        ],
        multiple: true,
        placeholder: 'Buscar opciones...',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Autocomplete } from '@/components/ui/autocomplete/Autocomplete'
import { useState } from 'react'

const options = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3' },
]

function AutocompleteExample() {
  const [value, setValue] = useState<string>('')

  return (
    <Autocomplete
      label="Seleccionar opción"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Buscar opción..."
    />
  )
}

// Selección múltiple
<Autocomplete
  label="Seleccionar opciones"
  options={options}
  multiple
  onSelect={(option) => console.log(option)}
/>

// Sin búsqueda
<Autocomplete
  label="Seleccionar"
  options={options}
  searchable={false}
/>`,
    },
  ],
  useCases: [
    'Búsqueda de ciudades o países',
    'Selector de usuarios con búsqueda',
    'Filtros con sugerencias',
    'Selección múltiple de tags',
  ],
}

