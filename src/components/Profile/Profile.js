import { Link } from 'react-router-dom';
import InputWithValidation from '../InputWithValidation/InputWithValidation';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';
import { useContext, useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useInfoTooltip } from '../../hooks/useInfoTooltip';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { auth } from '../../utils/Auth';

function Profile({onChange}) {

  const currentUser = useContext(CurrentUserContext);
  const {values, handleInput, errors, isValid, resetForm} = useFormAndValidation();

  const onSubmit = () => {onChange(values.name, values.email)};
  const {flagsInfoTooltip, openInfoTooltip, closeInfoTooltip} = useInfoTooltip(onSubmit);

  useEffect(() => {
    resetForm({name: currentUser.name, email: currentUser.email});
  }, [resetForm, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    auth.patchUserInfo({name: values.name, email: values.email})
      .then(() => openInfoTooltip(true, 'Данные профиля успешно изменены!'))
      .catch((err) => openInfoTooltip(false, `${err}`));
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__header">{`Привет, ${currentUser.name}!`}</h2>
        <InputWithValidation inputStyle="profile" onInputEvent={handleInput} type="text"
          placeholder="введите Ваше имя" minLength="2" maxLength="30" required pattern="[a-zA-Zа-яА-Я -]*"
          label="Имя" id="name" value={values.name || ''} errorText={errors.name}
        />
        <InputWithValidation inputStyle="profile" onInputEvent={handleInput} type="email"
          placeholder="введите email" required
          label="E-mail" id="email" value={values.email || ''} errorText={errors.email}
        />
        <button className="profile__submit link link_style_green" type="submit"
          disabled={!isValid || (currentUser.name === values.name && currentUser.email === values.email)}
        >
          Редактировать
        </button>
        <Link to="/signout" className="profile__signout link link_style_red">Выйти из аккаунта</Link>
      </form>
      <InfoTooltip flags={flagsInfoTooltip} onClose={closeInfoTooltip} />
    </main>
  );
}

export default Profile;
