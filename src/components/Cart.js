import thumbnail from "../images/image-product-1-thumbnail.jpg"
import deleteicon from "../images/icon-delete.svg";

export default function Cart() {
    return (
        <div className="cart-container">
            <h2 className="cart-heading">Cart</h2>

            <div className="cart-item">
                <img src={thumbnail} className="thumbnail-img"/>
                <div className="item-details">
                    <h5 className="item-text">Fall Limited Edition Sneakers</h5>
                     <div className="total-price">
                        <span className="item-price">$125.00 x 3</span>
                         <span className="item-total">$375.00</span>
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