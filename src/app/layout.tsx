import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <header style={{backgroundColor:"LightBlue",
      padding:"lrem",
      }}    >
          <p>Header</p>
        </header>
        {children}
        <footer style={{background:"ghostwhite",
      padding:"lrem",}}>
          <p>footer</p>
          </footer></body>
    </html>
  )
}
