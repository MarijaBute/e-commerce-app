import React, { useState, useEffect } from "react";
import { data } from "../data";
import iconPrev from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import iconClose from "../images/icon-close.svg";

export default function ImageGallery({ setShowGallery, showGallery }) {
  const [imageIndex, setImageIndex] = useState(data[0]); 

  const products = useState(data);

  const handleImageClick = (index) => {
    setImageIndex(index);
  };

  const handleNextBtnClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevBtnClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setSelectedImage(data[imageIndex]);
  }, [imageIndex]);


  const [selectedImage, setSelectedImage] = useState(data[imageIndex]);

  return (
    <div className={`thumbnail-container ${showGallery ? "show" : ""}`}>
      <div className="main-image">
        <button className="btn-close" onClick={() => setShowGallery(false)}>
          <img src={iconClose} alt="iconClose" />
        </button>
        <button className="btn-prev" onClick={handlePrevBtnClick}>
          <img src={iconPrev} alt="iconPrev" />
        </button>
        <img src={selectedImage} alt="Selected" />
        <button className="btn-next" onClick={handleNextBtnClick}>
          <img src={iconNext} alt="iconPrev" />
        </button>
      </div>
      <div className="thumbnail-images">
        {data.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${selectedImage === image ? "active" : ""}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} style={{ width: "50px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
