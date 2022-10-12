import { useState } from "react";
import './InputWithValidation.css';

function InputWithValidation ({label, inputStyle, ...props}) {

  const [errorText, setErrorText] = useState('');

  function handleInput(e) {
    setErrorText(e.target.validationMessage);
  }

  return (
    <div className={`input__container input__container_style_${inputStyle}`}>
      <label className={`input__label input__label_style_${inputStyle}`}>
        {label}
        <input id={props.id} name={props.id}
          className={`input input_style_${inputStyle}`}
          {...props}
          onInput={handleInput}
        />
      </label>
      <span className={`input__error input__error_style_${inputStyle} input__error_visible`}
        id={`${props.id}-error`}
      >
        Здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибка здесь будет ошибказдесь будет ошибка здесь будет ошибка здесь будет ошибка
      </span>
    </div>
  )
}

export default InputWithValidation;
