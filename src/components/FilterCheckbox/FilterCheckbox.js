import './FilterCheckbox.css';

function FilterCheckbox({name, className, onChange, value}) {

  function handelChange(e) {
    onChange(e.target.checked);
  }

  return (
    <label className={`switch__label ${className}`} >
      <input type="checkbox" defaultChecked={value} onChange={handelChange}/>
      <span className="switch__button" />
      {name}
    </label>
  );
}

export default FilterCheckbox;
