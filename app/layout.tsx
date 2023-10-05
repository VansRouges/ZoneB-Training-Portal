import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ActiveItemProvider } from "./context/ActiveItemContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Believers' Loverworld Zone B",
  description: 'Built by Qubators UNN',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveItemProvider>
          <Navbar />
            {children}
          <Footer />
        </ActiveItemProvider>
      </body>
    </html>
  )
}
