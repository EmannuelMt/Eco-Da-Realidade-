import { motion } from 'framer-motion'
import { 
  FaSkull,
  FaUsers,
  FaCalendarAlt,
  FaDiceD20,
  FaBookDead,
  FaArrowRight,
  FaUserAlt  // Substituindo FaUserTie por FaUserAlt
} from 'react-icons/fa'
import { GiSpellBook, GiStonePath } from 'react-icons/gi'
import './FeaturedCampaigns.css'

const campaigns = [
  {
    id: 1,
    title: "O Segredo de Silent Hill",
    master: "Carlos Oliveira",
    players: 5,
    sessions: 12,
    nex: "65%",
    image: "https://i.imgur.com/JXQ2z9T.jpg",
    tags: ["Horror", "Mistério", "Sobrevivência"]
  },
  {
    id: 2,
    title: "Crônicas do Outro Lado",
    master: "Ana Beatriz",
    players: 4,
    sessions: 8,
    nex: "40%",
    image: "https://i.imgur.com/JXQ2z9T.jpg",
    tags: ["Investigação", "Ocultismo", "Drama"]
  },
  {
    id: 3,
    title: "A Ordem em São Paulo",
    master: "Ricardo Silva",
    players: 6,
    sessions: 15,
    nex: "80%",
    image: "https://i.imgur.com/JXQ2z9T.jpg",
    tags: ["Ação", "Urban Fantasy", "Conspiração"]
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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  }
}

export default function FeaturedCampaigns() {
  return (
    <section className="featured-campaigns" id="campanhas">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Campanhas em Destaque
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore aventuras paranormais que estão fazendo sucesso na comunidade
        </motion.p>
      </div>

      <motion.div 
        className="campaigns-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {campaigns.map((campaign) => (
          <motion.div 
            key={campaign.id}
            className="campaign-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div 
              className="campaign-image"
              style={{ backgroundImage: `url(${campaign.image})` }}
            >
              <div className="campaign-overlay">
                <div className="campaign-tags">
                  {campaign.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{campaign.title}</h3>
              </div>
            </div>
            
            <div className="campaign-content">
              <div className="campaign-stats">
                <div className="stat">
                  <FaUserAlt className="stat-icon" />  {/* Alterado para FaUserAlt */}
                  <span>{campaign.master}</span>
                </div>
                
                <div className="stat-group">
                  <div className="stat">
                    <FaUsers className="stat-icon" />
                    <span>{campaign.players} Jogadores</span>
                  </div>
                  
                  <div className="stat">
                    <FaCalendarAlt className="stat-icon" />
                    <span>{campaign.sessions} Sessões</span>
                  </div>
                  
                  <div className="stat">
                    <FaDiceD20 className="stat-icon" />
                    <span>NEX {campaign.nex}</span>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="campaign-cta"
                whileHover={{ x: 5 }}
              >
                <span>Explorar Campanha</span>
                <FaArrowRight className="arrow-icon" />
              </motion.div>
            </div>
            
            <div className="campaign-decoration">
              <GiSpellBook className="decoration-icon" />
              <div className="ink-blot"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}