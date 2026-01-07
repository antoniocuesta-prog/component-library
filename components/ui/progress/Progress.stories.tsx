import { ComponentStory } from '@/lib/component-registry'

export const progressStory: ComponentStory = {
  id: 'progress',
  name: 'Progress',
  description: 'Barra de progreso para mostrar el avance de una tarea o proceso.',
  category: 'feedback',
  tags: ['progress', 'bar', 'loading', 'percentage'],
  props: [
    {
      name: 'value',
      type: 'number',
      description: 'Valor actual del progreso',
      required: true,
    },
    {
      name: 'max',
      type: 'number',
      description: 'Valor máximo del progreso',
      default: '100',
      required: false,
    },
    {
      name: 'size',
      type: 'sm | md | lg',
      description: 'Tamaño de la barra',
      default: 'md',
      required: false,
    },
    {
      name: 'showLabel',
      type: 'boolean',
      description: 'Mostrar etiqueta con porcentaje',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: '25%',
      description: 'Progreso al 25%',
      props: {
        value: 25,
      },
    },
    {
      name: '50%',
      description: 'Progreso al 50%',
      props: {
        value: 50,
      },
    },
    {
      name: '75%',
      description: 'Progreso al 75%',
      props: {
        value: 75,
      },
    },
    {
      name: '100%',
      description: 'Progreso completo',
      props: {
        value: 100,
      },
    },
    {
      name: 'With Label',
      description: 'Progreso con etiqueta',
      props: {
        value: 60,
        showLabel: true,
      },
    },
    {
      name: 'Small',
      description: 'Barra pequeña',
      props: {
        value: 40,
        size: 'sm',
      },
    },
    {
      name: 'Large',
      description: 'Barra grande',
      props: {
        value: 80,
        size: 'lg',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Progress } from '@/components/ui/progress/Progress'

// Progress básico
<Progress value={50} />

// Progress con etiqueta
<Progress value={75} showLabel />

// Progress con tamaño
<Progress value={60} size="lg" />

// Progress con máximo personalizado
<Progress value={30} max={50} />`,
    },
  ],
  useCases: [
    'Carga de archivos',
    'Progreso de formularios',
    'Indicadores de proceso',
    'Estados de carga',
  ],
}

