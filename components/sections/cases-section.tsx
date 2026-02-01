"use client"

import { motion } from "framer-motion"
import { CaseCard } from "@/components/case-card"

const cases = [
  {
    title: "Маркетплейс искусства «АртХаус»",
    description:
      "Исследование аудитории, интервью, CJM, прототип и финальные адаптивные макеты. Плюс UI-kit, чтобы интерфейс был цельным.",
    tags: ["UX Research", "UI Design", "Adaptive", "UI-kit"],
    color: "primary",
  },
  {
    title: "Water Balance",
    description:
      "Дизайн ключевых экранов мобильного приложения, прототип, UI-kit и оформление кейса. Фокус — чистый iOS-ориентированный UI и понятные состояния.",
    tags: ["Mobile App", "iOS", "UI-kit", "Prototype"],
    color: "blue",
  },
  {
    title: "Хакатон TUI / FUN&SUN",
    description:
      "Командная работа: исследование, интервью, CJM и кликабельный прототип большого объёма. Идея — помочь пользователю дойти до бронирования онлайн.",
    tags: ["Hackathon", "CJM", "Prototype", "Team Work"],
    color: "orange",
  },
  {
    title: "Хакатон СКОЛКОВО",
    description:
      "Продукт за короткий срок: гипотезы, интервью, логика сервиса и прототип ключевых экранов платформы поиска репетиторов.",
    tags: ["Hackathon", "UX Research", "Prototype"],
    color: "pink",
  },
  {
    title: "Ветклиника «Кот+Бегемот»",
    description:
      "Структура, прототип, дизайн и адаптив лендинга. Реализация на Tilda через Zero Block.",
    tags: ["Landing Page", "Tilda", "Adaptive", "Design"],
    color: "teal",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-wider font-medium"
          >
            Портфолио
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 font-mono"
          >
            Избранные кейсы
          </motion.h2>
        </div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <CaseCard
              key={item.title}
              title={item.title}
              description={item.description}
              tags={item.tags}
              index={index}
              color={item.color}
            />
          ))}
        </div>

        {/* Behance link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span>Больше работ на Behance</span>
            <motion.span
              className="inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
