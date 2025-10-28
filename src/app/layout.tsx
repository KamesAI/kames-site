import type { ReactNode } from 'react'
import '../app/globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="bg-black text-white">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
