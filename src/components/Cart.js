import thumbnail from "../images/image-product-1-thumbnail.jpg"
import deleteicon from "../images/icon-delete.svg";
import { products } from "../products";

export default function Cart({props}) {
    return (
        <div className="cart-container">
            <h2 className="cart-heading">Cart</h2>

            <div className="cart-item">
                <img src={thumbnail} className="thumbnail-img"/>
                <div className="item-details">
                    <h5 className="item-text">{products.name}</h5>
                     <div className="total-price">
                        <span className="item-price">${(products.price)-((products.price * products.discount)/100)} x {props.amount}</span>
                         <span className="item-total">${((products.price)-((products.price * products.discount)/100)) * props.amount}.00</span>
                         <span><button className="delete-button">
                        <img src={deleteicon} />
                             </button></span>
                    </div>
                </div>
            </div>

            <button className="checkout">Checkout</button>
        </div>
    )
}