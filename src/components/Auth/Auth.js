import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { auth } from '../../utils/Auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import InputWithValidation from '../InputWithValidation/InputWithValidation';
import LogoLink from '../LogoLink/LogoLink';
import './Auth.css';

function Auth({formStyle, onSubmit}) {

  const {values, handleInput, errors, isValid, resetForm} = useFormAndValidation();
  const [flagsInfoTooltip, setFlagsInfoTooltip] = useState({isOpen: false, isOk: false, message: ''});

  useEffect(() => {

  }, [])

  useEffect(() => {
    resetForm();
  }, [formStyle, resetForm]);

  function openInfoTooltip (isOk, message, onClose) {

    // ставим таймер на автоматическое закрытие
    const closeTimer = setTimeout(() => {
      setFlagsInfoTooltip(curr => {
        if (curr.isOpen) {
          if (curr.isOk) {
            setTimeout(() => onSubmit(), 0);
          }
          return {isOpen: false, isOk: curr.isOk, message, closeTimer: null, onClose: null}
        } else {
          return curr; // иначе возвращаем то же самое, чтобы не перерисовывалось
        }
      });
    }, 4000);

    setFlagsInfoTooltip({isOk, isOpen: true, message, closeTimer, onClose});
  }

  function closeInfoTooltip() {
    setFlagsInfoTooltip(curr => {
      if (curr.closeTimer) {
        clearTimeout(curr.closeTimer); // очищаем таймер, если пользователь вперед нажал кнопку закрытия
      }
      if (curr.isOk) {
        setTimeout(() => onSubmit(), 0);
      }
      return {...curr, isOpen: false, closeTimer: null, onClose: null}
    });
  }

  function handleRegister({name, email, password}) {
    auth.register({name, email, password})
      .then(() => {
        openInfoTooltip(true, 'Вы успешно зарегистрировались!');
      })
      .catch((err) => {
        openInfoTooltip(false, err);
      });
  }

  function handleLogin({email, password}, onEndLoading) {
    auth.login({email, password})
      .then((data) => {
        openInfoTooltip(true, 'Вы успешно вошли!');
      })
      .catch((err) => {
        openInfoTooltip(false, err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formStyle === 'login') {
      handleLogin(values)
    } else {
      handleRegister(values)
    }
  }

  return (
    <main className="auth">
      <LogoLink />
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__header">{formStyle === 'login' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
        {formStyle === 'login' ? '' :
          <InputWithValidation inputStyle="auth" onInputEvent={handleInput} type="text"
            placeholder="введите Ваше имя" minLength="2" maxLength="30" required
            label="Имя" id="name" value={values.name || ''} errorText={errors.name}
          />
        }
        <InputWithValidation inputStyle="auth" onInputEvent={handleInput} type="email"
          placeholder="введите email" required
          label="E-mail" id="email" value={values.email || ''} errorText={errors.email}
        />
        <InputWithValidation inputStyle="auth" onInputEvent={handleInput} type="password"
          required
          label="Пароль" id="password" value={values.password || ''} errorText={errors.password}
        />
        <button className="auth__submit link link_style_blue" type="submit" disabled={!isValid}>
          {formStyle === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </button>
        <div className="auth__question">
          <p className="auth__question-text">{formStyle === 'login' ? 'Еще не зарегистрированы?' : 'Уже зарегистрированы?'}</p>
          <Link to={formStyle === 'login' ? '/signup' : '/signin'} className="auth__question-link link link_style_blue">{formStyle === 'login' ? 'Регистрация' : 'Войти'}</Link>
        </div>
      </form>
      <InfoTooltip
          isOpen={flagsInfoTooltip.isOpen}
          isOk={flagsInfoTooltip.isOk}
          message={flagsInfoTooltip.message}
          onClose={closeInfoTooltip}
        />
    </main>
  );
}

export default Auth;
