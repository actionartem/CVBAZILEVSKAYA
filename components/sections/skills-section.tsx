"use client"

import { motion } from "framer-motion"
import { SkillTag } from "@/components/skill-tag"
import { GlowCard } from "@/components/glow-card"

const skillCategories = [
  {
    title: "Основные инструменты",
    skills: ["Figma", "Adobe Photoshop", "Illustrator"],
  },
  {
    title: "Дополнительно",
    skills: [
      "After Effects",
      "Cinema 4D",
      "Principle",
      "GPT",
      "SORA",
      "NANO BANANA",
      "MIDJOURNEY",
    ],
  },
  {
    title: "Веб-технологии",
    skills: ["HTML/CSS", "Tilda", "Webflow", "Понимание компонентного подхода"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Аналитическое мышление",
      "Работа в команде",
      "Внимание к деталям",
      "Коммуникация с разработчиками",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-wider font-medium"
          >
            Компетенции
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 font-mono"
          >
            Навыки и инструменты
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <GlowCard key={category.title} className="p-8">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="text-lg font-semibold mb-6 text-foreground"
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    index={categoryIndex * 4 + index}
                  />
                ))}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇷🇺</span>
            <div>
              <p className="font-medium text-foreground">Русский</p>
              <p className="text-xs text-muted-foreground">Родной</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇬🇧</span>
            <div>
              <p className="font-medium text-foreground">English</p>
              <p className="text-xs text-muted-foreground">B1 — Intermediate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
