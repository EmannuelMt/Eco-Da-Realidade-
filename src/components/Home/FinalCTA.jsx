import { Link } from 'react-router-dom'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="home-section final-cta">
      <div className="cta-container">
        <h2>Pronto para criar sua história?</h2>
        <p>
          Junte-se a centenas de jogadores e mestres agora e comece sua jornada no Outro Lado
        </p>
        <Link to="/register" className="cta-button large">
          Criar Conta
        </Link>
      </div>
    </section>
  )
}