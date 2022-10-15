import { useEffect } from "react";

import './Popup.css';

const Popup = ({ isOpen, name, onClose, children }) => {

  useEffect(() => {
    // ограничиваем навешивание обработчика: если не открыт, то не нужно навешивать
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose(e);
      }
    }

    document.addEventListener('keydown', closeByEscape)
    // удаляем обработчик в clean-up функции
    return () => document.removeEventListener('keydown', closeByEscape)

  }, [isOpen, onClose]) // следим за isOpen, чтобы срабатывало только при открытии, а не всегда

  // создаем обработчик оверлея
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
      onClick={handleOverlayClick}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Popup;
