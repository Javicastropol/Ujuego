import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <div className='container-header'>
        <div>
          <img className="img-fluid" src={"/images/Rectangle 3.png"}  alt="Mando y consola de videojuegos" width="100%" />
        </div>  
        <div className='container-text'>
          <div className='slogan'>Jugar solo es</div>
          <div className='claim'>el principio</div>
        </div>
      </div>  
  )
}

export default Header