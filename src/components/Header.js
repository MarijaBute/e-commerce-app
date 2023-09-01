import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import menuicon from "../images/icon-menu.svg"
import closeicon from "../images/icon-close.svg"
import { useState } from "react"
import Cart from "./Cart"

export default function Header () {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [cartIsOpen, setCartIsOpen] = useState(false);

   return (
   <header className="site-header">
    <div className="site-nav">
        <ul>
            <li onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                     <img src={closeicon} alt="close-icon" className="close-icon" />
                ) : (<img src={menuicon} alt="menu" className="menu-icon"/>)}
            </li>
            <li>
            <img src={logo} alt="logo"/> 
            </li>
        </ul>
        
        <ul className="menu-items">
            <li><a href="#" className="menu-item">Collections</a></li>
            <li><a href="#" className="menu-item">Men</a></li>
            <li><a href="#" className="menu-item">Women</a></li>
            <li><a href="#" className="menu-item">About</a></li>
            <li><a href="#" className="menu-item">Contact</a></li>
        </ul>
    </div> 
    <div>
        <ul>
            <li>
                <button onClick={() => setCartIsOpen(!cartIsOpen)} style={{border:"none", background:"transparent", cursor: "pointer"}}>
                <img src={cart} alt="cart" className="cart-image"/>
                </button>
            </li>
            <li>{cartIsOpen && <Cart />}</li>
            <li className="avatar-image">
            <img src={avatar} alt="avatar" style={{width:"45px"}} className="avatar"/>
            </li>
        </ul>
    </div>
   </header>
   )
}

