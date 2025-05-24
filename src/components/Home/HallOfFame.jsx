import './HallOfFame.css'

export default function HallOfFame() {
  const rankings = {
    activePlayers: [
      { name: "Lucas", score: 42 },
      { name: "Mariana", score: 38 },
      { name: "Pedro", score: 35 }
    ],
    masters: [
      { name: "Carlos", campaigns: 7 },
      { name: "Ana", campaigns: 5 },
      { name: "Ricardo", campaigns: 4 }
    ],
    enigmaSolvers: [
      { name: "Fernanda", solved: 15 },
      { name: "Rafael", solved: 12 },
      { name: "Juliana", solved: 10 }
    ]
  }

  return (
    <section className="home-section hall-of-fame">
      <h2 className="section-title">Hall da Fama</h2>
      <p className="section-subtitle">
        Destaques da comunidade Eco da Realidade
      </p>
      
      <div className="grid-container">
        <div className="ranking-card">
          <h3>🎖️ Jogadores Mais Ativos</h3>
          <ul>
            {rankings.activePlayers.map((player, index) => (
              <li key={index}>
                <span className="rank">{index + 1}.</span>
                <span className="name">{player.name}</span>
                <span className="score">{player.score} sessões</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ranking-card">
          <h3>🧙 Mestres com Mais Campanhas</h3>
          <ul>
            {rankings.masters.map((master, index) => (
              <li key={index}>
                <span className="rank">{index + 1}.</span>
                <span className="name">{master.name}</span>
                <span className="score">{master.campaigns} campanhas</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ranking-card">
          <h3>🔍 Resolvedores de Enigmas</h3>
          <ul>
            {rankings.enigmaSolvers.map((solver, index) => (
              <li key={index}>
                <span className="rank">{index + 1}.</span>
                <span className="name">{solver.name}</span>
                <span className="score">{solver.solved} enigmas</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}