import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerardo De Las Cuevas Peña, Full Stack Developer',
  description: 'Powered by gdlcp',
  keywords: 'javascript, developer, web developer, nodejs, react, express, PHP, Laravel, portafolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
