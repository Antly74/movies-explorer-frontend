import okIcon from '../../images/ok.svg';
import errorIcon from '../../images/error.svg';
import Popup from '../Popup/Popup';
import './InfoTooltip.css';

function InfoTooltip({flags, onClose}) {

  function handleClose() {
    onClose();
  }

  return (
    <Popup isOpen={flags.isOpen} onClose={handleClose} name="info" style={flags.isOk ? 'green' : 'red'}>
      <img alt={flags.isOk ? 'ок' : 'ошибка'} className="info-tooltip__icon" src={flags.isOk ? okIcon : errorIcon}/>
      <h2 className="info-tooltip__title">{flags.message}</h2>
    </Popup>
  );
}

export default InfoTooltip;
