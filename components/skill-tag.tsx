"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillTagProps {
  skill: string
  index?: number
}

export function SkillTag({ skill, index = 0 }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "inline-flex items-center px-4 py-2 text-sm font-medium",
        "bg-secondary text-secondary-foreground",
        "border border-border/50 rounded-full",
        "transition-colors duration-300",
        "hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
      )}
    >
      {skill}
    </motion.span>
  )
}
