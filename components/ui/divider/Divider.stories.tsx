import { ComponentStory } from '@/lib/component-registry'

export const dividerStory: ComponentStory = {
  id: 'divider',
  name: 'Divider',
  description: 'Separador visual para dividir contenido.',
  category: 'layout',
  tags: ['divider', 'separator', 'line', 'layout'],
  props: [
    {
      name: 'orientation',
      type: 'horizontal | vertical',
      description: 'Orientación del divisor',
      default: 'horizontal',
      required: false,
    },
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta opcional en el centro',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Horizontal',
      description: 'Divisor horizontal',
      props: {
        orientation: 'horizontal',
      },
    },
    {
      name: 'With Label',
      description: 'Divisor con etiqueta',
      props: {
        orientation: 'horizontal',
        label: 'O',
      },
    },
    {
      name: 'Vertical',
      description: 'Divisor vertical',
      props: {
        orientation: 'vertical',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Divider } from '@/components/ui/divider/Divider'

// Divisor horizontal
<Divider />

// Divisor con etiqueta
<Divider label="O" />

// Divisor vertical
<div className="flex items-center h-20">
  <div>Izquierda</div>
  <Divider orientation="vertical" />
  <div>Derecha</div>
</div>`,
    },
  ],
  useCases: [
    'Separar secciones de contenido',
    'Dividir elementos en listas',
    'Separar opciones en menús',
    'Organizar layout',
  ],
}

