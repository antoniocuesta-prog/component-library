'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <input
              type="radio"
              className="sr-only"
              ref={ref}
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors",
                props.checked
                  ? "border-blue-600"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 group-hover:border-blue-500",
                error && "border-red-500",
                className
              )}
            >
              {props.checked && (
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              )}
            </div>
          </div>
          {label && (
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400 ml-7">{error}</p>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }

