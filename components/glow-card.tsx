"use client"

import React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = "rgba(0,210,180,0.15)" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6",
        "transition-all duration-500",
        "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
      style={{
        background: isHovered
          ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`
          : undefined,
      }}
    >
      <div className="absolute inset-0 bg-card -z-10" />
      {children}
    </motion.div>
  )
}
