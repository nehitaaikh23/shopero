import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_menu from '../../assets/nav_dropdown.png'

const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <h1>Shopero</h1>
        </div>
        <img src={dropdown_menu} alt="" onClick={dropdownToggle} className='nav-dropdown'/>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu('shop')}}><Link to="/">Shop</Link>{menu==="shop" ? <hr/> :"" }</li>
            <li onClick={() => {setMenu('men')}}><Link to="/mens">Abobi</Link>{menu==="men" ? <hr/>: ""}</li>
            <li onClick={() => {setMenu('women')}}><Link to="/womens">Shima</Link>{menu==="women" ? <hr/>:"" }</li>
            <li onClick={() => {setMenu('kids')}}><Link to="/kids">Pikin</Link>{menu==="kids" ? <hr/>:"" }</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link to="/login">Login</Link></button>
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="cart-counter">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar