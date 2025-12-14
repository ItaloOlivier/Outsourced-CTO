import type { Metadata, Viewport } from 'next'
import './globals.css'
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema } from '@/components/StructuredData'

const siteUrl = 'https://www.outsourcedcto.co.za'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Outsourced CTO | Your Partner In IT Innovation | South Africa',
    template: '%s | Outsourced CTO'
  },
  description: 'Master your strengths. Outsource your weaknesses. Expert IT consulting, digital transformation, CTO services, IT recruitment, and digital marketing in South Africa. Founded 2014.',
  keywords: [
    'Outsourced CTO',
    'CTO services South Africa',
    'IT consulting Johannesburg',
    'digital transformation',
    'IT recruitment South Africa',
    'digital marketing',
    'business architecture',
    'IT project management',
    'Agile consulting',
    'technology leadership',
    'fractional CTO',
    'IT strategy',
    'change management',
    'Fourways IT company'
  ],
  authors: [{ name: 'Outsourced CTO' }],
  creator: 'Outsourced CTO',
  publisher: 'Outsourced CTO',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/images/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'Outsourced CTO',
    title: 'Outsourced CTO | Your Partner In IT Innovation',
    description: 'Master your strengths. Outsource your weaknesses. Expert IT consulting and digital transformation services in South Africa.',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Outsourced CTO - Your Partner In IT Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outsourced CTO | Your Partner In IT Innovation',
    description: 'Master your strengths. Outsource your weaknesses. Expert IT consulting in South Africa.',
    images: [`${siteUrl}/images/og-image.png`],
    creator: '@outsourcedcto',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  other: {
    'geo.region': 'ZA-GP',
    'geo.placename': 'Johannesburg',
    'geo.position': '-26.0241;28.0139',
    'ICBM': '-26.0241, 28.0139',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="en-ZA" href={siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.0241;28.0139" />
        <meta name="ICBM" content="-26.0241, 28.0139" />
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body>{children}</body>
    </html>
  )
}
