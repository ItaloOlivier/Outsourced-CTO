import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Outsourced CTO',
  description: 'Your Partner In IT Innovation',
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    title: 'Outsourced CTO',
    description: 'Your Partner In IT Innovation',
    url: 'https://www.outsourcedcto.co.za',
    siteName: 'Outsourced CTO',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
