import { notFound } from 'next/navigation'
import { getComponentById } from '@/lib/component-registry'
import ComponentViewer from '@/components/catalog/ComponentViewer'
import '@/lib/init-components' // Inicializar componentes

interface PageProps {
  params: {
    category: string
    component: string
  }
}

export default async function ComponentPage({ params }: PageProps) {
  const componentId = params.component
  const component = getComponentById(componentId)

  if (!component) {
    notFound()
  }

  // Pasar solo el componentId, el ComponentViewer cargará el componente dinámicamente en el cliente
  return <ComponentViewer component={component} componentId={componentId} />
}

