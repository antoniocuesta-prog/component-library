import { ComponentStory } from '@/lib/component-registry'

export const inputStory: ComponentStory = {
  id: 'input',
  name: 'Input',
  description: 'Campo de entrada de texto con soporte para diferentes tipos, validación y estados.',
  category: 'forms',
  tags: ['input', 'form', 'text', 'validation'],
  props: [
    {
      name: 'type',
      type: 'string',
      description: 'Tipo de input (text, email, password, etc.)',
      default: 'text',
      required: false,
    },
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
      description: 'Deshabilita el input',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'Input básico',
      props: {
        placeholder: 'Ingresa tu nombre',
      },
    },
    {
      name: 'With Label',
      description: 'Input con etiqueta',
      props: {
        label: 'Nombre',
        placeholder: 'Ingresa tu nombre',
      },
    },
    {
      name: 'Email',
      description: 'Input para email',
      props: {
        type: 'email',
        label: 'Email',
        placeholder: 'ejemplo@correo.com',
      },
    },
    {
      name: 'Password',
      description: 'Input para contraseña',
      props: {
        type: 'password',
        label: 'Contraseña',
        placeholder: '••••••••',
      },
    },
    {
      name: 'Error',
      description: 'Input con error',
      props: {
        label: 'Email',
        placeholder: 'ejemplo@correo.com',
        error: 'El email no es válido',
      },
    },
    {
      name: 'Disabled',
      description: 'Input deshabilitado',
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
      code: `import { Input } from '@/components/ui/input/Input'

// Input básico
<Input placeholder="Ingresa tu nombre" />

// Input con etiqueta
<Input label="Nombre" placeholder="Ingresa tu nombre" />

// Input de email
<Input type="email" label="Email" placeholder="ejemplo@correo.com" />

// Input de contraseña
<Input type="password" label="Contraseña" placeholder="••••••••" />

// Input con error
<Input 
  label="Email" 
  placeholder="ejemplo@correo.com"
  error="El email no es válido"
/>

// Input deshabilitado
<Input label="Campo deshabilitado" disabled />`,
    },
  ],
  useCases: [
    'Formularios de contacto',
    'Inicio de sesión y registro',
    'Búsqueda de contenido',
    'Configuración de usuario',
  ],
}

