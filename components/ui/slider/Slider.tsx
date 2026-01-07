'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  showValue?: boolean
  min?: number
  max?: number
  step?: number
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, error, showValue = false, min = 0, max = 100, step = 1, value, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState(value || min)
    const sliderRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => sliderRef.current as HTMLInputElement)

    React.useEffect(() => {
      if (value !== undefined) {
        setLocalValue(value)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      setLocalValue(newValue)
      if (props.onChange) {
        props.onChange(e)
      }
    }

    const percentage = ((Number(localValue) - min) / (max - min)) * 100

    return (
      <div className="w-full">
        {label && (
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {label}
            </label>
            {showValue && (
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                {localValue}
              </span>
            )}
          </div>
        )}
        <div className="relative">
          <input
            ref={sliderRef}
            type="range"
            min={min}
            max={max}
            step={step}
            value={localValue}
            onChange={handleChange}
            className={cn(
              "w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer",
              error && "border-red-500",
              className
            )}
            style={{
              background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`
            }}
            {...props}
          />
          <div
            className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 bg-blue-600 rounded-full cursor-pointer"
            style={{ left: `calc(${percentage}% - 8px)` }}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }

