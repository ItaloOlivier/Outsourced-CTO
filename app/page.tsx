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

      {/* What We Do Section */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>What We Do</h2>
            <div className="heading-line-turquoise"></div>
            <p>
              At Outsourced CTO, our hand-picked experts and extensive experience across industries
              fuel our passion for IT and digital innovation.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="service-box" style={{ border: '1px solid #e8e8e8' }}>
              <div className="service-icon">
                <Image src="/images/strategy.png" alt="Digital Transformation" width={80} height={80} />
              </div>
              <h3>Digital Transformation</h3>
              <p>We help companies identify the gaps between where they are now and where they need to be, then close them.</p>
              <Link href="/digital-transformation" className="read-more">Read More</Link>
            </div>

            <div className="service-box" style={{ border: '1px solid #e8e8e8' }}>
              <div className="service-icon">
                <Image src="/images/recruitment.png" alt="IT Recruitment" width={80} height={80} />
              </div>
              <h3>IT Recruitment</h3>
              <p>Delivering highly qualified, best-in-class candidates, guaranteed for your technology needs.</p>
              <Link href="/it-recruitment" className="read-more">Read More</Link>
            </div>

            <div className="service-box" style={{ border: '1px solid #e8e8e8' }}>
              <div className="service-icon">
                <Image src="/images/marketing.png" alt="Digital Marketing" width={80} height={80} />
              </div>
              <h3>Digital Marketing</h3>
              <p>We implement lean methodologies to develop winning go-to-market strategies.</p>
              <Link href="/digital-marketing" className="read-more">Read More</Link>
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
