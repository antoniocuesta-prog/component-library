'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TableColumn<T = any> {
  key: string
  header: string
  render?: (value: any, row: T) => React.ReactNode
  className?: string
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[]
  data: T[]
  className?: string
  striped?: boolean
  hover?: boolean
}

export function Table<T = any>({
  columns,
  data,
  className,
  striped = false,
  hover = true,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "w-full border-collapse",
          className
        )}
      >
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100",
                  column.className
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-gray-200 dark:border-gray-700",
                striped && rowIndex % 2 === 0 && "bg-gray-50 dark:bg-gray-800/50",
                hover && "hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn(
                    "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                    column.className
                  )}
                >
                  {column.render
                    ? column.render((row as any)[column.key], row)
                    : (row as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

