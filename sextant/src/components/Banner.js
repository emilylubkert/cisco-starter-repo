import './Banner.css'

function Banner() {
  let title = 'SEXTANT';

  return (
    <>
      <img className='logo' src='./2560px-Cisco_logo_blue_2016.svg.png' alt='cisco logo' />
      <h1 className='banner-title'>{title}</h1>
    </>
  );
}

export default Banner;
