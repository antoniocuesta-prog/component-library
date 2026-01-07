'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProgressProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  showLabel = false,
  className,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600 dark:text-gray-400">Progreso</span>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div
        className={cn(
          "w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "h-full bg-blue-600 transition-all duration-300 rounded-full",
            sizeClasses[size]
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}

export default Progress

