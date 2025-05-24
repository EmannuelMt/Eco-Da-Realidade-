import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaBook,
  FaUserTie,
  FaPuzzlePiece,
  FaArrowRight,
  FaCalendarAlt
} from 'react-icons/fa'
import './BlogPreview.css'

export default function BlogPreview() {
  const articles = [
    {
      id: 1,
      title: "10 Dicas para Mestres Iniciantes",
      excerpt: "Aprenda técnicas para melhorar suas narrativas e sessões com lições de mestres experientes.",
      category: "Mestrado",
      date: "12/06/2023",
      icon: <FaUserTie />
    },
    {
      id: 2,
      title: "Criando Personagens Memoráveis",
      excerpt: "Desenvolva personagens complexos que cativam seus jogadores e enriquecem a narrativa.",
      category: "Personagens",
      date: "05/06/2023",
      icon: <FaBook />
    },
    {
      id: 3,
      title: "O Impacto dos Enigmas na Narrativa",
      excerpt: "Como integrar enigmas de forma orgânica para aprofundar o mistério e engajar os jogadores.",
      category: "Narrativa",
      date: "28/05/2023",
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
    <section className="home-section blog-preview" id="blog">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Blog & Notícias
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/blog" className="view-all">
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
        Artigos e dicas para elevar suas experiências de RPG paranormal
      </motion.p>
      
      <motion.div 
        className="grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {articles.map(article => (
          <motion.article 
            key={article.id}
            className="article-card"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="article-header">
              <div className="article-icon">
                {article.icon}
              </div>
              <div className="article-meta">
                <span className="category">{article.category}</span>
                <span className="date">
                  <FaCalendarAlt className="inline mr-1" />
                  {article.date}
                </span>
              </div>
            </div>
            
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            
            <motion.div whileHover={{ x: 5 }}>
              <Link to={`/blog/${article.id}`} className="read-more">
                Ler Mais <FaArrowRight className="inline" />
              </Link>
            </motion.div>
            
            <div className="article-decoration"></div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}