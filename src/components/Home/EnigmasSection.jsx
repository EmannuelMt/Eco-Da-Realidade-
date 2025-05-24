import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaSearch,
  FaPuzzlePiece,
  FaArrowRight,
  FaLock,
  FaEye
} from 'react-icons/fa'
import './EnigmasSection.css'

export default function EnigmasSection() {
  const enigmas = [
    {
      id: 47,
      title: "O Caso do Espelho Quebrado",
      description: "Reflexos que não correspondem à realidade... o que está do outro lado?",
      difficulty: "Difícil",
      category: "Objetos Amaldiçoados",
      solved: false
    },
    {
      id: 48,
      title: "A Melodia do Outro Lado",
      description: "Uma música que ecoa de lugares vazios. Quem ou o que está cantando?",
      difficulty: "Médio",
      category: "Manifestações Sonoras",
      solved: true
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
        ease: "backOut"
      }
    }
  }

  return (
    <section className="home-section enigmas-section" id="enigmas">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Últimas Descobertas
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/enigmas" className="view-all">
            Ver Todos <FaArrowRight className="inline ml-1" />
          </Link>
        </motion.div>
      </div>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        "Novos enigmas foram descobertos. Está pronto para investigar?"
      </motion.p>
      
      <motion.div 
        className="enigmas-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {enigmas.map((enigma) => (
          <motion.div 
            key={enigma.id}
            className="enigma-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="enigma-header">
              <div className="enigma-icon">
                <FaPuzzlePiece />
              </div>
              <div className="enigma-meta">
                <span className="difficulty">{enigma.difficulty}</span>
                <span className="category">{enigma.category}</span>
              </div>
              {enigma.solved ? (
                <div className="solved-badge">
                  <FaEye /> Resolvido
                </div>
              ) : (
                <div className="unsolved-badge">
                  <FaLock /> Pendente
                </div>
              )}
            </div>
            
            <h3>Enigma #{enigma.id}</h3>
            <h4>{enigma.title}</h4>
            <p>{enigma.description}</p>
            
            <motion.div whileHover={{ x: 5 }}>
              <Link to={`/enigmas/${enigma.id}`} className="enigma-link">
                Investigar <FaSearch className="inline ml-1" />
              </Link>
            </motion.div>
            
            <div className="enigma-decoration"></div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <Link to="/enigmas" className="cta-button">
          Explorar Todos os Enigmas <FaArrowRight className="inline ml-2" />
        </Link>
      </motion.div>
    </section>
  )
}