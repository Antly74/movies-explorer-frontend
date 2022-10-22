import okIcon from '../../images/ok.svg';
import errorIcon from '../../images/error.svg';
import Popup from '../Popup/Popup';
import './InfoTooltip.css';

function InfoTooltip({isOpen, isOk, message, onClose}) {

  function handleClose() {
    onClose();
  }

  return (
    <Popup isOpen={isOpen} onClose={handleClose} name="info" style={isOk ? 'green' : 'red'}>
      <img alt={isOk ? 'ок' : 'ошибка'} className="info-tooltip__icon" src={isOk ? okIcon : errorIcon}/>
      <h2 className="info-tooltip__title">{message}</h2>
    </Popup>
  );
}

export default InfoTooltip;
