import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Validation from '../../hooks/Validation';

function Profile({
  onSignOut,
  handleUpdateUser,
  isSuccess,
  isError,
  setSuccess,
  setError,
  isFormSent,
  profileError,
}) {
  const { name, email } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = Validation({
    name, email
  });

  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setHasChanges(!(values.name === name) || !(values.email === email));
  }, [values.name, values.email, name, email]);


  const onEditSubmit = (evt) => {
    evt.preventDefault();
    setSuccess('');
    setError('');
    const { name, email } = values;
    handleUpdateUser({ name, email });
    evt.target.reset()
  };

  return (
    <section className='profile'>
      <div class='profile__container'>
      <h2 className='profile__title'>Hi, {name}!</h2>
        <form className='profile__form' onSubmit={onEditSubmit}>
          <label className='profile__label' htmlFor='name'>
            Name
            <input 
              placeholder={name}
              className="profile__input"
              id="name"
              name="name"
              onChange={handleChange}
              value={values.name}
              autoFocus
              autoComplete="off"
              type="text"
              pattern='[а-яА-Яa-zAz-ёЁ\- ]{1,}'
              minLength="2"
              maxLength="40"
              required/>
          </label>
          {errors.name ? (<span className='form__input_error'>{errors.name}</span>) : null}
          <label className='profile__label' htmlFor='email'>
            E-mail
            <input
              placeholder={email}
              type="email"
              className="profile__input"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              autoComplete="off"
              minLength="2"
              maxLength="40"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              required
            />
          </label>
          {errors.email ? (<span className='form__input_error'>{errors.email}</span>) : null}

            {isSuccess ? (
              <span className="profile__error">
                {profileError}
              </span>
            ) : null}

            {isError ? (
              <span className="profile__error">
                  {profileError}
              </span>
            ) : null}

          <button
            className="profile__link-disabled"
            type="submit"
            disabled={!hasChanges || !isValid}
          >
            Edit
          </button>

          <button
            className="profile__link profile__link-signout"
            onClick={onSignOut}
            type="button"
          >
            Log Out
          </button>
        </form>
      </div>
    </section>
  );
}

export default Profile;