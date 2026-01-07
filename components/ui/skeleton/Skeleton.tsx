import * as React from "react"
import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular'
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'rectangular', ...props }, ref) => {
    const baseClasses = "animate-pulse bg-gray-200 dark:bg-gray-700"
    
    const variantClasses = {
      text: "h-4 rounded",
      circular: "rounded-full",
      rectangular: "rounded-md",
    }

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

export { Skeleton }

