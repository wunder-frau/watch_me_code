import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
        <nav className='navtab'>
          <ul className='navtab__list'>
            {/* <a className='navtab__element' href='#aboutproject'>
              <li className='navtab__element'>About Project</li>
            </a> */}
            <a className='navtab__element' href='#techs'>
              <li className='navtab__element'>Technology</li>
            </a>
            <a className='navtab__element' href='#aboutme'>
              <li className='navtab__element'>Student</li>
            </a>
          </ul>
        </nav>
  );
}

export default NavTab;