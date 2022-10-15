import { Link } from 'react-router-dom';
import InputWithValidation from '../InputWithValidation/InputWithValidation';
import LogoLink from '../LogoLink/LogoLink';
import './Auth.css';

function Auth({formStyle}) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="auth">
      <LogoLink />
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__header">{formStyle === 'login' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
        {formStyle === 'login' ? '' : <InputWithValidation inputStyle="auth" label="Имя" value="Виталий" type="text"/>}
        <InputWithValidation inputStyle="auth" label="E-mail" value="pochta@yandex.ru" type="email"/>
        <InputWithValidation inputStyle="auth" label="Пароль" value="здесь пароль" type="password"/>
        <button className="auth__submit link link_style_blue" type="submit">
          {formStyle === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </button>
        <div className="auth__question">
          <p className="auth__question-text">{formStyle === 'login' ? 'Еще не зарегистрированы?' : 'Уже зарегистрированы?'}</p>
          <Link to={formStyle === 'login' ? '/signup' : '/signin'} className="auth__question-link link link_style_blue">{formStyle === 'login' ? 'Регистрация' : 'Войти'}</Link>
        </div>
      </form>
    </main>
  );
}

export default Auth;
