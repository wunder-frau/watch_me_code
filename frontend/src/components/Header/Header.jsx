import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const [burgerMenu, setBurgerMenu] = React.useState(false);

  function handleBurgerMenu() {
    setBurgerMenu(!burgerMenu);
  }
  
  return (
    <>
          {pathname !== "/signin" && pathname !== "/signup" ? (
            <header className={pathname === '/' ? 'header' : 'header header_black'}>
              <div className='header__wraper'>
                <Link to='/' className='header__link'>
                  <img src={logo} alt='logo' className='header__logo'/>
                </Link>
                {pathname !== "/" || loggedIn ? <Navigation /> : ""}
                <div className={`header__btn-set ${pathname !== "/" || loggedIn ? "header__wrapper_burger" : ""}`}>
                  
                  {pathname !== "/" || loggedIn ? (
                  <Link to='/profile' className='header__btn-account header__btn-account_none'>Account</Link>

                  ) : (
                    <ul className='header__btn-set'>
                    <li>
                      <NavLink to='/signup' className='header__link header__signup-text'>
                        Sign up
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/signin' className='header__link header__btn-signin'>
                        Sign In
                      </NavLink>
                    </li>
                  </ul>
                  )}
                </div>

                {pathname === '/' ? (
                  ''
                ) : (
                  <>
                    <div
                      className={`header__burger ${burgerMenu ? 'header__burger-menu_cross' : ''}`}
                      onClick={handleBurgerMenu}
                    >
                      <div className={`header__burger-menu-line ${burgerMenu ? 'header__btn-account_none' : ''}`} />
                      <div className={`header__burger-menu-line ${burgerMenu ? 'header__btn-account_none' : ''}`} />
                      <div className={`header__burger-menu-line ${burgerMenu ? 'header__btn-account_none' : ''}`} />
                    </div>
                    <div
                      className={`header__burger-menu-container ${burgerMenu ? 'header__burger-menu-container_visible' : ''}`}
                      onClick={handleBurgerMenu}
                    >
                      <nav className='header__burger-menu'>
                        <ul className='header__burger-list'>
                          <li className='header__burger-item'>
                            <Link className='header__burger-link' to='/'>
                              Home Page
                            </Link>
                          </li>
                          <li className='header__burger-item'>
                            <Link className='header__burger-link' to='/movies'>
                              Movies
                            </Link>
                          </li>
                          <li className='header__burger-item'>
                            <Link className='header__burger-link' to='/saved-movies'>
                              Saved Movies
                            </Link>
                          </li>
                        </ul>
                      </nav>
                      <div
                        className={`header__wrapper header__wrapper_burger-menu ${
                          pathname === '/' ? 'header__wrapper_burger' : ''
                        }`}
                      >
                        <Link className='header__signup-text' to={`${pathname === '/' ? '/signup' : '/profile'}`}></Link>
                        {pathname === '/' ? (<Link to='/signin' className='header__btn-signin' type='button'>Sign In</Link>
                          ) : (
                          <Link to='/profile' className='header__btn-account' type='button'>Account</Link>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </header>
          ) : (
            ""
          )}
    </>
  );
}

export default Header;
