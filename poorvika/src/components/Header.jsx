import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
    <header class="header">
        <a href="/" class="logo">lr</a>
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Blog</a> </li>
                <li><a href="/">About</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header;
