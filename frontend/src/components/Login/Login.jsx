import React, { useEffect } from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import Form from '../Form/Form';
import Validation from '../../hooks/Validation';

function Login({ onLogin, setError, setIsFormSent, isFormSent, isError }) {

  const history = useHistory();
  const { values, handleChange, errors, isValid } = Validation({
    email: "",
    password: "",
  });

  useEffect(() => {
    setError(false);
  }, [history, setError]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsFormSent(true);
    const { email, password } = values;
    onLogin(password, email);
  };

  return (
    <section className='login'>
      <div class='login__container'>
      <Link to='/' className='login__link'>
        <img src={logo} alt='logo' className='login__logo'/>
      </Link>
      <h2 className='login__title'>Glad to see you!</h2>
        <Form
          submitText={{
            buttonText: 'Sign In',
            promt: 'Not regestres yet?',
            route: '/signup',
            linkText: 'Sign up',
            errorText: 'An error occurred while attempting to sign in.',
          }}
          handleChange={handleChange}
          errors={errors}
          handlerSubmit={handleSubmit}
          values={values}
          isFormSent={isFormSent}
          isValid={isValid}
          isError={isError}
          />
      </div>
    </section>
  );
}

export default Login;