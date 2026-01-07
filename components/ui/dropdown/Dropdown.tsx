'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
  onClick?: () => void
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Selecciona una opción',
  label,
  error,
  disabled,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const selectedOption = options.find(opt => opt.value === value)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return
    onChange?.(option.value)
    option.onClick?.()
    setIsOpen(false)
  }

  return (
    <div className={cn("w-full dropdown-container", className)}>
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus-visible:ring-red-500",
            isOpen && "ring-2 ring-blue-500"
          )}
        >
          <span className={cn(
            "truncate",
            !selectedOption && "text-gray-500 dark:text-gray-400"
          )}>
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown className={cn(
            "ml-2 h-4 w-4 text-gray-400 transition-transform",
            isOpen && "transform rotate-180"
          )} />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                disabled={option.disabled}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm transition-colors",
                  "hover:bg-gray-100 dark:hover:bg-gray-700",
                  option.value === value && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
                  option.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

export default Dropdown

