"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  index?: number
}

export function ServiceCard({ title, description, icon: Icon, index = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative p-6 rounded-2xl",
        "bg-card border border-border/50",
        "transition-all duration-500",
        "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
      )}
      data-cursor-hover
    >
      {/* Icon */}
      <motion.div
        className={cn(
          "w-14 h-14 rounded-xl mb-5",
          "bg-primary/10 flex items-center justify-center",
          "transition-colors duration-300",
          "group-hover:bg-primary/20"
        )}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-6 h-6 text-primary" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {/* Decorative corner */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute top-4 right-8 w-1 h-1 bg-primary/50 rounded-full" />
        <div className="absolute top-8 right-4 w-1 h-1 bg-primary/50 rounded-full" />
      </motion.div>
    </motion.div>
  )
}
