import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Form({
  submitText,
  handlerSubmit,
  handleChange,
  isValid,
  values,
  children,
  isFormSent,
  isError,
  errors,
}) {
  return (
    <form className='form' onSubmit={handlerSubmit}>
      {children}
      <label htmlFor='email' className='form__label'>E-mail</label>
      <input
        required
        id='email'
        className='form__input'
        minLength='2'
        type='email'
        name='email'
        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
        value={values.email}
        onChange={handleChange}
      />
      {errors.email ? (<span className='form__input_error'>{errors.email}</span>) : null}
      <label htmlFor='password' className='form__label'>Password</label>
      <input
        required
        id='password'
        className='form__input form__input_password'
        minLength='2'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
      {errors.password ? (<span className='form__input_error'> {errors.password}</span>) : null}
      {isError ? (
        <span className='form__input_error' id='login-error'>
          {isError.message ? isError.message : submitText.errorText}
        </span>
      ) : null}
      <button
        className={`form__button ${isValid && !isFormSent ? '' : 'form__button_disabled'}`}
        type={isValid && !isFormSent ? 'submit' : 'button'}>
        {submitText.buttonText}
      </button>

      <p className='form__promt'>
        {`${submitText.promt} `}
        <Link className='form__link' to={submitText.route}>
          {submitText.linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;