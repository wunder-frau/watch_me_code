import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom'

function NotFound() {
  const history = useHistory();

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <p className='not-found__error'>404</p>
        <p className='not-found__title'>Page not found</p>
        <p className='not-found__link' onClick={() => history.goBack()}>Back</p>
      </div>
    </section>
  );
}

export default NotFound;