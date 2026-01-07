import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className={cn(
              "h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2",
              error && "border-red-500",
              className
            )}
            ref={ref}
            {...props}
          />
          {label && (
            <span className={cn(
              "text-sm font-medium",
              error ? "text-red-600 dark:text-red-400" : "text-gray-700 dark:text-gray-300"
            )}>
              {label}
            </span>
          )}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
