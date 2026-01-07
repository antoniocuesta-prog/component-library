'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { cn } from '@/lib/utils'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-md transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "text-gray-600 dark:text-gray-400"
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}

