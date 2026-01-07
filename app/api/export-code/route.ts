import { NextRequest, NextResponse } from 'next/server'
import { getComponentById } from '@/lib/component-registry'

export async function POST(request: NextRequest) {
  try {
    const { componentId, code } = await request.json()

    if (!componentId || !code) {
      return NextResponse.json(
        { error: 'componentId y code son requeridos' },
        { status: 400 }
      )
    }

    const component = getComponentById(componentId)
    if (!component) {
      return NextResponse.json(
        { error: 'Componente no encontrado' },
        { status: 404 }
      )
    }

    // Generar el nombre del archivo
    const fileName = `${component.name}.tsx`
    
    // Crear el contenido del archivo con imports
    const fileContent = `import React from 'react'

${code}
`

    // Retornar el archivo como descarga
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    })
  } catch (error) {
    console.error('Error al exportar código:', error)
    return NextResponse.json(
      { error: 'Error al exportar el código' },
      { status: 500 }
    )
  }
}

