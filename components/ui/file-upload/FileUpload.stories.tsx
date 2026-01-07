import React from 'react'
import { ComponentStory } from '@/lib/component-registry'
import { FileUpload } from './FileUpload'

export const fileUploadStory: ComponentStory = {
  id: 'file-upload',
  name: 'File Upload',
  description: 'Componente para subir archivos con soporte para drag & drop, preview de imágenes y validación de tamaño.',
  category: 'forms',
  tags: ['file', 'upload', 'drag-drop', 'image'],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Etiqueta del campo',
      required: false,
    },
    {
      name: 'accept',
      type: 'string',
      description: 'Tipos de archivo aceptados (ej: "image/*", ".pdf")',
      required: false,
    },
    {
      name: 'multiple',
      type: 'boolean',
      description: 'Permitir múltiples archivos',
      default: 'false',
      required: false,
    },
    {
      name: 'maxSize',
      type: 'number',
      description: 'Tamaño máximo en MB',
      required: false,
    },
    {
      name: 'onFilesChange',
      type: '(files: File[]) => void',
      description: 'Callback cuando cambian los archivos',
      required: false,
    },
    {
      name: 'error',
      type: 'string',
      description: 'Mensaje de error',
      required: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Deshabilita el componente',
      default: 'false',
      required: false,
    },
  ],
  variants: [
    {
      name: 'Default',
      description: 'File upload básico',
      props: {
        label: 'Subir archivos',
      },
    },
    {
      name: 'Images Only',
      description: 'Solo imágenes',
      props: {
        label: 'Subir imágenes',
        accept: 'image/*',
      },
    },
    {
      name: 'Multiple Files',
      description: 'Múltiples archivos',
      props: {
        label: 'Subir archivos',
        multiple: true,
      },
    },
    {
      name: 'With Max Size',
      description: 'Con límite de tamaño',
      props: {
        label: 'Subir documentos',
        accept: '.pdf,.doc,.docx',
        maxSize: 5,
      },
    },
  ],
  codeExamples: [
    {
      language: 'tsx',
      code: `import { FileUpload } from '@/components/ui/file-upload/FileUpload'
import { useState } from 'react'

function FileUploadExample() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileUpload
      label="Subir archivos"
      accept="image/*"
      multiple
      maxSize={5}
      onFilesChange={setFiles}
    />
  )
}

// Solo imágenes
<FileUpload
  label="Subir imágenes"
  accept="image/*"
/>

// Múltiples archivos con límite
<FileUpload
  label="Subir documentos"
  accept=".pdf,.doc,.docx"
  multiple
  maxSize={10}
  onFilesChange={(files) => console.log(files)}
/>`,
    },
  ],
  useCases: [
    'Subir imágenes de perfil',
    'Subir documentos y archivos',
    'Galerías de imágenes',
    'Formularios de envío de archivos',
  ],
}

