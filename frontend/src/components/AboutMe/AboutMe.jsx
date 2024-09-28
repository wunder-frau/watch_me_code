import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar_st.jpg';

function AboutMe() {
  return (
        <section className='aboutme' id='aboutme'>
          <div className='aboutme__wraper'>
            <div className='aboutme__title-wraper'>
              <h2 className='aboutme__title'>Student</h2>
            </div>
            <div className='aboutme__elements'>
              <div className='aboutme__text-wraper'>
                <h3 className='aboutme__text-title'>
                  Irene
                </h3>
                <div className='aboutme__subtitle'>
                  Software Developer
                </div>
                <div className='aboutme__text'>
                Hi, I’m Iryna! I transitioned into software development because I’m passionate about creating meaningful solutions. At Hive Helsinki, I worked on projects like a Unix-like shell and a 3D maze game, which strengthened my problem-solving and coding skills. I’m excited to bring my expertise in JavaScript, React, and Node.js to your team. Thanks for considering my application—I’d love to chat more!
                </div>
                <ul className='aboutme__profiles-list'>
                  <a href='https://www.linkedin.com/in/iryna-stasheuski/'
                    className='aboutme__profiles-item'
                    rel='noreferrer'
                    target='_blank'>
                    <li>LinkedIn</li>
                  </a>
                  <a href='https://github.com/wunder-frau'
                    className='aboutme__profiles-item'
                    rel='noreferrer'
                    target='_blank'>
                    <li>Github</li>
                  </a>
                </ul>
              </div>
              <div className='aboutme__image-container'>
                <img className='aboutme__image' src={avatar} alt='student photo'/>
              </div>
            </div>
          </div>
        </section>
  );
}

export default AboutMe;
