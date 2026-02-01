"use client"

import { useState, useEffect } from "react"
import { motion, useSpring } from "framer-motion"

export function CursorFollow() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseover", handleMouseEnter)
    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.15 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[99] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
    </>
  )
}
