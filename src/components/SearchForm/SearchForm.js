import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm({onSearch}) {

  const [filterString, setFilterString] = useState('');

  function handleInput(e) {
    setFilterString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(filterString);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        id="search"
        name="search"
        className="search-form__input"
        placeholder="Фильм"
        required
        value={filterString}
        onInput={handleInput}
      />
      <button
        aria-label="Найти"
        type="submit"
        className="search-form__submit link link_style_blue"
        name="submit"
      >
        Найти
      </button>

      <FilterCheckbox className="search-form__switch" name="Короткометражки"/>
    </form>
  );
}

export default SearchForm;
