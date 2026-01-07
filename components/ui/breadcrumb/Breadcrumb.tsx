'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className,
}) => {
  const defaultSeparator = <ChevronRight className="w-4 h-4 text-gray-400" />

  return (
    <nav
      className={cn("flex items-center space-x-2", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const Separator = separator || defaultSeparator

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2" aria-hidden="true">
                  {Separator}
                </span>
              )}
              {isLast ? (
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600 dark:text-gray-300">
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb

