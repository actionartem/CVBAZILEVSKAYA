"use client"

import { motion } from "framer-motion"
import { GlowCard } from "@/components/glow-card"
import { AnimatedText } from "@/components/animated-text"

const stats = [
  { value: "3+", label: "Года опыта" },
  { value: "15+", label: "Проектов" },
  { value: "100%", label: "Отдача" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-wider font-medium"
          >
            Обо мне
          </motion.span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Text */}
          <div className="space-y-8">
            <AnimatedText
              text="Я дизайнер интерфейсов с опытом в продуктовых задачах и веб-проектах."
              className="text-3xl md:text-4xl font-semibold leading-tight"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Люблю, когда в проекте есть смысл и понятная цель: улучшить сценарий, сделать интерфейс
              яснее, убрать лишние шаги, привести всё к единому стилю.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Умею разбираться в задаче, задавать правильные вопросы и доводить дизайн до состояния
              «можно брать и делать». При необходимости собираю UI-набор: компоненты, состояния,
              правила — чтобы продукт выглядел единообразно и дальше нормально масштабировался.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <p className="text-xl italic text-foreground">
                «Что важнее всего в моей работе: логика, удобство, чистая визуальная система и
                макеты, которые реально удобно отдавать в разработку.»
              </p>
            </motion.blockquote>
          </div>

          {/* Right column - Stats & Card */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <GlowCard key={stat.label} className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <span className="text-4xl md:text-5xl font-bold text-primary font-mono">
                      {stat.value}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>

            {/* Info card */}
            <GlowCard className="p-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Образование</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">МГХПА им. С. Г. Строганова</p>
                  <p className="text-sm text-muted-foreground">Дизайн</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-medium text-foreground">Курсы</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                    <li>• Центр «Профессионал» — Frontend-разработка</li>
                    <li>• Wanna be like — веб-дизайн</li>
                  </ul>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  )
}
