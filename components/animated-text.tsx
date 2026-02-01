"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export function AnimatedText({ text, className, delay = 0, once = true }: AnimatedTextProps) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2 inline-block"
          variants={child}
          style={{ perspective: "1000px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function AnimatedHeading({ text, className, delay = 0, once = true }: AnimatedTextProps) {
  const letters = text.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 100,
      skewY: 7,
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.h1
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}
