import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de login será implementada depois
    console.log('Dados do login:', formData)
  }

  return (
    <div className="auth-container">
      <h2>Entrar no Eco da Realidade</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="auth-btn">
          Entrar
        </button>

        <div className="auth-links">
          <span>Não tem uma conta? </span>
          <Link to="/register">Registre-se</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm  // Exportação como default