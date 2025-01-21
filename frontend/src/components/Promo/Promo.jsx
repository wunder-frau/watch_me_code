import './Promo.css'
import logoPracticum from '../../images/practicum_logo.svg';

function Promo() {
  return (
        <div className='promo'>
        {/* <img src={logoPracticum} alt='logo' className='promo__logo'/> */}
          <h1 className='promo__title'>
            Hi there!
            {/* &#8209;*/}
          </h1>
        </div>
  );
}

export default Promo;