import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Tooltip } from './Tooltip'
import { Button } from '@/components/ui/button/Button'

export const tooltipStory: ComponentStory = {
  id: 'tooltip',
  name: 'Tooltip',
  description: 'Información contextual que aparece al pasar el mouse sobre un elemento.',
  category: 'feedback',
  tags: ['tooltip', 'hover', 'info', 'help'],
  props: [
    {
      name: 'content',
      type: 'string',
      description: 'Contenido del tooltip',
      required: true,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Elemento sobre el que aparece el tooltip',
      required: true,
    },
    {
      name: 'position',
      type: 'top | bottom | left | right',
      description: 'Posición del tooltip',
      default: 'top',
      required: false,
    },
    {
      name: 'delay',
      type: 'number',
      description: 'Delay en milisegundos antes de mostrar el tooltip',
      default: '200',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Top',
      description: 'Tooltip arriba',
      props: {
        content: 'Este es un tooltip',
        position: 'top',
        children: React.createElement(Button, { variant: 'outline' }, 'Hover me'),
      },
    },
    {
      name: 'Bottom',
      description: 'Tooltip abajo',
      props: {
        content: 'Tooltip en la parte inferior',
        position: 'bottom',
        children: React.createElement(Button, { variant: 'outline' }, 'Hover me'),
      },
    },
    {
      name: 'Left',
      description: 'Tooltip a la izquierda',
      props: {
        content: 'Tooltip a la izquierda',
        position: 'left',
        children: React.createElement(Button, { variant: 'outline' }, 'Hover me'),
      },
    },
    {
      name: 'Right',
      description: 'Tooltip a la derecha',
      props: {
        content: 'Tooltip a la derecha',
        position: 'right',
        children: React.createElement(Button, { variant: 'outline' }, 'Hover me'),
      },
    },
    {
      name: 'With Delay',
      description: 'Tooltip con delay',
      props: {
        content: 'Este tooltip aparece después de 500ms',
        delay: 500,
        children: React.createElement(Button, { variant: 'outline' }, 'Hover me (delay)'),
      },
    },
    {
      name: 'Long Content',
      description: 'Tooltip con contenido largo',
      props: {
        content: 'Este es un tooltip con contenido más largo que muestra información adicional',
        children: React.createElement(Button, { variant: 'outline' }, 'Hover me'),
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Tooltip } from '@/components/ui/tooltip/Tooltip'
import { Button } from '@/components/ui/button/Button'

// Tooltip básico
<Tooltip content="Este es un tooltip">
  <Button>Hover me</Button>
</Tooltip>

// Tooltip con posición
<Tooltip content="Tooltip abajo" position="bottom">
  <Button>Hover me</Button>
</Tooltip>

// Tooltip con delay
<Tooltip content="Aparece después de 500ms" delay={500}>
  <Button>Hover me</Button>
</Tooltip>`,
    },
  ],
  useCases: [
    'Información adicional en iconos',
    'Ayuda contextual',
    'Descripciones de acciones',
    'Información de validación',
  ],
}

