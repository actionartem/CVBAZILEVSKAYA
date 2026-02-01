"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold font-mono">UI</span>
            </div>
            <span className="text-foreground font-medium">UX/UI Дизайнер</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Все права защищены
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://t.me/baselee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Telegram
            </motion.a>
            <motion.a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Behance
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
