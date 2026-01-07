export interface PropDefinition {
  name: string
  type: string
  description: string
  default?: string
  required?: boolean
}

export interface VariantExample {
  name: string
  description: string
  props?: Record<string, any>
}

export interface CodeExample {
  language: string
  code: string
}

export interface ComponentStory {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  props: PropDefinition[]
  variants: VariantExample[]
  codeExamples: CodeExample[]
  useCases: string[]
}

export interface ComponentCategory {
  id: string
  name: string
  description: string
  components: ComponentStory[]
}

// Importaciones dinámicas de componentes
export const componentRegistry: Record<string, () => Promise<any>> = {}

// Registro centralizado de componentes
export const categories: ComponentCategory[] = [
  {
    id: 'essential',
    name: 'Esenciales',
    description: 'Componentes básicos y más utilizados',
    components: []
  },
  {
    id: 'forms',
    name: 'Formularios',
    description: 'Componentes para formularios y entrada de datos',
    components: []
  },
  {
    id: 'feedback',
    name: 'Feedback',
    description: 'Componentes para mostrar mensajes y estados',
    components: []
  },
  {
    id: 'navigation',
    name: 'Navegación',
    description: 'Componentes de navegación y menús',
    components: []
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Componentes de estructura y diseño',
    components: []
  }
]

// Función para registrar un componente
export function registerComponent(component: ComponentStory) {
  const category = categories.find(cat => cat.id === component.category)
  if (category) {
    const existingIndex = category.components.findIndex(c => c.id === component.id)
    if (existingIndex >= 0) {
      category.components[existingIndex] = component
    } else {
      category.components.push(component)
    }
  }
}

// Función para obtener todos los componentes
export function getAllComponents(): ComponentStory[] {
  return categories.flatMap(category => category.components)
}

// Función para obtener un componente por ID
export function getComponentById(id: string): ComponentStory | undefined {
  return getAllComponents().find(comp => comp.id === id)
}

// Función para buscar componentes
export function searchComponents(query: string): ComponentStory[] {
  const lowerQuery = query.toLowerCase()
  return getAllComponents().filter(comp => 
    comp.name.toLowerCase().includes(lowerQuery) ||
    comp.description.toLowerCase().includes(lowerQuery) ||
    comp.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}

