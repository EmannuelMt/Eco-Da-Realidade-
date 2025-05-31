import { motion } from 'framer-motion'
import { GiSpiralArrow, GiAbstract024 } from 'react-icons/gi'
import './Partners.css'

export default function Partners() {
  const partners = [
    { 
      name: "MongoDB", 
      logo: "/partners/mongodb.svg",
      description: "Banco de dados NoSQL para armazenamento flexível",
      color: "#13AA52"
    },
    { 
      name: "Google OAuth", 
      logo: "/partners/google.svg",
      description: "Autenticação segura com contas Google",
      color: "#4285F4"
    },
    { 
      name: "Spotify", 
      logo: "/partners/spotify.svg",
      description: "Integração de playlists para ambientação",
      color: "#1DB954"
    },
    { 
      name: "Vercel", 
      logo: "/partners/vercel.svg",
      description: "Hospedagem e deploy contínuo",
      color: "#000000"
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

  const itemVariants = {
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
      scale: 1.05
    }
  }

  return (
    <motion.section 
      className="home-section partners"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="section-header">
        <GiSpiralArrow className="section-icon" />
        <motion.h2 className="section-title">
          Parceiros & Integrações
        </motion.h2>
        <motion.p className="section-subtitle">
          Tecnologias que tornam o Eco da Realidade possível
        </motion.p>
      </div>
      
      <motion.div className="partners-grid" variants={containerVariants}>
        {partners.map((partner, index) => (
          <motion.div 
            key={index}
            className="partner-card"
            variants={itemVariants}
            whileHover="hover"
            style={{ '--partner-color': partner.color }}
          >
            <div className="logo-container">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="partner-logo"
                loading="lazy"
              />
              <div className="logo-glow" />
            </div>
            <div className="partner-info">
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
            <GiAbstract024 className="abstract-decoration" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}