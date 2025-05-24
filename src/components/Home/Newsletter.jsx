import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="home-section newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="section-title">Receba Novidades</h2>
          <p className="section-subtitle">
            Assine nossa newsletter e fique por dentro das atualizações e conteúdos exclusivos
          </p>
          
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              required 
            />
            <button type="submit" className="cta-button">
              Quero Receber Novidades!
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}