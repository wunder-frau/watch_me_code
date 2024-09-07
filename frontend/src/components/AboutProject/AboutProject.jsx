import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
        <section className='about' id='aboutproject'>
          <div className='about__wraper'>
            <div className='about__title-wraper'>
              <h2 className='about__title'>Abut project</h2>
            </div>
            <div className='about__text-container'>
              <div className='about__text-item'>
                <h3 className='about__text-title'>
                  Project includes 5 steps
                </h3>
                <div className='about__text'>
                 Drawing up a plan, working on the backend, layout, adding functionality and final improvements.
                </div>
              </div>
              <div className='about__text-item'>
                <h3 className='about__text-title'>
                 It took 5 weeks to complete the thesis
                </h3>
                <div className='about__text'>
                  Each step had a soft and hard deadline that had to be met.
                </div>
              </div>
            </div>
            <div className='about__square-wraper'>
              <div className='about__square about__square-green about__square-text about__square-text_black'>
                1 week
              </div>
              <div className='about__square about__square-gray about__square-text about__square-text_white'>
                4 weeks
              </div>
              <div className='about__square about__square-text about__square-text_gray'>
                Back-end
              </div>
              <div className='about__square about__square-text about__square-text_gray'>
                Front-end
              </div>
            </div>
          </div>
        </section>
  );
}

export default AboutProject;