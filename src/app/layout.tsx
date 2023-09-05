import './globals.css'
import Header from "@/components/Header"
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'],display:'swap',weight:'400' })

export const metadata: Metadata = {
  title: 'Flex',
  description: 'Created by The Ninjan | Niranjan Solanki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.className}>
      <body >
      <Header/>  
      {children}
      </body>
    </html>
  )
}
