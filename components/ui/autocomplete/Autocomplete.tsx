'use client'

import * as React from "react"
import { Search, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface AutocompleteOption {
  value: string
  label: string
}

export interface AutocompleteProps {
  label?: string
  options: AutocompleteOption[]
  value?: string
  onChange?: (value: string) => void
  onSelect?: (option: AutocompleteOption) => void
  placeholder?: string
  error?: string
  disabled?: boolean
  searchable?: boolean
  multiple?: boolean
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  options,
  value,
  onChange,
  onSelect,
  placeholder = "Buscar o seleccionar...",
  error,
  disabled,
  searchable = true,
  multiple = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedOptions, setSelectedOptions] = React.useState<AutocompleteOption[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (value && !multiple) {
      const option = options.find(opt => opt.value === value)
      if (option) {
        setSelectedOptions([option])
        setSearchQuery(option.label)
      }
    }
  }, [value, options, multiple])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options
    
    const query = searchQuery.toLowerCase()
    return options.filter(option =>
      option.label.toLowerCase().includes(query) ||
      option.value.toLowerCase().includes(query)
    )
  }, [options, searchQuery])

  const handleSelect = (option: AutocompleteOption) => {
    if (multiple) {
      const isSelected = selectedOptions.some(opt => opt.value === option.value)
      if (isSelected) {
        setSelectedOptions(selectedOptions.filter(opt => opt.value !== option.value))
      } else {
        setSelectedOptions([...selectedOptions, option])
      }
      setSearchQuery('')
    } else {
      setSelectedOptions([option])
      setSearchQuery(option.label)
      setIsOpen(false)
      
      if (onChange) {
        onChange(option.value)
      }
      if (onSelect) {
        onSelect(option)
      }
    }
  }

  const handleRemove = (option: AutocompleteOption, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedOptions(selectedOptions.filter(opt => opt.value !== option.value))
  }

  const isSelected = (option: AutocompleteOption) => {
    return selectedOptions.some(opt => opt.value === option.value)
  }

  return (
    <div className="w-full relative" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      
      <div className="relative">
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background cursor-pointer items-center gap-2 min-h-[40px] flex-wrap",
            error && "border-red-500 focus-visible:ring-red-500",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {multiple && selectedOptions.length > 0 ? (
            <div className="flex flex-wrap gap-1 flex-1">
              {selectedOptions.map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                >
                  {option.label}
                  <button
                    type="button"
                    onClick={(e) => handleRemove(option, e)}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              {searchable && (
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsOpen(true)}
                  placeholder={selectedOptions.length === 0 ? placeholder : ''}
                  className="flex-1 min-w-[120px] bg-transparent border-none outline-none"
                />
              )}
            </div>
          ) : (
            <>
              {searchable ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setIsOpen(true)
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="flex-1 bg-transparent border-none outline-none"
                />
              ) : (
                <span className="flex-1 text-gray-700 dark:text-gray-300">
                  {selectedOptions[0]?.label || placeholder}
                </span>
              )}
            </>
          )}
          
          <ChevronDown className={cn(
            "h-4 w-4 text-gray-400 transition-transform",
            isOpen && "transform rotate-180"
          )} />
        </div>

        {isOpen && !disabled && (
          <div className="absolute z-50 mt-1 w-full bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 shadow-lg max-h-[300px] overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                No se encontraron resultados
              </div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between",
                    isSelected(option) && "bg-blue-50 dark:bg-blue-900/20"
                  )}
                >
                  <span className={cn(
                    "text-sm",
                    isSelected(option) ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-900 dark:text-gray-100"
                  )}>
                    {option.label}
                  </span>
                  {isSelected(option) && (
                    <span className="text-blue-600 dark:text-blue-400">✓</span>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

export { Autocomplete }

