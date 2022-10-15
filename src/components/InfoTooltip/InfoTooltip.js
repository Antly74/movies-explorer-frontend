import okIcon from '../../images/ok.svg';
import errorIcon from '../../images/error.svg';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import './InfoTooltip.css';

function InfoTooltip({isOk, message}) {

  const [IsOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Popup isOpen={IsOpen} onClose={handleClose} name="info">
      <img alt={isOk ? 'ок' : 'ошибка'} className="info-tooltip__icon" src={isOk ? okIcon : errorIcon}/>
      <h2 className="info-tooltip__title">{message}</h2>
    </Popup>
  );
}

export default InfoTooltip;
