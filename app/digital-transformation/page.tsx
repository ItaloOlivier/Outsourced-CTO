import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/StructuredData'
import FAQSection from '@/components/FAQSection'

const faqs = [
  {
    question: "What is digital transformation?",
    answer: "Digital transformation is the process of using digital technologies to fundamentally change how your business operates and delivers value to customers. It involves re-engineering processes, adopting new technology platforms, and developing new digital capabilities to stay competitive in today's rapidly evolving market."
  },
  {
    question: "How long does a digital transformation project typically take?",
    answer: "The duration varies significantly depending on scope and complexity. A targeted improvement project might take 3-6 months, while a comprehensive enterprise-wide transformation can span 1-3 years. We work with you to develop phased roadmaps that deliver value incrementally."
  },
  {
    question: "What methodologies do you use for digital transformation?",
    answer: "We employ Agile practices including DSDM, SCRUM, and SAFe (Scaled Agile Framework) to ensure iterative delivery, flexibility, and continuous improvement throughout your transformation journey."
  },
  {
    question: "How do you assess our current digital capabilities?",
    answer: "We use industry-standard maturity models to assess your current capabilities across technology, processes, and people. This includes skills gap analysis, technology capability assessments, and can incorporate Meyers-Briggs testing to optimize team dynamics."
  },
  {
    question: "What industries do you serve for digital transformation?",
    answer: "We serve all industries across South Africa. Our cross-industry experience means we bring fresh perspectives and proven patterns from various sectors, helping you benefit from innovations that have worked elsewhere."
  }
]

export const metadata: Metadata = {
  title: 'Digital Transformation Services',
  description: 'Expert digital transformation consulting in South Africa. We help companies identify gaps and develop customized IT programmes using Agile, SCRUM, and SAFe methodologies.',
  keywords: [
    'digital transformation South Africa',
    'IT transformation consulting',
    'business process improvement',
    'Agile transformation',
    'change management',
    'capability assessment',
    'IT roadmap',
    'digital strategy'
  ],
  openGraph: {
    title: 'Digital Transformation Services | Outsourced CTO',
    description: 'Expert digital transformation consulting. We help companies identify gaps and develop customized transformation programmes.',
    url: 'https://www.outsourcedcto.co.za/digital-transformation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.outsourcedcto.co.za/digital-transformation',
  },
}

export default function DigitalTransformation() {
  return (
    <>
      <ServiceSchema
        name="Digital Transformation Consulting"
        description="We help companies identify the gaps between where they are now and where they need to be, then close them with customized digital transformation programmes."
        url="https://www.outsourcedcto.co.za/digital-transformation"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.outsourcedcto.co.za' },
          { name: 'Digital Transformation', url: 'https://www.outsourcedcto.co.za/digital-transformation' }
        ]}
      />
      <FAQSchema faqs={faqs} />

      <Header />

      <PageHero
        title="Digital Transformation"
        subtitle="The IT decisions you make today will either set you up for success or leave you behind."
        backgroundImage="/images/slide1.png"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

            <article className="content-block">
              <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#303030' }}>
                Your Partner in Digital Evolution
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '20px' }}></div>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                New digital technologies are emerging at an unprecedented rate and changing the way we work and live.
                The IT decisions you make today will either set you up for success or leave you behind.
              </p>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                Whatever your needs might be, our tailored consulting solutions can become the catalyst for your
                digital transformation. By taking on any of the various roles of your Chief Technology Officer,
                we become your partners in IT innovation to provide expert advice along every step in your
                transformation journey.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                Outsourced CTO helps companies identify the gaps between where they are now and where they need
                to be, then closes them. Whether you need to re-engineer every process and skillset, or simply
                move to a new technology platform, we work closely with our clients to develop completely
                customised programmes.
              </p>
            </article>

            <article className="content-block">
              <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#303030' }}>
                Capability Assessments & Roadmaps
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '20px' }}></div>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                Optimised team structures and skill sets are key to digital transformation success. We assess
                current capabilities and develop strategic IT road maps to empower team dynamics.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                Our assessments focus on industry standard maturity models, but can also include Meyers-Briggs
                testing to ensure your team is positioned for maximum effectiveness.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-gray" aria-labelledby="services-heading">
        <div className="container">
          <header className="section-heading">
            <h2 id="services-heading">Our Digital Transformation Services</h2>
            <div style={{ width: '50px', height: '2px', background: '#ba292c', margin: '20px auto' }}></div>
          </header>

          <div className="services-grid" role="list">
            <article className="service-box" role="listitem">
              <div className="service-icon" aria-hidden="true">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Business Architecture</h3>
              <p>Strategic alignment of business capabilities, processes, and technology to drive organizational efficiency.</p>
            </article>

            <article className="service-box" role="listitem">
              <div className="service-icon" aria-hidden="true">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3>IT Workflow & Business Analysis</h3>
              <p>Comprehensive analysis of your IT workflows and business processes to optimize operations and reduce inefficiencies.</p>
            </article>

            <article className="service-box" role="listitem">
              <div className="service-icon" aria-hidden="true">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>IT Programme/Project Management</h3>
              <p>Expert project management using Agile practices like DSDM, SCRUM, and SAFe to ensure delivery on-time and within budget.</p>
            </article>

            <article className="service-box" role="listitem">
              <div className="service-icon" aria-hidden="true">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Digital Business Models</h3>
              <p>Our MBA-qualified consultants develop innovative digital business models to build a thriving business in today&apos;s dynamic era.</p>
            </article>

            <article className="service-box" role="listitem">
              <div className="service-icon" aria-hidden="true">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Capability Assessments</h3>
              <p>Evaluate your current capabilities and create strategic roadmaps that guide your technology investments.</p>
            </article>

            <article className="service-box" role="listitem">
              <div className="service-icon" aria-hidden="true">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <polyline points="23 4 23 10 17 10"/>
                  <polyline points="1 20 1 14 7 14"/>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
              </div>
              <h3>Organisational Change Management</h3>
              <p>The hardest part of digital transformation is establishing the correct culture. We specialize in easing the transition.</p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Section */}
      <section className="section" style={{ background: '#ba292c', textAlign: 'center' }} aria-labelledby="cta-heading">
        <div className="container">
          <h2 id="cta-heading" style={{ color: '#fff', fontSize: '30px', marginBottom: '20px' }}>
            Ready to Start Your Transformation?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Let us help you navigate the digital landscape and unlock your organization&apos;s full potential.
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
