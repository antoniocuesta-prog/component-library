'use client'

import * as React from "react"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TimePickerProps {
  label?: string
  value?: string // formato "HH:MM"
  onChange?: (time: string) => void
  disabled?: boolean
  error?: string
  placeholder?: string
  format24h?: boolean
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  value,
  onChange,
  disabled,
  error,
  placeholder = "00:00",
  format24h = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [isPM, setIsPM] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const pickerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (value) {
      const [h, m] = value.split(':').map(Number)
      if (format24h) {
        setHours(h)
      } else {
        setHours(h > 12 ? h - 12 : h === 0 ? 12 : h)
        setIsPM(h >= 12)
      }
      setMinutes(m)
    }
  }, [value, format24h])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
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

  const formatTime = () => {
    let displayHours = hours
    if (!format24h) {
      displayHours = hours === 0 ? 12 : hours
    }
    const h = String(displayHours).padStart(2, '0')
    const m = String(minutes).padStart(2, '0')
    const ampm = format24h ? '' : (isPM ? ' PM' : ' AM')
    return `${h}:${m}${ampm}`
  }

  const handleTimeSelect = () => {
    let finalHours = hours
    if (!format24h) {
      if (isPM && hours !== 12) {
        finalHours = hours + 12
      } else if (!isPM && hours === 12) {
        finalHours = 0
      }
    }
    
    const timeString = `${String(finalHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    if (onChange) {
      onChange(timeString)
    }
    setIsOpen(false)
  }

  const hoursArray = format24h 
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 12 }, (_, i) => i + 1)

  const minutesArray = Array.from({ length: 60 }, (_, i) => i)

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
          value={value || ''}
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
        <Clock
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
        />
      </div>

      {isOpen && !disabled && (
        <div
          ref={pickerRef}
          className="absolute z-50 mt-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg p-4 min-w-[200px]"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Horas</label>
              <select
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-sm"
              >
                {hoursArray.map((h) => (
                  <option key={h} value={h}>
                    {String(h).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>
            
            <span className="text-2xl font-bold text-gray-400 mt-5">:</span>
            
            <div className="flex flex-col items-center">
              <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Minutos</label>
              <select
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-sm"
              >
                {minutesArray.map((m) => (
                  <option key={m} value={m}>
                    {String(m).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>

            {!format24h && (
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setIsPM(false)}
                  className={cn(
                    "px-3 py-1 text-xs rounded transition-colors",
                    !isPM 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  )}
                >
                  AM
                </button>
                <button
                  onClick={() => setIsPM(true)}
                  className={cn(
                    "px-3 py-1 text-xs rounded transition-colors",
                    isPM 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  )}
                >
                  PM
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleTimeSelect}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Confirmar
          </button>
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

export { TimePicker }

