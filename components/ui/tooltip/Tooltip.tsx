'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

const positionClasses = {
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
}

const arrowClasses = {
  top: 'top-full left-1/2 transform -translate-x-1/2 border-t-gray-900 dark:border-t-gray-700',
  bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-900 dark:border-b-gray-700',
  left: 'left-full top-1/2 transform -translate-y-1/2 border-l-gray-900 dark:border-l-gray-700',
  right: 'right-full top-1/2 transform -translate-y-1/2 border-r-gray-900 dark:border-r-gray-700',
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 dark:bg-gray-700 rounded shadow-lg whitespace-nowrap",
            positionClasses[position]
          )}
        >
          {content}
          <div
            className={cn(
              "absolute w-0 h-0 border-4 border-transparent",
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  )
}

export default Tooltip

