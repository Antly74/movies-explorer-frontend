import { Link } from 'react-router-dom';
import InputWithValidation from '../InputWithValidation/InputWithValidation';
import './Profile.css';

function Profile() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__header">Привет, Виталий!</h2>
        <InputWithValidation inputStyle="profile" label="Имя" value="Виталий"/>
        <InputWithValidation inputStyle="profile" label="E-mail" value="pochta@yandex.ru"/>
        <button className="profile__submit link link_style_green" type="submit">Редактировать</button>
        <Link to="/signout" className="profile__signout link link_style_red">Выйти из аккаунта</Link>
      </form>
    </main>
  );
}

export default Profile;
