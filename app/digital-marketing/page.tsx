import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/StructuredData'
import FAQSection from '@/components/FAQSection'

const faqs = [
  {
    question: "What is included in your digital marketing strategy packages?",
    answer: "Our packages include digital marketing strategy development, brand development and guidelines, social media setup and management, competitive analysis, and analytics reporting. Package scope varies from startup (R5,000 - R9,000) to enterprise level (R25,000 - R49,999)."
  },
  {
    question: "How much does social media management cost?",
    answer: "Our social media management services range from R10,000 per month for startups to R60,000 per month for enterprise-level companies, depending on the number of platforms, posting frequency, and engagement requirements."
  },
  {
    question: "What does your go-to-market strategy include?",
    answer: "Our go-to-market strategies seamlessly consolidate sales enablement, marketing campaigns, distribution channels, pricing strategies, brand positioning, competitive analysis, and consumer insights into a practical roadmap for business success."
  },
  {
    question: "Do you help with brand development?",
    answer: "Yes, we provide comprehensive brand development services including brand strategy, visual identity guidelines, brand positioning, and messaging frameworks to ensure consistent brand communication across all channels."
  },
  {
    question: "Can you help us develop social media policies?",
    answer: "Absolutely. We help develop your ideal digital footprint in line with global best practices, including creating necessary social media policies and procedures while mitigating risk."
  }
]

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: 'Strategic digital marketing services in South Africa. We develop winning go-to-market strategies consolidating sales, marketing, distribution, and brand development.',
  keywords: [
    'digital marketing South Africa',
    'social media management',
    'go-to-market strategy',
    'brand development',
    'digital strategy',
    'marketing consulting'
  ],
  openGraph: {
    title: 'Digital Marketing Services | Outsourced CTO',
    description: 'Strategic digital marketing services. We develop winning go-to-market strategies for your business.',
    url: 'https://www.outsourcedcto.co.za/digital-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.outsourcedcto.co.za/digital-marketing',
  },
}

export default function DigitalMarketing() {
  return (
    <>
      <ServiceSchema
        name="Digital Marketing Services"
        description="We spearhead digital marketing innovation by identifying new opportunities and guiding strategic execution with winning go-to-market strategies."
        url="https://www.outsourcedcto.co.za/digital-marketing"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.outsourcedcto.co.za' },
          { name: 'Digital Marketing', url: 'https://www.outsourcedcto.co.za/digital-marketing' }
        ]}
      />
      <FAQSchema faqs={faqs} />

      <Header />

      <PageHero
        title="Digital Marketing"
        subtitle="Just like your own CTO, we will spearhead your digital marketing innovation by identifying new opportunities and guiding your strategic execution."
        backgroundImage="/images/slide2.png"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

            <div className="content-block">
              <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#303030' }}>
                Digital Strategy & Go-To-Market
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '20px' }}></div>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                At Outsourced CTO, we implement lean methodologies to develop winning go-to-market strategies.
                The end product seamlessly consolidates sales, marketing, distribution, pricing, brand development,
                competitive analysis, and consumer insights to ensure a practical roadmap to business success.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                Digital media evolves at such a rapid pace that it can become overwhelming to identify suitable
                channels for tailored business communication. By taking on the role of your CTO, we can develop
                an ideal digital footprint in line with global best practice, including creating necessary
                policies and procedures.
              </p>
            </div>

            <div className="content-block">
              <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#303030' }}>
                Social Media Management
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '20px' }}></div>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                Our team of social media experts utilizes extensive global experience to help you build your
                ideal digital footprint in line with global best practice, including creating necessary
                policies and procedures while mitigating risk.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                We provide comprehensive social media management services tailored to your business size
                and requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-heading">
            <h2>Digital Marketing Strategy Packages</h2>
            <div style={{ width: '50px', height: '2px', background: '#ba292c', margin: '20px auto' }}></div>
            <p>Choose the package that fits your business needs</p>
          </div>

          <div className="services-grid">
            <div className="service-box" style={{ border: '2px solid #eee' }}>
              <h3 style={{ color: '#ba292c', fontSize: '22px', marginBottom: '10px' }}>Start-up Business</h3>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#303030', marginBottom: '20px' }}>
                R5,000 - R9,000
              </p>
              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Digital Marketing Strategy</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Brand Development</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Social Media Setup</li>
                <li style={{ padding: '10px 0' }}>Basic Analytics</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                Get Started
              </Link>
            </div>

            <div className="service-box" style={{ border: '2px solid #ba292c', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#ba292c', color: '#fff', padding: '5px 20px', fontSize: '12px', fontWeight: 700 }}>
                POPULAR
              </div>
              <h3 style={{ color: '#ba292c', fontSize: '22px', marginBottom: '10px' }}>Small to Medium Business</h3>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#303030', marginBottom: '20px' }}>
                R12,000 - R14,999
              </p>
              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Comprehensive Digital Strategy</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Brand Development & Guidelines</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Full Social Media Management</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Competitive Analysis</li>
                <li style={{ padding: '10px 0' }}>Advanced Analytics & Reporting</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                Get Started
              </Link>
            </div>

            <div className="service-box" style={{ border: '2px solid #eee' }}>
              <h3 style={{ color: '#ba292c', fontSize: '22px', marginBottom: '10px' }}>Large Company</h3>
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#303030', marginBottom: '20px' }}>
                R25,000 - R49,999
              </p>
              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Enterprise Digital Strategy</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Complete Brand Ecosystem</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Multi-Platform Management</li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>Market Research & Insights</li>
                <li style={{ padding: '10px 0' }}>Executive Reporting Dashboard</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                Get Started
              </Link>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '40px', color: '#828282' }}>
            Social media management services range from R10,000 per month for start-ups to R60,000 per month for enterprise-level companies.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="section" style={{ background: '#ba292c', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '30px', marginBottom: '20px' }}>
            Ready to Elevate Your Digital Presence?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Let us develop a winning go-to-market strategy for your business.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
