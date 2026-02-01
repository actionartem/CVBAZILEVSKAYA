"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeTextProps {
  text: string
  className?: string
  speed?: number
  direction?: "left" | "right"
}

export function MarqueeText({
  text,
  className,
  speed = 20,
  direction = "left",
}: MarqueeTextProps) {
  const items = Array(4).fill(text)

  return (
    <div className={cn("overflow-hidden whitespace-nowrap py-4", className)}>
      <motion.div
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="inline-flex"
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-6xl md:text-8xl font-bold text-foreground/30 uppercase tracking-tighter font-mono"
          >
            {item}
            <span className="mx-8 text-primary">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
