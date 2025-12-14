import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'IT Recruitment Services',
  description: 'IT recruitment services in South Africa delivering highly qualified, best-in-class candidates, guaranteed. We recruit developers, architects, project managers, and IT executives.',
  keywords: [
    'IT recruitment South Africa',
    'tech recruitment Johannesburg',
    'software developer recruitment',
    'IT staffing',
    'CTO recruitment',
    'DevOps recruitment',
    'data scientist recruitment'
  ],
  openGraph: {
    title: 'IT Recruitment Services | Outsourced CTO',
    description: 'IT recruitment services delivering highly qualified, best-in-class candidates, guaranteed.',
    url: 'https://www.outsourcedcto.co.za/it-recruitment',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.outsourcedcto.co.za/it-recruitment',
  },
}

export default function ITRecruitment() {
  return (
    <>
      <ServiceSchema
        name="IT Recruitment Services"
        description="We deliver highly qualified, best-in-class IT candidates, guaranteed. From developers to CTO-level executives, we find the perfect match for your organization."
        url="https://www.outsourcedcto.co.za/it-recruitment"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.outsourcedcto.co.za' },
          { name: 'IT Recruitment', url: 'https://www.outsourcedcto.co.za/it-recruitment' }
        ]}
      />
      <FAQSchema
        faqs={[
          {
            question: "What IT roles do you recruit for?",
            answer: "We recruit for all IT roles including Software Developers (all levels and technologies), Solution Architects, Enterprise Architects, Project Managers, DevOps Engineers, Cloud Engineers, Data Scientists and Analysts, CTO and IT Executives, Business Analysts, and Cybersecurity Specialists."
          },
          {
            question: "What makes your IT recruitment guaranteed?",
            answer: "We stand behind our placements with a guarantee period. If a candidate doesn't work out within the agreed period, we'll find a replacement at no additional cost. This demonstrates our confidence in our rigorous screening process."
          },
          {
            question: "How does your recruitment process work?",
            answer: "Our process includes: understanding your requirements and culture, sourcing candidates from our extensive network, rigorous technical and cultural screening, presenting shortlisted candidates, supporting the interview process, managing offers and onboarding, and providing a guarantee period for all placements."
          },
          {
            question: "Do you offer LinkedIn profile optimization?",
            answer: "Yes, we help IT professionals optimize their LinkedIn profiles to stand out to recruiters and hiring managers. A well-crafted profile can significantly increase visibility and opportunities in the IT job market."
          },
          {
            question: "Do you provide salary benchmarking?",
            answer: "Yes, we offer salary benchmarking and market intelligence reports to help both employers and candidates understand current market rates for IT roles in South Africa."
          }
        ]}
      />

      <Header />

      <PageHero
        title="IT Recruitment"
        subtitle="We recruit the highly qualified and best-in-class candidates, guaranteed."
        backgroundImage="/images/slide3.png"
      />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

            <div className="content-block">
              <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#303030' }}>
                Best-in-Class IT Talent
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '20px' }}></div>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                Outsourced CTO offers IT recruitment services that deliver highly qualified, best-in-class
                candidates, guaranteed. Our extensive network and rigorous screening process ensure you
                get the right talent for your technology needs.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                Whether you&apos;re looking for developers, architects, project managers, or CTO-level
                executives, we have the expertise to find the perfect match for your organization.
              </p>
            </div>

            <div className="content-block">
              <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#303030' }}>
                Our Recruitment Process
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '20px' }}></div>
              <p style={{ marginBottom: '15px', lineHeight: 1.8 }}>
                We take the time to understand your business, culture, and specific requirements.
                Our hand-picked experts and extensive experience across industries allow us to
                identify candidates who will not only meet your technical requirements but also
                fit seamlessly into your organization.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                From initial screening to final placement, we manage the entire recruitment process
                to ensure a smooth and successful hire.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-heading">
            <h2>IT Roles We Recruit</h2>
            <div style={{ width: '50px', height: '2px', background: '#ba292c', margin: '20px auto' }}></div>
          </div>

          <div className="services-grid">
            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3>Software Developers</h3>
              <p>Full-stack, front-end, back-end developers across all major technologies and frameworks.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Solution Architects</h3>
              <p>Enterprise and solution architects who can design scalable, robust technology solutions.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Project Managers</h3>
              <p>Certified IT project managers with experience in Agile, Scrum, and traditional methodologies.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3>DevOps Engineers</h3>
              <p>Cloud and infrastructure specialists skilled in CI/CD, containerization, and automation.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Data Scientists & Analysts</h3>
              <p>Data professionals who can unlock insights and drive data-driven decision making.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>CTO & IT Executives</h3>
              <p>Senior technology leaders who can drive your organization&apos;s digital strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#303030' }}>
            Optimise Your LinkedIn Profile
          </h2>
          <div style={{ width: '50px', height: '2px', background: '#ba292c', margin: '0 auto 20px' }}></div>
          <p style={{ marginBottom: '30px', lineHeight: 1.8 }}>
            Are you looking for your next IT role? Let us help you optimize your LinkedIn profile
            to stand out to recruiters and hiring managers. A well-crafted profile can significantly
            increase your visibility and opportunities in the IT job market.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Profile Optimization Help
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#ba292c', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '30px', marginBottom: '20px' }}>
            Looking for IT Talent?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Let us find the best-in-class candidates for your technology team.
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
