"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "@/components/magnetic-button"
import { GlowCard } from "@/components/glow-card"
import { Mail, Send, ExternalLink } from "lucide-react"

const contacts = [
  {
    title: "Email",
    value: "marycrystalart@yandex.ru",
    href: "mailto:marycrystalart@yandex.ru",
    icon: Mail,
  },
  {
    title: "Telegram",
    value: "@baselee",
    href: "https://t.me/baselee",
    icon: Send,
  },
  {
    title: "Behance",
    value: "Портфолио",
    href: "https://www.behance.net/kuzihkac015",
    icon: ExternalLink,
  },
]

export function ContactsSection() {
  return (
    <section id="contacts" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm uppercase tracking-wider font-medium"
          >
            Контакты
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-4 font-mono"
          >
            Давайте работать вместе
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto"
          >
            Если удобно — быстрее всего в Telegram. Открыта к интересным проектам и долгосрочному
            сотрудничеству.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target={contact.title !== "Email" ? "_blank" : undefined}
              rel={contact.title !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <GlowCard className="text-center py-10 h-full hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <contact.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <p className="text-sm text-muted-foreground mb-1">{contact.title}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {contact.value}
                </p>
              </GlowCard>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagneticButton href="mailto:marycrystalart@yandex.ru">
            Написать письмо
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
