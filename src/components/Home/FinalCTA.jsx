import { Link } from 'react-router-dom'
import { GiSpellBook, GiCrystalBall, GiScrollQuill, GiCube } from 'react-icons/gi'
import { FaDiscord, FaHeadset, FaHome, FaBookDead, FaPuzzlePiece, FaRegCopyright, FaUsers, FaStore } from 'react-icons/fa'
import { RiCustomerService2Line } from 'react-icons/ri'
import { motion } from 'framer-motion'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <>
      {/* Seção CTA Principal */}
      <motion.section 
        className="home-section final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="cta-container glass-effect">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <div className="title-wrapper">
              <GiSpellBook className="icon-sparkle" />
              <h2 className="pulse-animation">Pronto para criar sua história?</h2>
              <GiCrystalBall className="icon-sparkle" />
            </div>
            
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Junte-se a centenas de jogadores e mestres agora e comece sua jornada no Outro Lado
            </motion.p>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/register" className="cta-button large gradient-hover">
                Criar Conta
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer Premium */}
      <footer className="premium-footer">
        <div className="footer-wave"></div>
        
        <div className="footer-content">
          {/* Coluna Branding */}
          <div className="footer-brand">
            <div className="logo-wrapper">
              <GiCrystalBall className="footer-logo" />
              <span className="logo-glow"></span>
            </div>
            <h3>Outro Lado</h3>
            <p className="footer-slogan">Onde histórias ganham vida</p>
            
            <div className="social-links">
              <motion.a 
                href="https://discord.gg/seulink" 
                target="_blank"
                whileHover={{ y: -3 }}
                className="social-icon discord"
              >
                <FaDiscord />
              </motion.a>
              {/* Adicione mais redes sociais conforme necessário */}
            </div>
          </div>

          {/* Colunas de Links */}
          <div className="footer-links-grid">
            {/* Navegação */}
            <div className="links-column">
              <h4 className="column-title">
                <GiCube className="column-icon" />
                Navegação
              </h4>
              <ul>
                <li><Link to="/"><FaHome /> Início</Link></li>
                <li><Link to="/campaigns"><FaBookDead /> Campanhas</Link></li>
                <li><Link to="/grimoire"><GiSpellBook /> Grimório</Link></li>
                <li><Link to="/enigmas"><FaPuzzlePiece /> Enigmas</Link></li>
              </ul>
            </div>

            {/* Recursos */}
            <div className="links-column">
              <h4 className="column-title">
                <GiScrollQuill className="column-icon" />
                Recursos
              </h4>
              <ul>
                <li><Link to="/entities"><GiCrystalBall /> Entidades</Link></li>
                <li><Link to="/rules"><GiScrollQuill /> Regras</Link></li>
                <li><Link to="/characters"><FaUsers /> Personagens</Link></li>
                <li><Link to="/market"><FaStore /> Mercado</Link></li>
              </ul>
            </div>

            {/* Suporte */}
            <div className="links-column">
              <h4 className="column-title">
                <RiCustomerService2Line className="column-icon" />
                Suporte
              </h4>
              <ul>
                <li><Link to="/support"><FaHeadset /> Central de Ajuda</Link></li>
                <li><Link to="/contact"><FaHeadset /> Contato</Link></li>
                <li><Link to="/faq"><FaHeadset /> FAQ</Link></li>
                <li><Link to="/terms"><FaHeadset /> Termos</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <div className="copyright">
            <FaRegCopyright /> {new Date().getFullYear()} Outro Lado RPG. Todos os direitos reservados.
          </div>
          <div className="legal-links">
            <Link to="/privacy">Privacidade</Link>
            <Link to="/terms">Termos</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    </>
  )
}