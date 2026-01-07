import { ComponentStory } from '@/lib/component-registry'

export const spinnerStory: ComponentStory = {
  id: 'spinner',
  name: 'Spinner',
  description: 'Componente de carga con animación circular para indicar procesos en curso.',
  category: 'feedback',
  tags: ['spinner', 'loading', 'loader', 'feedback'],
  props: [
    {
      name: 'variant',
      type: 'default | primary | secondary | success | destructive',
      description: 'Color del spinner',
      default: 'default',
      required: false,
    },
    {
      name: 'size',
      type: 'sm | default | lg',
      description: 'Tamaño del spinner',
      default: 'default',
      required: false,
    },
    {
      name: 'label',
      type: 'string',
      description: 'Texto a mostrar debajo del spinner',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Spinner básico',
      props: {},
    },
    {
      name: 'Small',
      description: 'Spinner pequeño',
      props: {
        size: 'sm',
      },
    },
    {
      name: 'Large',
      description: 'Spinner grande',
      props: {
        size: 'lg',
      },
    },
    {
      name: 'With Label',
      description: 'Spinner con etiqueta',
      props: {
        label: 'Cargando...',
      },
    },
    {
      name: 'Success',
      description: 'Spinner verde',
      props: {
        variant: 'success',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Spinner } from '@/components/ui/spinner/Spinner'

// Spinner básico
<Spinner />

// Spinner con tamaños
<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />

// Spinner con etiqueta
<Spinner label="Cargando..." />

// Spinner con variantes
<Spinner variant="success" />
<Spinner variant="destructive" />`,
    },
  ],
  useCases: [
    'Indicar carga de datos',
    'Procesamiento de formularios',
    'Carga de contenido',
    'Estados de carga generales',
  ],
}
