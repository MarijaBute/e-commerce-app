import { useState } from "react";
import product_img1 from "../images/image-product-1.jpg";
import { data } from "../data";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

export default function Body() {
  const [image, setImage] = useState(product_img1);
  const [amount, setAmount] = useState(0)
  const [showGallery, setShowGallery] = useState(false)

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  }

  return (
    <main>
      <div className="container">
        <div className="images-container">
          <img src={image} alt="product_image" className="big-image" onClick={() => setShowGallery(true)}/>
          <ul style={{ padding: 0 }}>
            <div className="gallery-images-container">
              {data.map((product) => (
                <div>
                  <li onClick={() => setImage(product)}>
                    <img
                      src={product}
                      alt="product_image"
                      className="gallery-images"
                    />
                  </li>
                </div>
              ))}
            </div>
          </ul>
        </div>
        <div className="info-container">
          <h5>SNEAKER COMPANY</h5>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="body-container">
            <ul className="prices">
              <li className="price">$125.00</li>
              <li className="sale">50%</li>
            </ul>

            <p style={{ color: "#374151" }}>
              <s>$250.00</s>
            </p>
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
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
