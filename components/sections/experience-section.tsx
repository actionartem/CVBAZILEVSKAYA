"use client"

import { motion } from "framer-motion"
import { ExperienceCard } from "@/components/experience-card"

// DM Logo component
function DMLogoIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-lg font-mono">
      DM
    </div>
  )
}

const experiences = [
  {
    company: "PARI",
    role: "Дизайнер интерфейсов",
    period: "Март 2024 — настоящее время",
    description:
      "Работаю с интерфейсами продукта: макеты экранов и состояний, прототипы, поддержание единого визуального стиля.",
    logo: "/pari_logo.svg",
  },
  {
    company: "WebMoney",
    role: "UX/UI дизайнер",
    period: "Апрель 2023 — Ноябрь 2023",
    description:
      "Дизайн интерфейсов и прототипирование, работа с UI-логикой и согласованием решений.",
    logo: "/WebMoney_logo.svg",
  },
  {
    company: "Devs Marketing",
    role: "Веб-дизайнер",
    period: "Декабрь 2021 — Март 2023",
    description:
      "Лендинги и сайты, графика для digital-задач, презентации и оформление материалов. Параллельно — задачи по интерфейсам и визуальной упаковке проектов.",
    logo: <DMLogoIcon />,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-wider font-medium"
          >
            Карьера
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 font-mono"
          >
            Опыт работы
          </motion.h2>
        </div>

        {/* Experience timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.company}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              description={exp.description}
              logo={exp.logo}
              index={index}
            />
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-card border border-border/50"
        >
          <h4 className="font-semibold mb-2 text-foreground">Дополнительный опыт</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Отдельно делала проекты на фрилансе и в частном формате: интерфейсы, лендинги,
            иллюстрации и визуальные материалы для компаний. Также был опыт стажировки и небольших
            проектных задач.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
