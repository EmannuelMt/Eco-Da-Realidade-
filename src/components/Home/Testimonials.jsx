import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "O sistema revolucionou minhas sessões como mestre!",
      author: "Carlos, Mestre há 3 anos",
      campaign: "O Segredo de Silent Hill"
    },
    {
      quote: "Nunca foi tão fácil criar e gerenciar personagens complexos.",
      author: "Ana, Jogadora",
      campaign: "Crônicas do Outro Lado"
    },
    {
      quote: "Os enigmas integrados tornam as sessões muito mais imersivas.",
      author: "Ricardo, Mestre",
      campaign: "A Ordem em São Paulo"
    }
  ]

  return (
    <section className="home-section testimonials">
      <h2 className="section-title">Depoimentos</h2>
      <p className="section-subtitle">
        Veja o que a comunidade está dizendo sobre suas experiências
      </p>
      
      <div className="grid-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <blockquote>"{testimonial.quote}"</blockquote>
            <div className="testimonial-author">
              <strong>{testimonial.author}</strong>
              <span>{testimonial.campaign}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}