import { ComponentStory } from '@/lib/component-registry'

export const avatarStory: ComponentStory = {
  id: 'avatar',
  name: 'Avatar',
  description: 'Componente para mostrar imágenes de perfil o iniciales de usuario.',
  category: 'layout',
  tags: ['avatar', 'profile', 'user', 'image'],
  props: [
    {
      name: 'src',
      type: 'string',
      description: 'URL de la imagen',
      required: false,
    },
    {
      name: 'alt',
      type: 'string',
      description: 'Texto alternativo de la imagen',
      required: false,
    },
    {
      name: 'name',
      type: 'string',
      description: 'Nombre del usuario (se usan iniciales si no hay imagen)',
      required: false,
    },
    {
      name: 'size',
      type: 'sm | md | lg | xl',
      description: 'Tamaño del avatar',
      default: 'md',
      required: false,
    },
  ],
  variants: [
    {
      name: 'With Image',
      description: 'Avatar con imagen',
      props: {
        src: 'https://i.pravatar.cc/150?img=1',
        alt: 'Usuario',
        name: 'John Doe',
      },
    },
    {
      name: 'With Initials',
      description: 'Avatar con iniciales',
      props: {
        name: 'John Doe',
      },
    },
    {
      name: 'Without Image or Name',
      description: 'Avatar sin imagen ni nombre',
      props: {},
    },
    {
      name: 'Small',
      description: 'Avatar pequeño',
      props: {
        name: 'JD',
        size: 'sm',
      },
    },
    {
      name: 'Large',
      description: 'Avatar grande',
      props: {
        name: 'John Doe',
        size: 'lg',
      },
    },
    {
      name: 'Extra Large',
      description: 'Avatar extra grande',
      props: {
        name: 'John Doe',
        size: 'xl',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Avatar } from '@/components/ui/avatar/Avatar'

// Avatar con imagen
<Avatar src="https://example.com/avatar.jpg" alt="Usuario" />

// Avatar con iniciales
<Avatar name="John Doe" />

// Avatar sin imagen ni nombre
<Avatar />

// Avatar con tamaño
<Avatar name="John Doe" size="lg" />`,
    },
  ],
  useCases: [
    'Perfiles de usuario',
    'Listas de miembros',
    'Comentarios y reseñas',
    'Información de contacto',
  ],
}

