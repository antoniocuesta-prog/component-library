'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { cn } from '@/lib/utils'

interface SidebarWrapperProps {
  children: React.ReactNode
}

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <main className="flex-1 overflow-y-auto relative">
        {/* Botón de menú hamburguesa para móvil */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        <div className={cn(
          "pt-16 md:pt-0",
          isSidebarOpen && "md:pt-0"
        )}>
          {children}
        </div>
      </main>
    </div>
  )
}

