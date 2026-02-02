"use client"

import React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  description: string
  logo?: string | React.ReactNode
  index?: number
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  logo,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-20 bottom-0 w-px bg-border/50 group-last:hidden" />

      <div className="flex gap-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={cn(
            "relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden",
            "bg-card border border-border/50",
            "flex items-center justify-center",
            "shadow-lg shadow-background/50"
          )}
        >
          {typeof logo === "string" ? (
            <Image
              src={logo || "/placeholder.svg"}
              alt={company}
              width={64}
              height={64}
              className="w-full h-full object-contain p-3"
            />
          ) : (
            logo
          )}
        </motion.div>

        {/* Content */}
        <div className="flex-1 pb-12 group-last:pb-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
                {company}
              </h3>
              <p className="text-primary font-medium">{role}</p>
            </div>
            <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
              {period}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
