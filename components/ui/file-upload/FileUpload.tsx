'use client'

import * as React from "react"
import { Upload, X, File, Image } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FileUploadProps {
  label?: string
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
  onFilesChange?: (files: File[]) => void
  error?: string
  disabled?: boolean
}

interface FileItem {
  file: File
  id: string
  preview?: string
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label, accept, multiple = false, maxSize, onFilesChange, error, disabled }, ref) => {
    const [files, setFiles] = React.useState<FileItem[]>([])
    const [isDragging, setIsDragging] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList) return

      const newFiles: FileItem[] = []
      Array.from(fileList).forEach((file) => {
        if (maxSize && file.size > maxSize * 1024 * 1024) {
          return
        }
        
        const id = Math.random().toString(36).substr(2, 9)
        const preview = file.type.startsWith('image/') 
          ? URL.createObjectURL(file) 
          : undefined
        
        newFiles.push({ file, id, preview })
      })

      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles
      setFiles(updatedFiles)
      if (onFilesChange) {
        onFilesChange(updatedFiles.map(f => f.file))
      }
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      handleFiles(e.dataTransfer.files)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files)
    }

    const removeFile = (id: string) => {
      const updatedFiles = files.filter(f => f.id !== id)
      setFiles(updatedFiles)
      if (onFilesChange) {
        onFilesChange(updatedFiles.map(f => f.file))
      }
    }

    React.useEffect(() => {
      return () => {
        files.forEach(file => {
          if (file.preview) {
            URL.revokeObjectURL(file.preview)
          }
        })
      }
    }, [files])

    const formatFileSize = (bytes: number) => {
      if (bytes < 1024) return bytes + ' B'
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
    }

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
            isDragging 
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
              : error
              ? "border-red-300 dark:border-red-700"
              : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleInputChange}
            disabled={disabled}
            className="hidden"
          />
          
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Arrastra archivos aquí o{' '}
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={disabled}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              haz clic para seleccionar
            </button>
          </p>
          {maxSize && (
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Tamaño máximo: {maxSize} MB
            </p>
          )}
          {accept && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Formatos: {accept}
            </p>
          )}
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((fileItem) => (
              <div
                key={fileItem.id}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  {fileItem.preview ? (
                    <Image className="h-10 w-10 rounded object-cover flex-shrink-0" src={fileItem.preview} alt={fileItem.file.name} />
                  ) : (
                    <File className="h-10 w-10 text-gray-400 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {fileItem.file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatFileSize(fileItem.file.size)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(fileItem.id)}
                  disabled={disabled}
                  className="ml-2 p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload }

