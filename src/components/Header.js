import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import menuicon from "../images/icon-menu.svg";
import closeicon from "../images/icon-close.svg";
import { useState } from "react";
import Cart from "./Cart";

export default function Header({ cartItems, removeFromCart }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-nav">
        <ul>
          <li onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
            <div className="mobile-background">
            <div className={`mobile-menu-container ${mobileMenu ? "open" : ""}`}>
              <img src={closeicon} alt="close-icon" className="close-icon" />
              <ul className="mobile-menu">
                <li> <a href="#" className="menu-item-mobile">Collections</a></li>
                <li><a href="#" className="menu-item-mobile"> Men</a></li>
                <li><a href="#" className="menu-item-mobile"> Women</a></li>
                 <li><a href="#" className="menu-item-mobile"> About</a></li>
                <li><a href="#" className="menu-item-mobile">Contact</a></li>
            </ul>
            </div>
            </div>
            ) : (
              <img src={menuicon} alt="menu" className="menu-icon" />
            )}
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>

        <nav className={mobileMenu && "open"}>
        <ul className="menu-items">
          <li><a href="#" className="menu-item">Collections</a></li>
          <li><a href="#" className="menu-item">Men</a></li>
          <li><a href="#" className="menu-item">Women</a></li>
          <li><a href="#" className="menu-item">About</a></li>
          <li><a href="#" className="menu-item">Contact</a></li>
        </ul>
        </nav>
      </div>
      <div>
        <ul className="cart-avatar">
          <li>
            <button
              onClick={() => setCartIsOpen(!cartIsOpen)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={cart} alt="cart" className="cart-image" />
              {cartItems.length > 0 && (
                <span className="cart-quantity">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </li>
          <li>{cartIsOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}</li>
          <li className="avatar-image">
            <img
              src={avatar}
              alt="avatar"
              className="avatar"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
