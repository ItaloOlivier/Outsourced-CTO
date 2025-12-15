'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const slides = [
  {
    id: 1,
    image: '/images/slide1.png',
    title: 'Helping You To\nSucceed In\nToday\'s Digital World',
    description: 'The IT decisions you make today will either set you up for success or leave you behind. Whatever your needs might be, our tailored consulting solutions can become the catalyst for your digital transformation.',
    primaryBtn: { text: 'More About Digital Transformation', href: '/digital-transformation' },
    secondaryBtn: { text: 'Contact Us', href: '/contact' }
  },
  {
    id: 2,
    image: '/images/slide2.png',
    title: 'Spearhead Your\nDigital Marketing',
    description: 'Just like your own CTO, we will spearhead your digital marketing innovation by identifying new opportunities and guiding your strategic execution.',
    primaryBtn: { text: 'Digital Marketing', href: '/digital-marketing' },
    secondaryBtn: { text: 'Contact Us', href: '/contact' }
  },
  {
    id: 3,
    image: '/images/slide3.png',
    title: 'We recruit the\nhighly qualified and\nbest-in-class',
    description: 'Outsourced CTO also offers IT recruitment services that deliver highly qualified, best-in-class candidates, guaranteed.',
    primaryBtn: { text: 'IT Recruitment', href: '/it-recruitment' },
    secondaryBtn: { text: 'Contact Us', href: '/contact' },
    centered: true
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Header />

      {/* Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="slide-overlay" />
            <div className={`slide-content ${slide.centered ? 'centered-slide' : ''}`} style={slide.centered ? { maxWidth: '100%', alignItems: 'center', textAlign: 'center' } : {}}>
              <h1 style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="slide-buttons">
                <Link href={slide.primaryBtn.href} className="btn-primary">
                  {slide.primaryBtn.text}
                </Link>
                <Link href={slide.secondaryBtn.href} className="btn-secondary">
                  {slide.secondaryBtn.text}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation Dots */}
        <div className="slider-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Info Boxes Section - 3 Columns below slider */}
      <div className="info-boxes">
        <div className="info-box">
          <h3>Digital Transformation</h3>
          <p>We help companies identify the gaps between where they are now and where they need to be, then close them.</p>
        </div>
        <div className="info-box">
          <h3>Digital Marketing</h3>
          <p>Just like your own CTO, we will spearhead your digital marketing innovation by identifying new opportunities.</p>
        </div>
        <div className="info-box">
          <h3>IT Recruitment</h3>
          <p>Outsourced CTO offers IT recruitment services that deliver highly qualified, best-in-class candidates, guaranteed.</p>
        </div>
      </div>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Your Partner In IT Innovation</h2>
            <div style={{ width: '50px', height: '2px', background: '#ba292c', margin: '20px auto' }}></div>
            <p>
              At Outsourced CTO, our hand-picked experts and extensive experience across industries
              fuel our passion for IT and digital innovation.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-box">
              <div className="service-icon">
                <Image src="/images/strategy.png" alt="Digital Transformation" width={80} height={80} />
              </div>
              <h3>Digital Transformation</h3>
              <p>We help companies identify the gaps between where they are now and where they need to be, then close them.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Image src="/images/recruitment.png" alt="IT Recruitment" width={80} height={80} />
              </div>
              <h3>IT Recruitment</h3>
              <p>Delivering highly qualified, best-in-class candidates, guaranteed for your technology needs.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Image src="/images/marketing.png" alt="Digital Marketing" width={80} height={80} />
              </div>
              <h3>Digital Marketing</h3>
              <p>We implement lean methodologies to develop winning go-to-market strategies.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Business Architecture</h3>
              <p>Strategic alignment of business capabilities, processes, and technology to drive organizational efficiency.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3>IT Workflow & Business Analysis</h3>
              <p>Comprehensive analysis of your IT workflows and business processes to optimize operations.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>IT Programme/Project Management</h3>
              <p>Expert project management using Agile practices like DSDM, SCRUM, and SAFe methodologies.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Digital Business Models</h3>
              <p>Our MBA-qualified consultants develop innovative digital business models for today&apos;s dynamic era.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Capability Assessments & Roadmaps</h3>
              <p>Evaluate your current capabilities and create strategic roadmaps for technology investments.</p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                  <polyline points="23 4 23 10 17 10"/>
                  <polyline points="1 20 1 14 7 14"/>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
              </div>
              <h3>Organisational Change Management</h3>
              <p>We specialize in easing the transition into a streamlined digital business with the correct culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-stripe" style={{ background: '#ba292c', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '30px', marginBottom: '20px' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Whatever your needs might be, our tailored consulting solutions can become the catalyst for your digital transformation.
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
