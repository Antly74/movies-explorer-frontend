import {useState} from 'react';

export function useInfoTooltip(onSubmit) {
  const [flagsInfoTooltip, setFlagsInfoTooltip] = useState({isOpen: false, isOk: false, message: ''});

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

  return { flagsInfoTooltip, openInfoTooltip, closeInfoTooltip };
}
