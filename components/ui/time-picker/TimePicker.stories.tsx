import React from 'react'
import { ComponentStory } from '@/lib/component-registry'

export const timePickerStory: ComponentStory = {
  id: 'time-picker',
  name: 'Time Picker',
  description: 'Selector de hora con formato 12h o 24h para elegir la hora del día.',
  category: 'forms',
  tags: ['time', 'picker', 'clock', 'form'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del campo',
      required: false,
    },
    {
      name: 'value',
      type: 'string',
      description: 'Hora seleccionada en formato "HH:MM"',
      required: false,
    },
    {
      name: 'onChange',
      type: '(time: string) => void',
      description: 'Callback al seleccionar hora',
      required: false,
    },
    {
      name: 'format24h',
      type: 'boolean',
      description: 'Usar formato 24 horas',
      default: 'true',
      required: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Texto de placeholder',
      default: '"00:00"',
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
      description: 'Time picker básico 24h',
      props: {
        label: 'Hora',
      },
    },
    {
      name: '12h Format',
      description: 'Formato 12 horas AM/PM',
      props: {
        label: 'Hora',
        format24h: false,
      },
    },
    {
      name: 'With Value',
      description: 'Con hora seleccionada',
      props: {
        label: 'Hora',
        value: '14:30',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { TimePicker } from '@/components/ui/time-picker/TimePicker'
import { useState } from 'react'

function TimePickerExample() {
  const [time, setTime] = useState<string>('')

  return (
    <TimePicker
      label="Hora"
      value={time}
      onChange={setTime}
    />
  )
}

// Formato 12 horas
<TimePicker
  label="Hora"
  format24h={false}
  onChange={(time) => console.log(time)}
/>

// Con valor inicial
<TimePicker
  label="Hora de reunión"
  value="14:30"
  onChange={(time) => console.log(time)}
/>`,
    },
  ],
  useCases: [
    'Selección de hora de reuniones',
    'Formularios de horarios',
    'Configuración de alarmas',
    'Reservas y citas',
  ],
}

