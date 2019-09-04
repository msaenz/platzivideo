import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Registrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre"/>
        <input className="input" type="text" placeholder="Correo"/>
        <input className="input" type="password" placeholder="Contraseña"/>
        <button className="button">Registrarme</button>
        <div className="register__container--remember-me">
          <Link to='login'>
            Iniciar Sesión
          </Link>
        </div>
      </form>
    </section>
  </section>
)

export default Register
