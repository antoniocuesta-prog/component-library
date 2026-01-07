'use client'

import React, { useState } from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Slider } from './Slider'

export const sliderStory: ComponentStory = {
  id: 'slider',
  name: 'Slider',
  description: 'Barra deslizante para seleccionar un valor dentro de un rango. Útil para filtros, configuraciones y rangos numéricos.',
  category: 'forms',
  tags: ['slider', 'range', 'input', 'filter'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del slider',
      required: false,
    },
    {
      name: 'value',
      type: 'number',
      description: 'Valor actual del slider',
      required: false,
    },
    {
      name: 'min',
      type: 'number',
      description: 'Valor mínimo',
      default: '0',
      required: false,
    },
    {
      name: 'max',
      type: 'number',
      description: 'Valor máximo',
      default: '100',
      required: false,
    },
    {
      name: 'step',
      type: 'number',
      description: 'Incremento del valor',
      default: '1',
      required: false,
    },
    {
      name: 'showValue',
      type: 'boolean',
      description: 'Mostrar el valor actual',
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
      description: 'Slider básico',
      props: {
        label: 'Volumen',
      },
    },
    {
      name: 'With Value',
      description: 'Slider mostrando el valor',
      props: {
        label: 'Volumen',
        showValue: true,
        value: 50,
      },
    },
    {
      name: 'Range',
      description: 'Slider con rango personalizado',
      props: {
        label: 'Edad',
        min: 18,
        max: 65,
        value: 25,
        showValue: true,
      },
    },
    {
      name: 'Price',
      description: 'Slider para rango de precio',
      props: {
        label: 'Precio',
        min: 0,
        max: 1000,
        step: 10,
        value: 500,
        showValue: true,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Slider } from '@/components/ui/slider/Slider'
import { useState } from 'react'

function SliderExample() {
  const [value, setValue] = useState(50)

  return (
    <Slider
      label="Volumen"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      showValue
    />
  )
}

// Slider con rango personalizado
<Slider
  label="Edad"
  min={18}
  max={65}
  value={25}
  showValue
/>

// Slider para precio
<Slider
  label="Precio"
  min={0}
  max={1000}
  step={10}
  value={500}
  showValue
/>`,
    },
  ],
  useCases: [
    'Filtros de rango (precio, edad, etc.)',
    'Configuración de volumen y ajustes',
    'Selección de valores numéricos',
    'Rangos en formularios avanzados',
  ],
}

