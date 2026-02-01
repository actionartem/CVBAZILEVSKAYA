"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AnimatedHeading, AnimatedText } from "@/components/animated-text"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,180,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-32 h-32 rounded-full bg-primary/5 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[15%] w-48 h-48 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]"
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Открыта к новым проектам</span>
        </motion.div>

        {/* Main heading */}
        <AnimatedHeading
          text="Дизайнер интерфейсов"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-mono"
          delay={0.2}
        />

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-1 w-32 mx-auto mb-6 bg-primary rounded-full origin-left"
        />

        <AnimatedText
          text="Делаю понятные и аккуратные интерфейсы для веба и мобильных приложений: от структуры и прототипа до финальных макетов и UI-набора компонентов."
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 justify-center"
          delay={0.5}
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton href="#cases">Смотреть кейсы</MagneticButton>
          <MagneticButton
            href="#contacts"
            className="bg-transparent border border-primary/50 text-foreground hover:bg-primary/10"
          >
            Связаться
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Скролл</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
