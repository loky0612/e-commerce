import './Header.css';
import logo from '../Images/Poorvika.png';
import Banners from './Banners';

const Header = () => {
  return (
    <div className='head'>
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
      <Banners/>
 
    </div>
  )
}

export default Header;
