import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Outsourced CTO for IT consulting, digital transformation, IT recruitment, and digital marketing services in South Africa. Located in Bryanston, Johannesburg.',
  keywords: [
    'contact Outsourced CTO',
    'IT consulting Johannesburg',
    'Bryanston IT company',
    'South Africa IT services contact'
  ],
  openGraph: {
    title: 'Contact Us | Outsourced CTO',
    description: 'Get in touch with Outsourced CTO for expert IT consulting services in South Africa.',
    url: 'https://www.outsourcedcto.co.za/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.outsourcedcto.co.za/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
