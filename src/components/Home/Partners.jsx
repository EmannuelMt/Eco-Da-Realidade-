import './Partners.css'

export default function Partners() {
  const partners = [
    { name: "MongoDB", logo: "/partners/mongodb.svg" },
    { name: "Google OAuth", logo: "/partners/google.svg" },
    { name: "Spotify", logo: "/partners/spotify.svg" },
    { name: "Vercel", logo: "/partners/vercel.svg" }
  ]

  return (
    <section className="home-section partners">
      <h2 className="section-title">Parceiros & Integrações</h2>
      <p className="section-subtitle">
        Tecnologias que tornam o Eco da Realidade possível
      </p>
      
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              title={partner.name}
            />
          </div>
        ))}
      </div>
    </section>
  )
}