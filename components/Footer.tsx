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
          <p>Digital Transformation</p>
          <p>Business Architecture</p>
          <p>IT Project Management</p>
          <p>Digital Business Models</p>
          <p>IT Recruitment</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Palazzo Towers West</p>
          <p>William Nicol Drive</p>
          <p>Fourways, Johannesburg</p>
          <p>Gauteng 2086</p>
          <p style={{ marginTop: '10px' }}>
            <a href="mailto:info@outsourcedcto.co.za">info@outsourcedcto.co.za</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Outsourced CTO. All rights reserved.</p>
      </div>
    </footer>
  )
}
