import { motion } from 'framer-motion'
import { GiQuillInk, GiScrollQuill, GiSpellBook } from 'react-icons/gi'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "O sistema revolucionou minhas sessões como mestre! A integração de ferramentas é incrível.",
      author: "Carlos, Mestre há 3 anos",
      campaign: "O Segredo de Silent Hill",
      icon: <GiSpellBook className="testimonial-icon" />,
      accentColor: "#6a2cad"
    },
    {
      quote: "Nunca foi tão fácil criar e gerenciar personagens complexos. A experiência é totalmente imersiva.",
      author: "Ana, Jogadora",
      campaign: "Crônicas do Outro Lado",
      icon: <GiScrollQuill className="testimonial-icon" />,
      accentColor: "#e94560"
    },
    {
      quote: "Os enigmas integrados tornam as sessões muito mais dinâmicas e envolventes para todos os jogadores.",
      author: "Ricardo, Mestre",
      campaign: "A Ordem em São Paulo",
      icon: <GiQuillInk className="testimonial-icon" />,
      accentColor: "#1DB954"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
    }
  }

  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section 
      className="home-section testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="section-header">
        <GiQuillInk className="section-icon" />
        <motion.h2 className="section-title">
          Depoimentos
        </motion.h2>
        <motion.p className="section-subtitle">
          Veja o que a comunidade está dizendo sobre suas experiências
        </motion.p>
      </div>
      
      <motion.div className="grid-container" variants={containerVariants}>
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="testimonial-card"
            variants={cardVariants}
            whileHover="hover"
            style={{ '--accent-color': testimonial.accentColor }}
          >
            <div className="quote-decoration">
              <FaQuoteLeft className="quote-icon start" />
              <FaQuoteRight className="quote-icon end" />
            </div>
            <div className="testimonial-icon-container">
              {testimonial.icon}
            </div>
            <motion.blockquote variants={quoteVariants}>
              {testimonial.quote}
            </motion.blockquote>
            <div className="testimonial-author">
              <motion.strong variants={quoteVariants}>
                {testimonial.author}
              </motion.strong>
              <motion.span variants={quoteVariants}>
                {testimonial.campaign}
              </motion.span>
            </div>
            <div className="testimonial-glow" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}