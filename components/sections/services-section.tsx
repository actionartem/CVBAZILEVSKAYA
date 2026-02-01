"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/service-card"
import { Layers, MousePointerClick, Palette, Layout, Smartphone, Globe } from "lucide-react"

const services = [
  {
    title: "UX/UI дизайн",
    description: "Для веб-сервисов и мобильных приложений — от исследования до финальных макетов",
    icon: Layers,
  },
  {
    title: "Прототипирование",
    description: "Кликабельные прототипы для согласования логики и тестирования гипотез",
    icon: MousePointerClick,
  },
  {
    title: "UI-дизайн",
    description: "Экраны, состояния, адаптив, аккуратная типографика и внимание к деталям",
    icon: Palette,
  },
  {
    title: "Дизайн-системы",
    description: "UI-набор на уровне проекта: компоненты, правила, состояния для масштабирования",
    icon: Layout,
  },
  {
    title: "Мобильные приложения",
    description: "iOS и Android интерфейсы с фокусом на пользовательский опыт",
    icon: Smartphone,
  },
  {
    title: "Лендинги",
    description: "Структура, подача, дизайн + при необходимости сборка на Tilda/Webflow",
    icon: Globe,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 font-mono"
          >
            Что я делаю
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
