'use client'

import React, { useState, useEffect } from 'react'
import { ComponentStory, PropDefinition } from '@/lib/component-registry'
import { cn } from '@/lib/utils'

interface PropsEditorProps {
  component: ComponentStory
  props: Record<string, any>
  onPropsChange: (props: Record<string, any>) => void
}

export default function PropsEditor({ component, props, onPropsChange }: PropsEditorProps) {
  const [localProps, setLocalProps] = useState<Record<string, any>>(props)

  useEffect(() => {
    setLocalProps(props)
  }, [props])

  const handlePropChange = (propName: string, value: any) => {
    const newProps = { ...localProps, [propName]: value }
    setLocalProps(newProps)
    onPropsChange(newProps)
  }

  const renderPropInput = (prop: PropDefinition) => {
    const currentValue = localProps[prop.name]

    if (prop.type.includes('boolean')) {
      return (
        <input
          type="checkbox"
          checked={currentValue || false}
          onChange={(e) => handlePropChange(prop.name, e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
      )
    }

    if (prop.type.includes('number')) {
      return (
        <input
          type="number"
          value={currentValue || ''}
          onChange={(e) => handlePropChange(prop.name, Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm"
        />
      )
    }

    if (prop.type.includes('string')) {
      return (
        <input
          type="text"
          value={currentValue || ''}
          onChange={(e) => handlePropChange(prop.name, e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm"
        />
      )
    }

    // Para otros tipos, usar textarea
    return (
      <textarea
        value={typeof currentValue === 'object' ? JSON.stringify(currentValue, null, 2) : String(currentValue || '')}
        onChange={(e) => {
          try {
            const parsed = JSON.parse(e.target.value)
            handlePropChange(prop.name, parsed)
          } catch (error) {
            handlePropChange(prop.name, e.target.value)
          }
        }}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm font-mono"
        rows={3}
      />
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold mb-4">Editor de Props</h3>
      <div className="space-y-4">
        {component.props.map((prop) => (
          <div key={prop.name} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {prop.name}
              {prop.required && <span className="text-red-500 ml-1">*</span>}
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 font-mono">
                {prop.type}
              </span>
            </label>
            {prop.description && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {prop.description}
              </p>
            )}
            {renderPropInput(prop)}
            {prop.default && (
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Default: {prop.default}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

