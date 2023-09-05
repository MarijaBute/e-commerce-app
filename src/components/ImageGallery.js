import React, { useState } from "react";
import { data } from "../data";
import iconPrev from "../images/icon-previous.svg"
import iconNext from "../images/icon-next.svg"
import iconClose from "../images/icon-close.svg"

export default function ImageGallery ({setShowGallery}) {
  const [selectedImage, setSelectedImage] = useState(data[0])

  const [products] = useState(data)
  const [imageIndex, setImageIndex] = useState(1)

  const handleImageClick = (image) => {
    setSelectedImage(image);
  }


  const handleNextBtnClick = () => {
    if (imageIndex !== products.length) {
        setImageIndex(imageIndex+1)
    } else if (imageIndex === products.length) {
        setImageIndex(1)
    }
  }

  return (
    <div className="thumbnail-container" > 
        <div className="main-image">
        <button className="btn-close" onClick={() => setShowGallery(false)}><img src={iconClose} alt="iconClose"/></button>
        <button className="btn-prev"><img src={iconPrev} alt="iconPrev" /></button>
        <img src={selectedImage} alt="Selected"/>
        <button className="btn-next" onClick={handleNextBtnClick}><img src={iconNext} alt="iconPrev"/></button>
      </div>
      <div className="thumbnail-images">
        {data.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Thumbnail ${index}`} style={{width: "50px"}}/>
          </div>
        ))}
      </div>
    </div>
  )
}

