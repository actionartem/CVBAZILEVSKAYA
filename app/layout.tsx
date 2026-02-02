import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin", "latin-ext"] });
const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: 'CV BAZILEVSKAYA',
  description: 'Дизайнер интерфейсов с опытом в продуктовых задачах и веб-проектах. Делаю понятные и аккуратные интерфейсы для веба и мобильных приложений.',
  icons: {
    icon: {
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
