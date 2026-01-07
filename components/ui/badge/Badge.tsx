import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        secondary:
          "border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
        success:
          "border-transparent bg-green-600 text-white hover:bg-green-700",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "text-gray-950 dark:text-gray-50 border-gray-300 dark:border-gray-700",
        dot: "border-transparent bg-transparent text-gray-700 dark:text-gray-300",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  if (variant === 'dot' || dot) {
    return (
      <div
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative flex h-2 w-2 mr-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Badge, badgeVariants }

