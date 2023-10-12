import React, { useState, useEffect, useCallback } from "react";
import ImageItem from "./ImageItem";
import ProductItemPopup from "./ProductItemPopup";
import { images } from "./ImagesArray";

const ImageGallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      if (!isMobile) {
        setClickCount(0);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [handleResize]);
  return (
    <div
      id="hizmetlerimiz"
      className="mt-10 container mx-auto bg-primary-dark-color-1 rounded-lg"
    >
      <h1 className="text-center text-white text-3xl pt-10">Hizmetlerimiz</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-10 bg-primary-dark-color-1 rounded-2xl">
        {images.map((image, index) => (
          <ImageItem
            key={index}
            image={image}
            index={index}
            hoverIndex={hoverIndex}
            setHoverIndex={setHoverIndex}
            isMobile={isMobile}
            onClick={() => {
              if (!isMobile || (isMobile && clickCount === 1)) {
                setSelectedImage(image);
                setPopupOpen(true);
                setClickCount(0);
              } else {
                setClickCount(clickCount + 1);
              }
            }}
          />
        ))}
        {popupOpen && selectedImage && (
          <ProductItemPopup
            title={selectedImage.title}
            list={selectedImage.details}
            onClose={() => {
              setPopupOpen(false);
              setClickCount(0);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
