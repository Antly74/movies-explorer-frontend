import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({name, className, onChange}) {

  const [value, setValue] = useState(false);

  function handelChange(e) {
    setValue(e.target.checked);
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
