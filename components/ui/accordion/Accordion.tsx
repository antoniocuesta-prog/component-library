'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  defaultOpen?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(
    new Set(items.filter(item => item.defaultOpen).map(item => item.id))
  )

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className={cn("w-full space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id)
        return (
          <div
            key={item.id}
            className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform",
                  isOpen && "transform rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion

