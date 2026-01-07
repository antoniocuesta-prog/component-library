'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
}

const getInitials = (name?: string) => {
  if (!name) return ''
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className,
}) => {
  const [imageError, setImageError] = React.useState(false)

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 overflow-hidden",
        sizeClasses[size],
        className
      )}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : name ? (
        <span>{getInitials(name)}</span>
      ) : (
        <User className={cn(
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-5 h-5',
          size === 'lg' && 'w-6 h-6',
          size === 'xl' && 'w-8 h-8',
        )} />
      )}
    </div>
  )
}

export default Avatar

