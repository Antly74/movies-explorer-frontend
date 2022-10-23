import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm({filterString, onChangeFilterString, onChangeIsShortMovie}) {

  const [inputValue, setInputValue] = useState(filterString);

  function handleSubmit(e) {
    e.preventDefault();
    onChangeFilterString(inputValue);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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

      <FilterCheckbox className="search-form__switch" name="Короткометражки" onChange={onChangeIsShortMovie} />
    </form>
  );
}

export default SearchForm;
