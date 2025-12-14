'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section section-gray" aria-labelledby="faq-heading">
      <div className="container" style={{ maxWidth: '800px' }}>
        <header className="section-heading">
          <h2 id="faq-heading">{title}</h2>
          <div style={{ width: '50px', height: '2px', background: '#ba292c', margin: '20px auto' }}></div>
        </header>

        <div style={{ marginTop: '40px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: '10px',
                border: '1px solid #eee',
                borderRadius: '4px',
                background: '#fff',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#303030'
                }}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ba292c"
                  strokeWidth="2"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    marginLeft: '15px'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease'
                }}
              >
                <p
                  style={{
                    padding: '0 20px 20px',
                    margin: 0,
                    lineHeight: 1.8,
                    color: '#828282'
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
