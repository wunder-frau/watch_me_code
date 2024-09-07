import React from 'react';
import './Footer.css';

function Footer() {
  return (
        <footer className='footer'>
          <div className='footer__wraper'>
            <h2 className='footer__title'>Iryna Stasheuski</h2>
            <div className='footer__copyright-wraper'>
              <div className='footer__copyright-year '>©2025</div>
              <div className='footer__copyright-links'>
                <ul className='footer__profiles-list'>
                  <a href='https://github.com/wunder-frau'
                    className='footer__profiles-item'
                    rel='noreferrer'
                    target='_blank'>
                    <li>Github</li>
                  </a>
                  <a href='https://www.linkedin.com/in/iryna-stasheuski/'
                    className='footer__profiles-item'
                    rel='noreferrer'
                    target='_blank'>
                    <li className='footer__profiles-item'>LinkedIn</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  );
}

export default Footer;
