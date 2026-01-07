'use client'

import * as React from "react"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface DatePickerProps {
  label?: string
  value?: Date
  onChange?: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  error?: string
  placeholder?: string
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  disabled,
  error,
  placeholder = "Seleccionar fecha",
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentMonth, setCurrentMonth] = React.useState(value || new Date())
  const inputRef = React.useRef<HTMLInputElement>(null)
  const calendarRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const formatDate = (date: Date | null) => {
    if (!date) return ''
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (number | null)[] = []
    
    // Agregar días vacíos al inicio
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Agregar días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    )

    if (minDate && selectedDate < minDate) return
    if (maxDate && selectedDate > maxDate) return

    if (onChange) {
      onChange(selectedDate)
    }
    setIsOpen(false)
  }

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    )
  }

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    )
  }

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  const isDateSelected = (day: number) => {
    if (!value) return false
    return (
      value.getDate() === day &&
      value.getMonth() === currentMonth.getMonth() &&
      value.getFullYear() === currentMonth.getFullYear()
    )
  }

  const monthName = currentMonth.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
  const days = getDaysInMonth(currentMonth)
  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  return (
    <div className="w-full relative">
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={formatDate(value || null)}
          placeholder={placeholder}
          readOnly
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background pr-10 cursor-pointer",
            error && "border-red-500 focus-visible:ring-red-500",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
        <Calendar
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        />
      </div>

      {isOpen && !disabled && (
        <div
          ref={calendarRef}
          className="absolute z-50 mt-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-4 min-w-[280px]"
        >
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={previousMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <h3 className="font-semibold text-sm capitalize">{monthName}</h3>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400 p-1"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) {
                return <div key={index} className="p-2" />
              }

              const disabled = isDateDisabled(day)
              const selected = isDateSelected(day)

              return (
                <button
                  key={day}
                  onClick={() => !disabled && handleDateClick(day)}
                  disabled={disabled}
                  className={cn(
                    "p-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                    selected && "bg-blue-600 text-white hover:bg-blue-700",
                    disabled && "opacity-30 cursor-not-allowed",
                    !selected && !disabled && "text-gray-900 dark:text-gray-100"
                  )}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

export { DatePicker }

