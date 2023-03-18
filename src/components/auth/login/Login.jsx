import React, {useState} from 'react'
import './login.css'


export const Login = (props) =>{
  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(login)
  }

  return(
    <div className='auth'>
      <form onSubmit={handleSubmit} className='box-auth'>
        <div className='sing-up'>
          <img src='/img/logo_campus.svg' alt='campus_logo'/>
          <h1>Вход</h1>
        </div>
        <label
            for="login"
            className='login'>Логин</label>
        <div className='sing-login'>
          <img src='/img/user_icon.svg' alt='user_icon'/>
          <input
            value={login} onChange={(e) => setLogin(e.target.value)}
            type='text'
            placeholder="Введите ваш логин">
          </input>
        </div>
        <hr className="hr-login"></hr>
        <label 
          for="pass" 
          className='password'>Пароль</label>
        <div className='sing-password'>
          <img src='/img/password_icon.svg' alt='password_icon'/>
          <input
            value={pass} onChange={(e) => setPass(e.target.value)} 
            type='password'
            placeholder="Введите ваш пароль">
          </input>
        </div>
        <hr className="hr-password"></hr>
        <div className='remember-me'>
          <input type={'checkbox'}></input>
          <p>Запомнить меня</p>
        </div>
        <div className='auth-btn'>
          <button
            type='submit'>Войти</button>
        </div>
        <div className='next'>
          <button
            onClick={() => props.onFormSwitch('register')}>Или зарегистрироваться</button>
        </div>
      </form>
    </div>
  )
}