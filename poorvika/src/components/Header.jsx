import React from 'react';
import './Header.css';
import logo from '../Images/Poorvika.png';

const Header = () => {
  return (
    <div className='header'>
    <header class="header">
        <a href="/" class="logo"><img src={logo} alt='logo'/></a>
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
                <li><a href="/">Delivery</a></li>
                <li><a href="/">Items</a> </li>
                <li><a href="/">Locate</a></li>
                <li><a href="/">My account</a></li>
            </ul>
        </nav>
    </header>

    </div>
  )
}

export default Header;
