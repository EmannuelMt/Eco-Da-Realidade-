import './FAQ.css'

export default function FAQ() {
  const questions = [
    {
      question: "Como criar uma campanha?",
      answer: "Basta acessar seu painel como Mestre e clicar em 'Nova Campanha'."
    },
    {
      question: "O sistema é pago?",
      answer: "Temos um plano gratuito com todas as funcionalidades básicas e planos premium com vantagens adicionais."
    },
    {
      question: "Como mudar de papel (Mestre/Jogador)?",
      answer: "Você pode alternar entre os papéis nas configurações do seu perfil."
    },
    {
      question: "Como resolver enigmas?",
      answer: "Acesse a seção de Enigmas, escolha um desafio e envie sua solução para avaliação."
    }
  ]

  return (
    <section className="home-section faq">
      <h2 className="section-title">Perguntas Frequentes</h2>
      <p className="section-subtitle">
        Encontre respostas para as dúvidas mais comuns
      </p>
      
      <div className="faq-grid">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}