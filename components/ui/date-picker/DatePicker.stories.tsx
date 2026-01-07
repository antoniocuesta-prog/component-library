import React from 'react'
import { ComponentStory } from '@/lib/component-registry'

export const datePickerStory: ComponentStory = {
  id: 'date-picker',
  name: 'Date Picker',
  description: 'Selector de fecha con calendario desplegable para elegir fechas de forma intuitiva.',
  category: 'forms',
  tags: ['date', 'picker', 'calendar', 'form'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del campo',
      required: false,
    },
    {
      name: 'value',
      type: 'Date',
      description: 'Fecha seleccionada',
      required: false,
    },
    {
      name: 'onChange',
      type: '(date: Date | null) => void',
      description: 'Callback al seleccionar fecha',
      required: false,
    },
    {
      name: 'minDate',
      type: 'Date',
      description: 'Fecha mínima permitida',
      required: false,
    },
    {
      name: 'maxDate',
      type: 'Date',
      description: 'Fecha máxima permitida',
      required: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Texto de placeholder',
      default: '"Seleccionar fecha"',
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
      description: 'Date picker básico',
      props: {
        label: 'Fecha de nacimiento',
      },
    },
    {
      name: 'With Value',
      description: 'Con fecha seleccionada (ver código para implementación)',
      props: {
        label: 'Fecha',
      },
    },
    {
      name: 'Min Date',
      description: 'Con fecha mínima (hoy) - ver código para implementación',
      props: {
        label: 'Fecha de inicio',
      },
    },
    {
      name: 'Date Range',
      description: 'Con rango de fechas - ver código para implementación',
      props: {
        label: 'Fecha del evento',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { DatePicker } from '@/components/ui/date-picker/DatePicker'
import { useState } from 'react'

function DatePickerExample() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <DatePicker
      label="Fecha de nacimiento"
      value={date || undefined}
      onChange={setDate}
    />
  )
}

// Con fecha mínima (hoy)
<DatePicker
  label="Fecha de inicio"
  minDate={new Date()}
  onChange={(date) => console.log(date)}
/>

// Con rango de fechas
<DatePicker
  label="Fecha del evento"
  minDate={new Date()}
  maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
/>`,
    },
  ],
  useCases: [
    'Fechas de nacimiento',
    'Filtros por rango de fechas',
    'Selección de fechas de eventos',
    'Formularios con fechas',
  ],
}

