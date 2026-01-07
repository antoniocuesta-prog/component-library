import { ComponentStory } from '@/lib/component-registry'

export const textareaStory: ComponentStory = {
  id: 'textarea',
  name: 'Textarea',
  description: 'Campo de texto multilínea para entradas de texto largas con soporte para validación.',
  category: 'forms',
  tags: ['textarea', 'form', 'text', 'multiline', 'validation'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del campo',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error a mostrar',
      required: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Texto de placeholder',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el textarea',
      default: 'false',
      required: false,
    },
    {
      name: 'rows',
      type: 'number',
      description: 'Número de filas visibles',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Textarea básico',
      props: {
        placeholder: 'Escribe tu mensaje aquí...',
      },
    },
    {
      name: 'With Label',
      description: 'Textarea con etiqueta',
      props: {
        label: 'Mensaje',
        placeholder: 'Escribe tu mensaje aquí...',
      },
    },
    {
      name: 'With Rows',
      description: 'Textarea con filas específicas',
      props: {
        label: 'Comentario',
        placeholder: 'Escribe tu comentario...',
        rows: 5,
      },
    },
    {
      name: 'Error',
      description: 'Textarea con error',
      props: {
        label: 'Descripción',
        placeholder: 'Describe el problema...',
        error: 'La descripción es obligatoria',
      },
    },
    {
      name: 'Disabled',
      description: 'Textarea deshabilitado',
      props: {
        label: 'Campo deshabilitado',
        placeholder: 'No disponible',
        disabled: true,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Textarea } from '@/components/ui/textarea/Textarea'

// Textarea básico
<Textarea placeholder="Escribe tu mensaje aquí..." />

// Textarea con etiqueta
<Textarea label="Mensaje" placeholder="Escribe tu mensaje aquí..." />

// Textarea con filas específicas
<Textarea label="Comentario" rows={5} placeholder="Escribe tu comentario..." />

// Textarea con error
<Textarea 
  label="Descripción" 
  placeholder="Describe el problema..."
  error="La descripción es obligatoria"
/>

// Textarea deshabilitado
<Textarea label="Campo deshabilitado" disabled />`,
    },
  ],
  useCases: [
    'Formularios de contacto',
    'Comentarios y retroalimentación',
    'Descripciones y notas',
    'Campos de texto largo',
  ],
}

