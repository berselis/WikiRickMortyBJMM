import React from 'react';
import logoBDev from '../assets/img/LogoFondoOscuro.png';


const HeaderComp = () => {
  return (

    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img alt='BDevelopment' src={logoBDev}/>
          <span>BJMM</span>
          <span><h2><strong>Rick and Morty - WiKi</strong></h2></span>



        </a>

      </div>

    </nav>

  )
}

export default HeaderComp