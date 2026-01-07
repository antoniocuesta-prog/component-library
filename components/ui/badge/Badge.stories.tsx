import { ComponentStory } from '@/lib/component-registry'

export const badgeStory: ComponentStory = {
  id: 'badge',
  name: 'Badge',
  description: 'Componente de etiqueta para mostrar estados, categorías o información destacada.',
  category: 'essential',
  tags: ['badge', 'label', 'tag', 'status'],
  props: [
    {
      name: 'variant',
      type: 'default | secondary | success | destructive | outline | dot',
      description: 'Estilo visual del badge',
      default: 'default',
      required: false,
    },
    {
      name: 'size',
      type: 'sm | default | lg',
      description: 'Tamaño del badge',
      default: 'default',
      required: false,
    },
    {
      name: 'dot',
      type: 'boolean',
      description: 'Muestra un punto animado',
      default: 'false',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido del badge',
      required: true,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Badge por defecto',
      props: {
        children: 'Badge',
      },
    },
    {
      name: 'Secondary',
      description: 'Badge secundario',
      props: {
        variant: 'secondary',
        children: 'Secondary',
      },
    },
    {
      name: 'Success',
      description: 'Badge de éxito',
      props: {
        variant: 'success',
        children: 'Success',
      },
    },
    {
      name: 'Destructive',
      description: 'Badge destructivo',
      props: {
        variant: 'destructive',
        children: 'Destructive',
      },
    },
    {
      name: 'Outline',
      description: 'Badge con borde',
      props: {
        variant: 'outline',
        children: 'Outline',
      },
    },
    {
      name: 'Dot',
      description: 'Badge con punto animado',
      props: {
        variant: 'dot',
        children: 'Online',
        dot: true,
      },
    },
    {
      name: 'Small',
      description: 'Badge pequeño',
      props: {
        size: 'sm',
        children: 'Small',
      },
    },
    {
      name: 'Large',
      description: 'Badge grande',
      props: {
        size: 'lg',
        children: 'Large',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Badge } from '@/components/ui/badge/Badge'

// Badge básico
<Badge>Badge</Badge>

// Badge con variantes
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Badge con tamaños
<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>

// Badge con punto animado
<Badge variant="dot" dot>Online</Badge>`,
    },
  ],
  useCases: [
    'Indicadores de estado',
    'Categorías y etiquetas',
    'Contadores de notificaciones',
    'Indicadores de disponibilidad',
  ],
}

