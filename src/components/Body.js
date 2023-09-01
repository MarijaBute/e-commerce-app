import { useState } from "react"
import product_img1 from "../images/image-product-1.jpg"
import product_img2 from "../images/image-product-2.jpg"
import product_img3 from "../images/image-product-3.jpg"
import product_img4 from "../images/image-product-4.jpg"

export default function Body() {
    const [image, setImage] = useState(product_img1)
    return (
        <main>
            <div className="container">
                <div className="images-container">
                    <img src={image} alt="product_image" className="big-image"/>
                    <ul className="gallery-images-container">
                        <div className="gallery-images">
                            <li onClick={() => setImage(product_img1)}><img src={product_img1} alt="product_image"/></li>
                        </div>
                        <div className="gallery-images">
                            <li onClick={() => setImage(product_img2)}><img src={product_img2} alt="product_image"/></li>
                        </div>
                        <div className="gallery-images">
                            <li onClick={() => setImage(product_img3)}><img src={product_img3} alt="product_image"/></li>
                        </div>
                        <div className="gallery-images">
                            <li onClick={() => setImage(product_img4)}><img src={product_img4} alt="product_image"/></li>
                        </div>
                    </ul>
                </div>
                <div className="info-container">
                    <h5>SNEAKER COMPANY</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                    <p> These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>
                </div>
        </main>
    )
}