'use client'

import * as React from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ToastProps {
  id?: string
  title?: string
  description?: string
  variant?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  onClose?: () => void
}

const Toast: React.FC<ToastProps> = ({ 
  title, 
  description, 
  variant = 'info',
  onClose 
}) => {
  const variants = {
    success: {
      container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      Icon: CheckCircle,
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      icon: 'text-red-600 dark:text-red-400',
      Icon: AlertCircle,
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
      icon: 'text-yellow-600 dark:text-yellow-400',
      Icon: AlertTriangle,
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      Icon: Info,
    },
  }

  const { container, icon, Icon } = variants[variant]

  return (
    <div className={cn(
      "relative flex gap-3 rounded-lg border p-4 shadow-lg min-w-[300px] max-w-[400px]",
      container
    )}>
      <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", icon)} />
      <div className="flex-1">
        {title && (
          <h4 className={cn("mb-1 font-semibold text-sm", icon)}>
            {title}
          </h4>
        )}
        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={cn(
            "flex-shrink-0 rounded-md p-1 transition-colors hover:bg-black/5 dark:hover:bg-white/5",
            icon
          )}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

// Toast Container para mostrar múltiples toasts
export interface ToastContainerProps {
  toasts: ToastProps[]
  onClose: (id?: string) => void
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </div>
  )
}

export { Toast }

