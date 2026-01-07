import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from "lucide-react"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, children, dismissible, onDismiss, ...props }, ref) => {
    const variants = {
      success: {
        container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
        icon: 'text-green-600 dark:text-green-400',
        title: 'text-green-800 dark:text-green-200',
        text: 'text-green-700 dark:text-green-300',
        Icon: CheckCircle,
      },
      error: {
        container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
        icon: 'text-red-600 dark:text-red-400',
        title: 'text-red-800 dark:text-red-200',
        text: 'text-red-700 dark:text-red-300',
        Icon: AlertCircle,
      },
      warning: {
        container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
        icon: 'text-yellow-600 dark:text-yellow-400',
        title: 'text-yellow-800 dark:text-yellow-200',
        text: 'text-yellow-700 dark:text-yellow-300',
        Icon: AlertTriangle,
      },
      info: {
        container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        title: 'text-blue-800 dark:text-blue-200',
        text: 'text-blue-700 dark:text-blue-300',
        Icon: Info,
      },
    }

    const { container, icon, title: titleColor, text, Icon } = variants[variant]

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex gap-3 rounded-lg border p-4",
          container,
          className
        )}
        {...props}
      >
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", icon)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn("mb-1 font-semibold", titleColor)}>
              {title}
            </h4>
          )}
          <div className={cn("text-sm", text)}>
            {children}
          </div>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className={cn(
              "flex-shrink-0 rounded-md p-1 transition-colors",
              "hover:bg-black/5 dark:hover:bg-white/5",
              icon
            )}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert }

