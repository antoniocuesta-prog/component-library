'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Radio } from "./Radio"

export interface RadioGroupOption {
  value: string
  label: string
}

export interface RadioGroupProps {
  name: string
  options: RadioGroupOption[]
  value?: string
  onChange?: (value: string) => void
  label?: string
  error?: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ name, options, value, onChange, label, error, className, orientation = 'vertical', ...props }, ref) => {
    return (
      <div className={cn("w-full", className)} ref={ref}>
        {label && (
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex gap-4",
            orientation === 'horizontal' ? "flex-row" : "flex-col"
          )}
        >
          {options.map((option) => (
            <Radio
              key={option.value}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
              label={option.label}
            />
          ))}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

export { RadioGroup }

