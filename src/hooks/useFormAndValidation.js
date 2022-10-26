import {useState, useCallback} from 'react';
//import validator from 'validator';

export function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);

  const handleInput = (e) => {
    const {name, value} = e.target;
    let validationMessage = e.target.validationMessage;

    if (name === 'name' && e.target.validity.patternMismatch) {
      validationMessage = 'Имя должно содержать латиницу, кирилицу, пробел или дефис';
    }
    /*if (name === 'email') {
      debugger;
      if (!validator.isEmail(value)) {
        if (validationMessage === '') {
          validationMessage = 'какая-то интересная ошибка в Вашем E-mail';
        }
        e.target.setCustomValidity(validationMessage);
      } else {
        e.target.setCustomValidity('');
      }
    }*/

    setValues({...values, [name]: value });
    setErrors({...errors, [name]: validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleInput, errors, isValid, resetForm, setValues, setIsValid };
}
