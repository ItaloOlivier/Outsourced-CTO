'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - you can integrate with an API or email service
    alert('Thank you for your message. We will get back to you soon!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />

      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us to discuss how we can help your business succeed."
        backgroundImage="/images/slide1.png"
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#303030' }}>
                Get In Touch
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '30px' }}></div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#303030' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="2" style={{ marginRight: '10px', verticalAlign: 'middle' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Our Office
                </h3>
                <p style={{ color: '#828282', lineHeight: 1.8, paddingLeft: '30px' }}>
                  Palazzo Towers West<br />
                  William Nicol Drive<br />
                  Fourways, Johannesburg<br />
                  Gauteng 2086<br />
                  South Africa
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#303030' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="2" style={{ marginRight: '10px', verticalAlign: 'middle' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email Us
                </h3>
                <p style={{ paddingLeft: '30px' }}>
                  <a href="mailto:info@outsourcedcto.co.za" style={{ color: '#ba292c', textDecoration: 'none' }}>
                    info@outsourcedcto.co.za
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#303030' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ba292c" strokeWidth="2" style={{ marginRight: '10px', verticalAlign: 'middle' }}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  Follow Us
                </h3>
                <p style={{ paddingLeft: '30px' }}>
                  <a
                    href="https://za.linkedin.com/company/outsourcedcto"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ba292c', textDecoration: 'none' }}
                  >
                    LinkedIn
                  </a>
                </p>
              </div>

              <div style={{ marginTop: '40px', padding: '30px', background: '#f7f7f7' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '15px', color: '#303030' }}>
                  Business Hours
                </h3>
                <p style={{ color: '#828282', lineHeight: 1.8 }}>
                  Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#303030' }}>
                Send Us A Message
              </h2>
              <div style={{ width: '50px', height: '2px', background: '#ba292c', marginBottom: '30px' }}></div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#303030' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      fontSize: '15px',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#303030' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      fontSize: '15px',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#303030' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      fontSize: '15px',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="company" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#303030' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      fontSize: '15px',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#303030' }}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #ddd',
                      fontSize: '15px',
                      resize: 'vertical',
                      transition: 'border-color 0.3s'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', cursor: 'pointer' }}
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '400px', background: '#f7f7f7' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7776060547613!2d28.01385731502699!3d-26.02406298349846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957329c3c3c3c3%3A0x0!2sWilliam%20Nicol%20Drive%2C%20Fourways%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1629876543210!5m2!1sen!2sza"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
    </>
  )
}
