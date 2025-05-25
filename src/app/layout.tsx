import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Angad Dhillon - Software Engineer & Computer Science Student',
  description: 'Personal portfolio of Angad Dhillon, a Computer Science and Biology student at UBC with expertise in software engineering, aviation, and community service.',
  keywords: ['Angad Dhillon', 'Software Engineer', 'Computer Science', 'UBC', 'Portfolio', 'React', 'Next.js', 'Aviation'],
  authors: [{ name: 'Angad Dhillon' }],
  creator: 'Angad Dhillon',
  openGraph: {
    title: 'Angad Dhillon - Software Engineer & Computer Science Student',
    description: 'Personal portfolio showcasing software engineering projects, aviation passion, and community service.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 