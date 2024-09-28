import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
// import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Potrtfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <main className='main'>
      <Promo/>
      <NavTab/>
      {/* <AboutProject/> */}
      <Techs/>
      <AboutMe/>
      <Potrtfolio/>
    </main>
  );
}

export default Main;