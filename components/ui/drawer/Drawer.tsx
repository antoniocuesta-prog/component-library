'use client'

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  side?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg' | 'full'
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  side = 'right',
  size = 'md',
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizeClasses = {
    sm: side === 'left' || side === 'right' ? 'w-80' : 'h-80',
    md: side === 'left' || side === 'right' ? 'w-96' : 'h-96',
    lg: side === 'left' || side === 'right' ? 'w-[32rem]' : 'h-[32rem]',
    full: side === 'left' || side === 'right' ? 'w-full' : 'h-full',
  }

  const sideClasses = {
    left: 'left-0 top-0 bottom-0',
    right: 'right-0 top-0 bottom-0',
    top: 'top-0 left-0 right-0',
    bottom: 'bottom-0 left-0 right-0',
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed z-50 bg-white dark:bg-gray-800 shadow-xl transition-transform",
          sizeClasses[size],
          sideClasses[side],
          side === 'left' && "animate-slide-in-left",
          side === 'right' && "animate-slide-in-right",
          side === 'top' && "animate-slide-in-top",
          side === 'bottom' && "animate-slide-in-bottom"
        )}
      >
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        
        <div className="overflow-y-auto h-full" style={{ height: title ? 'calc(100% - 73px)' : '100%' }}>
          {children}
        </div>
      </div>
    </>
  )
}

export { Drawer }

