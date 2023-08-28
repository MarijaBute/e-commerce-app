import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Header () {
   return (
   <header className="site-header">
    <div className="site-nav">
        <img src={logo} alt="logo"/>
        <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div> 

    <div>
        <h2>This is a test</h2>
    </div>

    <div>
        <img src={cart} alt="cart"/>
        <img src={avatar} alt="avatar"/>
    </div>
    
   </header>
   )
}

