import React from 'react'
import { ComponentStory } from '@/lib/component-registry'

export const drawerStory: ComponentStory = {
  id: 'drawer',
  name: 'Drawer',
  description: 'Panel lateral que se desliza desde un lado de la pantalla. Útil para menús móviles, filtros y contenido secundario.',
  category: 'navigation',
  tags: ['drawer', 'sheet', 'sidebar', 'panel', 'mobile'],
  props: [
    {
      name: 'isOpen',
      type: 'boolean',
      description: 'Controla si el drawer está abierto',
      required: true,
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback al cerrar el drawer',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      description: 'Título del drawer',
      required: false,
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido del drawer',
      required: true,
    },
    {
      name: 'side',
      type: 'left | right | top | bottom',
      description: 'Lado desde donde se desliza',
      default: 'right',
      required: false,
    },
    {
      name: 'size',
      type: 'sm | md | lg | full',
      description: 'Tamaño del drawer',
      default: 'md',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Right',
      description: 'Drawer desde la derecha',
      props: {
        isOpen: true,
        title: 'Título del Drawer',
        side: 'right',
      },
    },
    {
      name: 'Left',
      description: 'Drawer desde la izquierda',
      props: {
        isOpen: true,
        title: 'Título del Drawer',
        side: 'left',
      },
    },
    {
      name: 'Bottom',
      description: 'Drawer desde abajo (móvil)',
      props: {
        isOpen: true,
        title: 'Título del Drawer',
        side: 'bottom',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { Drawer } from '@/components/ui/drawer/Drawer'
import { useState } from 'react'

function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Drawer
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Título del Drawer"
        side="right"
      >
        <div className="p-6">
          <p>Contenido del drawer</p>
        </div>
      </Drawer>
    </>
  )
}

// Drawer desde izquierda
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Menú"
  side="left"
  size="sm"
>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</Drawer>

// Drawer desde abajo (móvil)
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  side="bottom"
  size="lg"
>
  <div className="p-6">Contenido móvil</div>
</Drawer>`,
    },
  ],
  useCases: [
    'Menús laterales en móvil',
    'Paneles de filtros',
    'Carritos de compra',
    'Navegación secundaria',
  ],
}

