import './InputWithValidation.css';

function InputWithValidation ({label, inputStyle, errorText, onInputEvent, ...props}) {

  function handleInput(e) {
    onInputEvent(e);
  }

  return (
    <div className={`input__container input__container_style_${inputStyle}`}>
      <label className={`input__label input__label_style_${inputStyle}`}>
        {label}
        <input id={props.id} name={props.id}
          className={`input input_style_${inputStyle} ${!!errorText && 'input_error-value'}`}
          {...props}
          onInput={handleInput}
        />
      </label>
      <span className={`input__error input__error_style_${inputStyle} ${!!errorText && 'input__error_visible'}` }
        id={`${props.id}-error`}
      >
        {errorText}
      </span>
    </div>
  )
}

export default InputWithValidation;
