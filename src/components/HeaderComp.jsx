import React from 'react';
import logoBDev from '../assets/img/LogoFondoOscuro.png';


const HeaderComp = () => {
  return (

    <nav className='navbar bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img alt='BDevelopment' src={logoBDev}/>
          <strong>BJMM</strong>
          <h1>Rick and Morty - WiKi</h1>
        </a>

      </div>

    </nav>

  )
}

export default HeaderComp