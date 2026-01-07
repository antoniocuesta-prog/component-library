'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  defaultTab?: string
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  orientation = 'horizontal',
  className,
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab || items[0]?.id)

  const activeItem = items.find(item => item.id === activeTab)

  return (
    <div className={cn(
      "w-full",
      orientation === 'vertical' && "flex gap-4",
      className
    )}>
      {/* Tab Headers */}
      <div className={cn(
        "flex",
        orientation === 'horizontal' ? "flex-row border-b border-gray-200 dark:border-gray-700" : "flex-col border-r border-gray-200 dark:border-gray-700 pr-4"
      )}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => !item.disabled && setActiveTab(item.id)}
            disabled={item.disabled}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors",
              orientation === 'horizontal' 
                ? "border-b-2" 
                : "border-r-2 text-left",
              activeTab === item.id
                ? "border-blue-500 text-blue-600 dark:text-blue-400"
                : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200",
              item.disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={cn(
        "mt-4",
        orientation === 'vertical' && "flex-1"
      )}>
        {activeItem?.content}
      </div>
    </div>
  )
}

export default Tabs

