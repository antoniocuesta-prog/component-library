import type { Metadata } from 'next'
import './globals.css'
import SidebarWrapper from '@/components/catalog/SidebarWrapper'
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
          <SidebarWrapper>
            {children}
          </SidebarWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

