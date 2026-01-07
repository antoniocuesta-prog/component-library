'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  maxVisible?: number
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = false,
  maxVisible = 5,
  className,
}) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const half = Math.floor(maxVisible / 2)

    let start = Math.max(1, currentPage - half)
    let end = Math.min(totalPages, currentPage + half)

    if (currentPage <= half) {
      end = Math.min(maxVisible, totalPages)
    }
    if (currentPage >= totalPages - half) {
      start = Math.max(1, totalPages - maxVisible + 1)
    }

    if (showFirstLast && start > 1) {
      pages.push(1)
      if (start > 2) pages.push('...')
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (showFirstLast && end < totalPages) {
      if (end < totalPages - 1) pages.push('...')
      pages.push(totalPages)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className={cn("flex items-center justify-center gap-1", className)} aria-label="Paginación">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "p-2 rounded-md transition-colors",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "text-gray-600 dark:text-gray-400"
        )}
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
              ...
            </span>
          )
        }

        const pageNum = page as number
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={cn(
              "min-w-[40px] px-3 py-2 rounded-md transition-colors text-sm font-medium",
              currentPage === pageNum
                ? "bg-blue-600 text-white"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
            aria-label={`Página ${pageNum}`}
            aria-current={currentPage === pageNum ? 'page' : undefined}
          >
            {pageNum}
          </button>
        )
      })}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "p-2 rounded-md transition-colors",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "text-gray-600 dark:text-gray-400"
        )}
        aria-label="Página siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  )
}

export default Pagination

