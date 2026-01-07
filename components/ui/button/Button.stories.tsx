import { ComponentStory } from '@/lib/component-registry'

export const buttonStory: ComponentStory = {
  id: 'button',
  name: 'Button',
  description: 'Botón versátil con múltiples variantes y tamaños. Soporta estados de carga y diferentes estilos.',
  category: 'essential',
  tags: ['button', 'click', 'action', 'interactive'],
  props: [
    {
      name: 'variant',
      type: 'default | secondary | outline | ghost | destructive',
      description: 'Estilo visual del botón',
      default: 'default',
      required: false,
    },
    {
      name: 'size',
      type: 'sm | default | lg',
      description: 'Tamaño del botón',
      default: 'default',
      required: false,
    },
    {
      name: 'loading',
      type: 'boolean',
      description: 'Muestra un spinner de carga',
      default: 'false',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el botón',
      default: 'false',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido del botón',
      required: true,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Botón principal con estilo por defecto',
      props: {
        children: 'Button',
      },
    },
    {
      name: 'Secondary',
      description: 'Botón secundario',
      props: {
        variant: 'secondary',
        children: 'Secondary',
      },
    },
    {
      name: 'Outline',
      description: 'Botón con borde',
      props: {
        variant: 'outline',
        children: 'Outline',
      },
    },
    {
      name: 'Ghost',
      description: 'Botón sin fondo',
      props: {
        variant: 'ghost',
        children: 'Ghost',
      },
    },
    {
      name: 'Destructive',
      description: 'Botón para acciones destructivas',
      props: {
        variant: 'destructive',
        children: 'Delete',
      },
    },
    {
      name: 'Loading',
      description: 'Botón en estado de carga',
      props: {
        loading: true,
        children: 'Loading...',
      },
    },
    {
      name: 'Disabled',
      description: 'Botón deshabilitado',
      props: {
        disabled: true,
        children: 'Disabled',
      },
    },
    {
      name: 'Small',
      description: 'Botón pequeño',
      props: {
        size: 'sm',
        children: 'Small',
      },
    },
    {
      name: 'Large',
      description: 'Botón grande',
      props: {
        size: 'lg',
        children: 'Large',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Button } from '@/components/ui/button/Button'

// Botón básico
<Button>Click me</Button>

// Botón con variantes
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Botón con tamaños
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>

// Botón con estados
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>`,
    },
  ],
  useCases: [
    'Acciones principales en formularios',
    'Navegación y call-to-actions',
    'Confirmación de acciones',
    'Cancelación de operaciones',
  ],
}

