import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Distribuidora FF',
  description: 'Distribuidora FF, una empresa dedicada a proveer autopartes de alta calidad a los mejores precios.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-foreground bg-background flex flex-col min-h-screen`}>
            <Navbar />
            {children}
            <Footer />
          
      </body>
    </html>
  )
}
