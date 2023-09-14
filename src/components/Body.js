import { useState } from "react";
import { data } from "../data";
import { products } from "../products";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";

export default function Body({setShowGallery, showGallery, addToCart}) {
  const [image, setImage] = useState(data[0]);
  const [amount, setAmount] = useState(0)


  const toggleGallery = () => {
    setShowGallery(!showGallery)
  }

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  }

  const handleAddToCart = () => {
    if (amount > 0) {
      addToCart(products, amount); 
      setAmount(0); 
    } 
  };

  

  return (
    <main>
      <div className="container">
        <div className="images-container">
          <img src={iconPrev} className="prev-tag" />
          <img src={image} alt="product_image" className="big-image" onClick={toggleGallery}/>
          <img src={iconNext} className="next-tag" />
          <ul style={{ padding: 0 }}>
            <div className="gallery-images-container">
              {data.map((product, imageIndex) => (
                <div key={imageIndex}>
                  <li onClick={() => setImage(product)} key={imageIndex}>
                    <img
                      src={product}
                      alt="product_image"
                      className="gallery-images"/>
                  </li>
                </div>
              ))}
            </div>
          </ul>
        </div>
        <div className="info-container">
          <h5>SNEAKER COMPANY</h5>
          <h1>{products.name}</h1>
          <p>
            {" "}
            {products.description}
          </p>
          <div className="body-container">
            <div>
            <ul className="prices">
              <li className="price">${(products.price)-((products.price * products.discount)/100)}.00</li>
              <li className="sale">50%</li>
            </ul>
            </div>

            <div>
            <p style={{ color: "#374151" }}>
              <s>${products.price}.00</s>
            </p>
            </div>
          </div>

          <div className="quantity">
            <ul className="handle-quantity">
              <li onClick={handleMinus} style={{ cursor: "pointer" }}>
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                style={{ cursor: "pointer" }}
              >
                <img src={plus} alt="" />
              </li>
            </ul>

            <div>
              <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}