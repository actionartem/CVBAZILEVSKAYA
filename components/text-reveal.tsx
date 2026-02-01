"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
}

export function TextReveal({ text, className }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = text.split(" ")

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </div>
  )
}

interface WordProps {
  children: string
  progress: any
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.1, 1])
  return (
    <motion.span style={{ opacity }} className="mr-2 mt-2">
      {children}
    </motion.span>
  )
}
