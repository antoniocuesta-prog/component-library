'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  label?: string
  className?: string
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          "w-px h-full bg-gray-200 dark:bg-gray-700",
          className
        )}
        role="separator"
        aria-orientation="vertical"
      />
    )
  }

  if (label) {
    return (
      <div className={cn("flex items-center gap-4 my-4", className)}>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "w-full h-px bg-gray-200 dark:bg-gray-700 my-4",
        className
      )}
      role="separator"
      aria-orientation="horizontal"
    />
  )
}

export default Divider

