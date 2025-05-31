import { motion } from 'framer-motion'
import { 
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaDiceD20,
  FaUserShield,
  FaExchangeAlt,
  FaPuzzlePiece
} from 'react-icons/fa'
import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const questions = [
    {
      question: "Como criar uma campanha?",
      answer: "Basta acessar seu painel como Mestre e clicar em 'Nova Campanha'. Você pode configurar todos os detalhes da aventura, adicionar jogadores e definir as regras específicas.",
      icon: <FaDiceD20 />
    },
    {
      question: "O sistema é pago?",
      answer: "Nao o sistema e totalmente gratuito.",
      icon: <FaUserShield />
    },
    {
      question: "Como mudar de papel (Mestre/Jogador)?",
      answer: "Nas configurações do seu perfil, você pode alternar entre os papéis. Como Mestre, você terá acesso ao painel de criação; como Jogador, verá as campanhas disponíveis.",
      icon: <FaExchangeAlt />
    },
    {
      question: "Como resolver enigmas?",
      answer: "Na seção de Enigmas, escolha um desafio, analise as pistas e envie sua solução. O mestre da campanha avaliará sua resposta. Enigmas resolvidos dão pontos de experiência!",
      icon: <FaPuzzlePiece />
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
    <section className="home-section faq" id="faq">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Perguntas Frequentes
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Encontre respostas para as dúvidas mais comuns sobre o sistema
        </motion.p>
      </div>
      
      <motion.div 
        className="faq-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {questions.map((item, index) => (
          <motion.div 
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            variants={itemVariants}
          >
            <div 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-icon">
                {item.icon}
              </div>
              <h3>{item.question}</h3>
              <div className="faq-toggle">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? 'auto' : 0,
                opacity: activeIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p>{item.answer}</p>
            </motion.div>
            
            <div className="faq-decoration"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}