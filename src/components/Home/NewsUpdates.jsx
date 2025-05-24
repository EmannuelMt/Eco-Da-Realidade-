import './NewsUpdates.css'

export default function NewsUpdates() {
  const updates = [
    {
      date: "15/06/2023",
      title: "Nova ferramenta de criação de NPCs",
      description: "MasterEntityCreator agora com mais opções de personalização"
    },
    {
      date: "10/06/2023",
      title: "Competição de Enigmas",
      description: "Participe e concorra a prêmios especiais"
    },
    {
      date: "05/06/2023",
      title: "Integração com Spotify",
      description: "Agora você pode sincronizar playlists diretamente"
    }
  ]

  return (
    <section className="home-section news-updates">
      <h2 className="section-title">Eventos e Atualizações</h2>
      <p className="section-subtitle">
        Fique por dentro das novidades do Eco da Realidade
      </p>
      
      <div className="updates-container">
        {updates.map((update, index) => (
          <div key={index} className="update-card">
            <div className="update-date">{update.date}</div>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}