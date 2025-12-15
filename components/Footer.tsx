import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <Image
            src="/images/logo.png"
            alt="Outsourced CTO"
            width={200}
            height={50}
            style={{ marginBottom: '20px', filter: 'brightness(0) invert(1)' }}
          />
          <p>Your Partner In IT Innovation</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/digital-transformation">Digital Transformation</Link>
          <Link href="/digital-marketing">Digital Marketing</Link>
          <Link href="/it-recruitment">IT Recruitment</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/digital-transformation">Digital Transformation</Link>
          <Link href="/digital-marketing">Digital Marketing</Link>
          <Link href="/it-recruitment">IT Recruitment</Link>
          <p>Business Architecture</p>
          <p>IT Project Management</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>The Campus</p>
          <p>Corner of Main &amp; Sloane Street</p>
          <p>Bryanston, Johannesburg</p>
          <p>Gauteng 2021</p>
          <p style={{ marginTop: '10px' }}>
            <a href="mailto:italo@outsourcedcto.co.za">italo@outsourcedcto.co.za</a>
          </p>
          <p style={{ marginTop: '5px' }}>
            <a href="https://wa.me/27791922423" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
              WhatsApp: +27 79 192 2423
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Outsourced CTO. All rights reserved.</p>
      </div>
    </footer>
  )
}
