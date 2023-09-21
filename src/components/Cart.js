import thumbnail from "../images/image-product-1-thumbnail.jpg";
import deleteicon from "../images/icon-delete.svg";

export default function Cart({ cartItems, removeFromCart }) {
  const cartIsEmpty = cartItems.length === 0;

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart</h2>

      {cartIsEmpty ? (
        <p className="emptyCart">Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img
              src={thumbnail}
              className="thumbnail-img"
              alt={`Thumbnail ${index}`}
            />
            <div className="item-details">
              <h5 className="item-text">{item.name}</h5>
              <div className="total-price">
                <span className="item-price">${item.price}.00 x {item.quantity}</span>
                <span className="item-total">${item.price * item.quantity}.00</span>
                <span>
                  <button
                    className="delete-button"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <img src={deleteicon} alt="Delete" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
