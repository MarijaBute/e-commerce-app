import React, { useState, useEffect } from "react";
import { data } from "../data";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import iconClose from "../images/icon-close.svg";

export default function ImageGallery({ setShowGallery, showGallery }) {
  const [selectedImage, setSelectedImage] = useState(data[0]);
  const [products] = useState(data);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0)

  useEffect(() => {
    setActiveThumbnailIndex(imageIndex); 
  }, [imageIndex]);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setImageIndex(index);
  };

  const handleNextBtnClick = () => {
    if (imageIndex < products.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handlePrevBtnClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(products.length - 1);
    }
  };

  return (
    <div className={`thumbnail-container ${showGallery ? "show" : ""}`}>
      <div className="main-image">
        <button className="btn-close" onClick={() => setShowGallery(false)}>
          <img src={iconClose} alt="iconClose" />
        </button>
        <button className="btn-prev" onClick={handlePrevBtnClick}>
          <img src={iconPrev} alt="iconPrev" />
        </button>
        <img
          src={products[imageIndex]}
          alt="Selected"
          className="big-image"
        />
        <button className="btn-next" onClick={handleNextBtnClick}>
          <img src={iconNext} alt="iconNext" />
        </button>
      </div>
      <div className="thumbnail-images">
        {data.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${activeThumbnailIndex === index ? "active" : ""}`}
            onClick={() => handleImageClick(image, index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} style={{ width: "50px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}



