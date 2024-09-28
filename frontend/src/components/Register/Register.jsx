import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import Validation from '../../hooks/Validation';

function Register({
  onRegister,
  setError,
  setIsFormSent,
  isError,
  isFormSent,
}) {
  const history = useHistory();
  const { values, handleChange, errors, isValid } = Validation({
    email: '',
    password: '',
    name: '',
  });

  React.useEffect(() => {
    setError(false);
  }, [history]);

  function handleSubmit(e) {
    setIsFormSent(true);
    e.preventDefault();
    const { email, password, name } = values;
    onRegister(password, email, name);
  }
  return (
    <section className='register'>
      <div class='register__container'>
      <Link to='/' className='register__link'>
        <img src={logo} alt='logo' className='register__logo'/>
      </Link>
      <h2 className='register__title'>Welcome!</h2>

      {/* <span className=''>{errors.name}</span> */}
        <Form
          submitText={{
            buttonText: 'Register',
            promt: 'Already registered?',
            route: '/signin',
            linkText: 'Sign in',
            errorText: 'An error occurred while trying to register.',
          }}
          handleChange={handleChange}
          errors={errors}
          handlerSubmit={handleSubmit}
          values={values}
          isFormSent={isFormSent}
          isValid={isValid}
          isError={isError}
          >
          <label htmlFor='name' className='form__label'>
            Name
          </label>
          <input
            required
            id='name'
            value={values.name}
            onChange={handleChange}
            name='name'
            autoFocus
            autoComplete='off'
            className='form__input'
            pattern='[а-яА-Яa-zA-ZёË\- ]{1,}'
            type='text'
            minLength='2'
            maxLength='40'
          />
          {errors.name ? (
            <span className='form__input_error'>{errors.name}</span>
          ) : null}
        </Form>
      </div>
    </section>
  );
}

export default Register;