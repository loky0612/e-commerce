import './Header.css';
import logo from '../Images/Poorvika.png';


const Header = () => {
  return (
    <div className='head'>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='search'>
          <input type='text' placeholder='Search for Products, Brands, Offers' />
        </div>
        <div className='nav'>
          <ul className='navlist'>
            <li>Delivery</li>
            <li>Locate</li>
            <li>Items</li>
            <li>My account</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
