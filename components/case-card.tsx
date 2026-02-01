"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface CaseCardProps {
  title: string
  description: string
  tags: string[]
  index?: number
  color?: string
}

export function CaseCard({ title, description, tags, index = 0, color = "primary" }: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colors: Record<string, string> = {
    primary: "from-primary/20 to-primary/5",
    teal: "from-teal-500/20 to-teal-500/5",
    blue: "from-blue-500/20 to-blue-500/5",
    orange: "from-orange-500/20 to-orange-500/5",
    pink: "from-pink-500/20 to-pink-500/5",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "bg-card border border-border/50",
        "cursor-pointer"
      )}
      data-cursor-hover
    >
      {/* Gradient overlay */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
          colors[color]
        )}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <motion.span
            className="text-6xl font-bold text-border/30 font-mono"
            animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0.5 : 0.3 }}
          >
            0{index + 1}
          </motion.span>
          <motion.div
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered ? "rgba(0,210,180,0.3)" : "rgba(0,210,180,0.1)",
            }}
          >
            <motion.div animate={{ rotate: isHovered ? 45 : 0, x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}>
              <ArrowUpRight className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full",
                "bg-secondary/50 text-muted-foreground",
                "border border-border/50",
                "transition-all duration-300",
                "group-hover:border-primary/30 group-hover:text-foreground"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
