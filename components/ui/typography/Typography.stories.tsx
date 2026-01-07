import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Typography } from './Typography'

export const typographyStory: ComponentStory = {
  id: 'typography',
  name: 'Typography',
  description: 'Sistema de tipografía para títulos, párrafos y texto destacado.',
  category: 'layout',
  tags: ['typography', 'text', 'heading', 'paragraph'],
  props: [
    {
      name: 'variant',
      type: 'h1 | h2 | h3 | h4 | h5 | h6 | p | span | small | strong | em | link',
      description: 'Variante tipográfica',
      default: 'p',
      required: false,
    },
    {
      name: 'as',
      type: 'keyof JSX.IntrinsicElements',
      description: 'Elemento HTML a renderizar',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido del texto',
      required: true,
    },
  ],
  variants: [
    {
      name: 'H1',
      description: 'Título principal',
      props: {
        variant: 'h1',
        children: 'Título H1',
      },
    },
    {
      name: 'H2',
      description: 'Subtítulo',
      props: {
        variant: 'h2',
        children: 'Título H2',
      },
    },
    {
      name: 'H3',
      description: 'Título de sección',
      props: {
        variant: 'h3',
        children: 'Título H3',
      },
    },
    {
      name: 'Paragraph',
      description: 'Párrafo',
      props: {
        variant: 'p',
        children: 'Este es un párrafo de ejemplo con texto normal.',
      },
    },
    {
      name: 'Small',
      description: 'Texto pequeño',
      props: {
        variant: 'small',
        children: 'Texto pequeño',
      },
    },
    {
      name: 'Strong',
      description: 'Texto en negrita',
      props: {
        variant: 'strong',
        children: 'Texto en negrita',
      },
    },
    {
      name: 'Emphasis',
      description: 'Texto en cursiva',
      props: {
        variant: 'em',
        children: 'Texto en cursiva',
      },
    },
    {
      name: 'Link',
      description: 'Enlace',
      props: {
        variant: 'link',
        children: 'Este es un enlace',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Typography } from '@/components/ui/typography/Typography'

// Títulos
<Typography variant="h1">Título Principal</Typography>
<Typography variant="h2">Subtítulo</Typography>

// Párrafo
<Typography variant="p">
  Este es un párrafo de ejemplo.
</Typography>

// Texto pequeño
<Typography variant="small">Texto pequeño</Typography>

// Enlace
<Typography variant="link">Haz clic aquí</Typography>`,
    },
  ],
  useCases: [
    'Títulos y encabezados',
    'Párrafos de texto',
    'Texto destacado',
    'Enlaces y referencias',
  ],
}

