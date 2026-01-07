'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const savedTheme = localStorage.getItem('theme') as Theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme) {
        setTheme(savedTheme)
      } else if (prefersDark) {
        setTheme('dark')
      }
    } catch (error) {
      // Silently handle localStorage errors (e.g., in private browsing)
      console.warn('Error accessing localStorage:', error)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('theme', theme)
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (error) {
        // Silently handle localStorage errors
        console.warn('Error saving theme to localStorage:', error)
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // Siempre proporcionar el contexto, incluso antes de montar
  // Esto evita errores cuando los componentes hijos usan useTheme()
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

