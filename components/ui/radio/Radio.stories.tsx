import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { RadioGroup } from './RadioGroup'

export const radioStory: ComponentStory = {
  id: 'radio',
  name: 'Radio',
  description: 'Botón de opción para selección única dentro de un grupo.',
  category: 'forms',
  tags: ['radio', 'form', 'selection', 'single'],
  props: [
    {
      name: 'name',
      type: 'string',
      description: 'Nombre del grupo de radio buttons',
      required: true,
    },
    {
      name: 'options',
      type: '{ value: string; label: string }[]',
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
      name: 'label',
      type: 'string',
      description: 'Etiqueta del grupo',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error a mostrar',
      required: false,
    },
    {
      name: 'orientation',
      type: 'horizontal | vertical',
      description: 'Orientación del grupo',
      default: 'vertical',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Vertical',
      description: 'Grupo de radio buttons vertical',
      props: {
        name: 'option',
        options: [
          { value: 'option1', label: 'Opción 1' },
          { value: 'option2', label: 'Opción 2' },
          { value: 'option3', label: 'Opción 3' },
        ],
        children: React.createElement(RadioGroup, {
          name: 'option',
          options: [
            { value: 'option1', label: 'Opción 1' },
            { value: 'option2', label: 'Opción 2' },
            { value: 'option3', label: 'Opción 3' },
          ],
        }),
      },
    },
    {
      name: 'With Label',
      description: 'Grupo con etiqueta',
      props: {
        name: 'preference',
        label: 'Preferencia',
        options: [
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Teléfono' },
          { value: 'sms', label: 'SMS' },
        ],
        children: React.createElement(RadioGroup, {
          name: 'preference',
          label: 'Preferencia',
          options: [
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Teléfono' },
            { value: 'sms', label: 'SMS' },
          ],
        }),
      },
    },
    {
      name: 'Horizontal',
      description: 'Grupo de radio buttons horizontal',
      props: {
        name: 'size',
        orientation: 'horizontal',
        options: [
          { value: 'small', label: 'Pequeño' },
          { value: 'medium', label: 'Mediano' },
          { value: 'large', label: 'Grande' },
        ],
        children: React.createElement(RadioGroup, {
          name: 'size',
          orientation: 'horizontal',
          options: [
            { value: 'small', label: 'Pequeño' },
            { value: 'medium', label: 'Mediano' },
            { value: 'large', label: 'Grande' },
          ],
        }),
      },
    },
    {
      name: 'With Default Value',
      description: 'Grupo con valor por defecto',
      props: {
        name: 'plan',
        value: 'pro',
        options: [
          { value: 'basic', label: 'Básico' },
          { value: 'pro', label: 'Pro' },
          { value: 'enterprise', label: 'Enterprise' },
        ],
        children: React.createElement(RadioGroup, {
          name: 'plan',
          value: 'pro',
          options: [
            { value: 'basic', label: 'Básico' },
            { value: 'pro', label: 'Pro' },
            { value: 'enterprise', label: 'Enterprise' },
          ],
        }),
      },
    },
    {
      name: 'Error',
      description: 'Grupo con error',
      props: {
        name: 'category',
        error: 'Debes seleccionar una categoría',
        options: [
          { value: 'cat1', label: 'Categoría 1' },
          { value: 'cat2', label: 'Categoría 2' },
        ],
        children: React.createElement(RadioGroup, {
          name: 'category',
          error: 'Debes seleccionar una categoría',
          options: [
            { value: 'cat1', label: 'Categoría 1' },
            { value: 'cat2', label: 'Categoría 2' },
          ],
        }),
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { RadioGroup } from '@/components/ui/radio/RadioGroup'

// Radio group básico
<RadioGroup
  name="option"
  options={[
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
  ]}
/>

// Radio group con etiqueta
<RadioGroup
  name="preference"
  label="Preferencia"
  options={[
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
  ]}
/>

// Radio group horizontal
<RadioGroup
  name="size"
  orientation="horizontal"
  options={[
    { value: 'small', label: 'Pequeño' },
    { value: 'large', label: 'Grande' },
  ]}
/>`,
    },
  ],
  useCases: [
    'Selección única en formularios',
    'Opciones de configuración',
    'Filtros y preferencias',
    'Selección de planes o categorías',
  ],
}

