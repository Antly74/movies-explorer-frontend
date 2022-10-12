import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input id="search" name="search" className="search-form__input" placeholder="Фильм"/>
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
