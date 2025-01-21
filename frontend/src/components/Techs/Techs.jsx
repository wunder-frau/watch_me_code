import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__wraper'>
        <div className='techs__title-wraper'>
          <h2 className='techs__title'>Technologies</h2>
        </div>
        <div className='techs__text-container'>
          <h3 className='techs__text-title'>
            Technologies from My Resume
          </h3>
          <div className='techs__text'>
            In my work experience, I have mastered various technologies that I have used in real projects.
          </div>

          {/* Programming Languages */}
          <div className='techs__category'>
            <h4 className='techs__category-title'>Programming Languages</h4>
            <ul className='techs__icon-wrapper'>
              <li className='techs__icon'>C</li>
              <li className='techs__icon'>C++</li>
              <li className='techs__icon'>JavaScript</li>
              <li className='techs__icon'>TypeScript</li>
            </ul>
          </div>

          {/* Front-End Technologies */}
          <div className='techs__category'>
            <h4 className='techs__category-title'>Front-End Development</h4>
            <ul className='techs__icon-wrapper'>
              <li className='techs__icon'>HTML5</li>
              <li className='techs__icon'>CSS3</li>
              <li className='techs__icon'>React.js</li>
              <li className='techs__icon'>Tailwind CSS</li>
              <li className='techs__icon'>Three.js</li>
            </ul>
          </div>

          {/* Back-End Technologies */}
          <div className='techs__category'>
            <h4 className='techs__category-title'>Back-End Development</h4>
            <ul className='techs__icon-wrapper'>
              <li className='techs__icon'>Node.js</li>
              <li className='techs__icon'>Express.js</li>
              <li className='techs__icon'>MongoDB</li>
              <li className='techs__icon'>Nginx</li>
              <li className='techs__icon'>REST API</li>
              <li className='techs__icon'>axios</li>
            </ul>
          </div>

          {/* Deployment and Hosting */}
          <div className='techs__category'>
            <h4 className='techs__category-title'>Deployment & Hosting</h4>
            <ul className='techs__icon-wrapper'>
              <li className='techs__icon'>AWS EC2</li>
              <li className='techs__icon'>PM2</li>
              <li className='techs__icon'>Nginx</li>
            </ul>
          </div>

          {/* Tools and Workflow */}
          <div className='techs__category'>
            <h4 className='techs__category-title'>Tools & Workflow</h4>
            <ul className='techs__icon-wrapper'>
              <li className='techs__icon'>OOP</li>
              <li className='techs__icon'>Git</li>
              <li className='techs__icon'>Vite</li>
              <li className='techs__icon'>npm</li>
              <li className='techs__icon'>Jest</li>
              <li className='techs__icon'>Cypress</li>
              <li className='techs__icon'>Postman</li>
              <li className='techs__icon'>BEM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
