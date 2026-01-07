import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="flex items-center space-x-3 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              ref={ref}
              {...props}
            />
            <div className={cn(
              "block w-14 h-8 rounded-full transition-colors",
              props.checked 
                ? "bg-blue-600" 
                : "bg-gray-300 dark:bg-gray-700"
            )}>
              <div className={cn(
                "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform",
                props.checked && "transform translate-x-6"
              )} />
            </div>
          </div>
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
Switch.displayName = "Switch"

export { Switch }
