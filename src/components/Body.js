import { useState } from "react"
import product_img1 from "../images/image-product-1.jpg"
import {data} from "../data"

export default function Body() {
    const [image, setImage] = useState(product_img1)
    return (
        <main>
            <div className="container">
                <div className="images-container">
                    <img src={image} alt="product_image" className="big-image"/>
                    <ul style={{padding:0}}>
                        <div className="gallery-images-container">
                            {data.map((product)=>(
                                <div>
                                    <li onClick={() => setImage(product)}><img src={product} alt="product_image" className="gallery-images" /></li>
                                </div>
                            ))}
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