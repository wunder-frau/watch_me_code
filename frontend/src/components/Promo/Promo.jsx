import './Promo.css'
//import logoPracticum from '../../images/practicum_logo.svg';

function Promo() {
  return (
    <div className='promo'>
      <h1 className='promo__title'>
        <b style={{ paddingTop: '10px', display: 'block' }}>Iryna Stasheuski</b>
        <br />
          <span>
            Check out my portfolio below
             <br />
            or sign in to filter movies!
          </span>
      </h1>
    </div>
  );
}

export default Promo;