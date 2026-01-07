# Catálogo de Componentes Web

Catálogo interactivo de componentes reutilizables construido con Next.js 14, TypeScript y Tailwind CSS.

## Características

- 📚 Catálogo interactivo de componentes
- 🔍 Búsqueda y filtrado de componentes por nombre, categoría y tags
- 💻 Visualización de código con syntax highlighting (Prism.js)
- 🎨 Preview en tiempo real de variantes
- 📖 Documentación completa de props y casos de uso
- 🎯 Sistema de registro centralizado de componentes
- ⚙️ Editor de props interactivo para modificar componentes en tiempo real
- 📥 Exportación de código de componentes como archivos
- 🌓 Dark mode con persistencia
- 📱 Diseño responsive
- ♿ Optimizaciones de accesibilidad (WCAG básico)
- 🎭 Animaciones sutiles y transiciones suaves

## Estructura del Proyecto

```
component-library/
├── app/                          # Rutas de Next.js App Router
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página de inicio
│   └── components/              # Páginas dinámicas de componentes
├── components/
│   ├── ui/                      # Componentes UI reutilizables
│   │   ├── button/
│   │   ├── input/
│   │   ├── alert/
│   │   ├── card/
│   │   └── badge/
│   └── catalog/                 # Componentes del catálogo
│       ├── Sidebar.tsx
│       ├── ComponentViewer.tsx
│       └── CodeBlock.tsx
├── lib/
│   ├── component-registry.ts    # Sistema de registro
│   └── utils.ts                 # Utilidades
└── data/                        # Metadata de componentes
```

## Componentes Disponibles

### Esenciales (Alta Prioridad)
- **Button**: Botón versátil con múltiples variantes (Primary, Secondary, Outline, Ghost, Disabled, Loading)
- **Input**: Campo de entrada de texto con validación (text, email, password)
- **Alert**: Componente de alerta con diferentes variantes (Success, Error, Warning, Info)
- **Card**: Tarjeta para agrupar contenido con diferentes layouts
- **Badge**: Etiqueta para estados y categorías con variantes de color y tamaño

### Formularios
- **Textarea**: Campo de texto multilínea con validación
- **Select**: Campo de selección desplegable
- **Checkbox**: Casilla de verificación para selección múltiple
- **Radio**: Botón de opción para selección única (con RadioGroup)
- **Switch**: Interruptor para activar/desactivar opciones

### Feedback
- **Modal**: Ventana modal para mostrar contenido importante
- **Tooltip**: Información contextual al pasar el mouse
- **Spinner**: Indicador de carga
- **Progress**: Barra de progreso para mostrar avance

### Navegación
- **Dropdown**: Menú desplegable para seleccionar opciones
- **Tabs**: Componente de pestañas horizontal y vertical
- **Breadcrumb**: Navegación jerárquica
- **Pagination**: Componente de paginación

### Layout
- **Avatar**: Componente para mostrar imágenes de perfil o iniciales
- **Divider**: Separador visual horizontal y vertical
- **Table**: Tabla para mostrar datos estructurados
- **Accordion**: Componente de acordeón para contenido expandible
- **Typography**: Sistema de tipografía (h1-h6, p, span, etc.)

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:3000
```

## Agregar Nuevos Componentes

1. Crear el componente en `components/ui/[nombre]/[Nombre].tsx`
2. Crear el archivo de stories en `components/ui/[nombre]/[Nombre].stories.tsx`
3. Registrar el componente en `app/components/[category]/[component]/page.tsx`
4. Agregar el componente al mapa de importación dinámica

### Ejemplo de Story

```typescript
import { ComponentStory } from '@/lib/component-registry'

export const miComponentStory: ComponentStory = {
  id: 'mi-component',
  name: 'Mi Componente',
  description: 'Descripción del componente',
  category: 'essential', // o 'forms', 'feedback', 'navigation', 'layout'
  tags: ['tag1', 'tag2'],
  props: [
    {
      name: 'prop1',
      type: 'string',
      description: 'Descripción de la prop',
      default: 'valor por defecto',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Variante 1',
      description: 'Descripción de la variante',
      props: {
        prop1: 'valor',
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `<MiComponente prop1="valor" />`,
    },
  ],
  useCases: [
    'Caso de uso 1',
    'Caso de uso 2',
  ],
}
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Tecnologías Utilizadas

- **Next.js 14**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **Prism.js**: Syntax highlighting para código
- **React Syntax Highlighter**: Componente de React para highlighting
- **Lucide React**: Iconos
- **class-variance-authority**: Gestión de variantes de componentes

## Notas

Este es un catálogo interno de referencia de componentes. No incluye optimizaciones SEO ni características especiales para producción pública.

