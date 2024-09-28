import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list-item'>
          <NavLink className='navigation__movies' to='/movies'>
            Movies
          </NavLink>
        </li>
        <li className='navigation__list-item'>
          <NavLink className='navigation__saved-movies' to='/saved-movies'>
            Saved Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;