import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin rounded-full border-solid border-t-transparent",
  {
    variants: {
      variant: {
        default: "border-blue-600",
        primary: "border-blue-600",
        secondary: "border-gray-600",
        success: "border-green-600",
        destructive: "border-red-600",
      },
      size: {
        sm: "h-4 w-4 border-2",
        default: "h-8 w-8 border-2",
        lg: "h-12 w-12 border-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, label, ...props }, ref) => {
    return (
      <div className="flex flex-col items-center justify-center" ref={ref} {...props}>
        <div className={cn(spinnerVariants({ variant, size }), className)} />
        {label && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{label}</p>
        )}
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
