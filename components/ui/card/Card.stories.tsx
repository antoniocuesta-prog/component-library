import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'

// Renderers para las variantes de Card
const BasicCard = () => (
  <Card>
    <CardContent className="p-6">
      <p>Contenido de la tarjeta</p>
    </CardContent>
  </Card>
)

const CardWithHeader = () => (
  <Card>
    <CardHeader>
      <CardTitle>Título de la tarjeta</CardTitle>
      <CardDescription>Descripción de la tarjeta</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Contenido de la tarjeta</p>
    </CardContent>
  </Card>
)

const CompleteCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Título</CardTitle>
      <CardDescription>Descripción</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Contenido principal de la tarjeta</p>
    </CardContent>
    <CardFooter>
      <p className="text-sm text-gray-500 dark:text-gray-400">Footer</p>
    </CardFooter>
  </Card>
)

export const cardStory: ComponentStory = {
  id: 'card',
  name: 'Card',
  description: 'Componente de tarjeta para agrupar contenido relacionado con header, body y footer opcionales.',
  category: 'layout',
  tags: ['card', 'container', 'layout', 'content'],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Contenido de la tarjeta',
      required: true,
    },
    {
      name: 'className',
      type: 'string',
      description: 'Clases CSS adicionales',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Basic',
      description: 'Card básica con contenido simple',
      props: {
        children: <BasicCard />,
      },
    },
    {
      name: 'With Header',
      description: 'Card con header',
      props: {
        children: <CardWithHeader />,
      },
    },
    {
      name: 'Complete',
      description: 'Card completa con header, contenido y footer',
      props: {
        children: <CompleteCard />,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card/Card'

// Card básica
<Card>
  <CardContent className="p-6">
    <p>Contenido de la tarjeta</p>
  </CardContent>
</Card>

// Card con header
<Card>
  <CardHeader>
    <CardTitle>Título de la tarjeta</CardTitle>
    <CardDescription>Descripción de la tarjeta</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenido de la tarjeta</p>
  </CardContent>
</Card>

// Card completa
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenido principal</p>
  </CardContent>
  <CardFooter>
    <p className="text-sm text-gray-500">Footer</p>
  </CardFooter>
</Card>`,
    },
  ],
  useCases: [
    'Mostrar información agrupada',
    'Tarjetas de productos o servicios',
    'Dashboard con métricas',
    'Perfiles de usuario',
  ],
}

