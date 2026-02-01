"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export function MagneticButton({ children, className, onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.3
    const y = (clientY - top - height / 2) * 0.3
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const Component = href ? motion.a : motion.button

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(
          "relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider",
          "bg-primary text-primary-foreground rounded-full",
          "overflow-hidden transition-all duration-300",
          "hover:shadow-[0_0_40px_rgba(0,210,180,0.4)]",
          "before:absolute before:inset-0 before:bg-foreground/10 before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
      </Component>
    </div>
  )
}
