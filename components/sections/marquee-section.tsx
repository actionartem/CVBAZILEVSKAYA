"use client"

import { MarqueeText } from "@/components/marquee-text"

export function MarqueeSection() {
  return (
    <section className="py-16 border-y border-border/30 overflow-hidden">
      <MarqueeText text="UX Design • UI Design • Прототипирование • Дизайн-системы" speed={30} />
    </section>
  )
}
