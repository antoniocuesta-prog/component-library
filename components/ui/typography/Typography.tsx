'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'strong' | 'em' | 'link'
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

const variantClasses = {
  h1: 'text-4xl font-bold mb-4',
  h2: 'text-3xl font-bold mb-3',
  h3: 'text-2xl font-semibold mb-2',
  h4: 'text-xl font-semibold mb-2',
  h5: 'text-lg font-semibold mb-1',
  h6: 'text-base font-semibold mb-1',
  p: 'text-base mb-4 text-gray-700 dark:text-gray-300',
  span: 'text-base',
  small: 'text-sm text-gray-600 dark:text-gray-400',
  strong: 'font-bold',
  em: 'italic',
  link: 'text-blue-600 dark:text-blue-400 hover:underline cursor-pointer',
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  as,
  className,
  children,
  ...props
}) => {
  const Component = as || (variant === 'link' ? 'a' : variant)
  const baseClasses = variantClasses[variant] || ''

  return (
    <Component
      className={cn(baseClasses, className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Typography

