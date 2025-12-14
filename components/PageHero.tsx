interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function PageHero({ title, subtitle, backgroundImage = '/images/slide1.png' }: PageHeroProps) {
  return (
    <section className="page-hero" style={{ marginTop: '100px' }}>
      <div
        className="page-hero-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          inset: 0
        }}
      />
      <div
        className="page-hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)'
        }}
      />
      <div
        className="page-hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '100px 30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <h1 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '42px',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '15px'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.6
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
