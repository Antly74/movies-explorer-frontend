import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { useInfoTooltip } from '../../hooks/useInfoTooltip';

function SearchForm({filterString, onChangeFilterString, isShortMovie, onChangeIsShortMovie, isErrorOnEmpty}) {

  const [inputValue, setInputValue] = useState(filterString);
  const {flagsInfoTooltip, openInfoTooltip, closeInfoTooltip} = useInfoTooltip(()=>{});

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '' && isErrorOnEmpty) {
      openInfoTooltip(false, 'Нужно ввести ключевое слово');
    } else {
      setInputValue(inputValue.trim());
      onChangeFilterString(inputValue.trim());
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate={true} >
      <input
        id="search"
        name="search"
        className="search-form__input"
        placeholder="Фильм"
        required
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />
      <button
        aria-label="Найти"
        type="submit"
        className="search-form__submit link link_style_blue"
        name="submit"
      >
        Найти
      </button>

      <FilterCheckbox
        className="search-form__switch"
        name="Короткометражки"
        onChange={onChangeIsShortMovie}
        value={isShortMovie}
      />
      <InfoTooltip flags={flagsInfoTooltip} onClose={closeInfoTooltip} />
    </form>
  );
}

export default SearchForm;
