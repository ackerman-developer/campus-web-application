import "./base.css"

function App() {
  return (
    <div className='authorization'>
      <div className="box-authorization">
        <div className="sing-up">
          <img src='/img/logo_campus.svg' alt='campus_logo'/>
          <h1>Вход</h1>
        </div>
        <p className="login">Логин</p>
        <div className='sing-login'>
          <img src='/img/user_icon.svg' alt='user_icon'/>
          <input type={Text} placeholder="Введите ваш логин"></input>
        </div>
        <hr className="hr-login"></hr>
        <p className="password">Пароль</p>
        <div className='sing-password'>
          <img src='/img/password_icon.svg' alt='password_icon'/>
          <input type={"password"} placeholder="Введите ваш пароль"></input>
        </div>
        <hr className="hr-password"></hr>
        <div className='remember-me'>
          <input type={'checkbox'}></input>
          <p>Запомнить меня</p>
        </div>
        <div className='authorization1'>
          <button>Войти</button>
        </div>
        <a href="/registragion" className="text">Или зарегистрироваться</a>
      </div>
    </div>
  );
}

export default App;
