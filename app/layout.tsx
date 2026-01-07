import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/catalog/Sidebar'
import { ThemeProvider } from '@/components/catalog/ThemeProvider'

export const metadata: Metadata = {
  title: 'Catálogo de Componentes',
  description: 'Catálogo interactivo de componentes reutilizables',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

