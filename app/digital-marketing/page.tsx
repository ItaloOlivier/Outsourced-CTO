import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Marketing | Outsourced CTO',
  description: 'We spearhead your digital marketing innovation by identifying new opportunities and guiding your strategic execution.',
}

export default function DigitalMarketing() {
  return (
    <>
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
                R5,000
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
                R12,000
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
                R25,000
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
