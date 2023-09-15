import './globals.css'
import type { Metadata } from 'next'
import { Langar } from 'next/font/google'

const inter = Langar({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Phong Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
