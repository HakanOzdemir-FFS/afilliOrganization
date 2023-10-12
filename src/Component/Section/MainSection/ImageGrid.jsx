import React, { useState } from "react";

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: "/img/slider/slider-1-masa.webp", title: "Masa Organizasyonu" },
    { url: "/img/slider/slider-2-balon.webp", title: "Balon Gösterisi" },
    { url: "/img/slider/slider-3-marryjpg.webp", title: "Evlilik Teklifi" },
    { url: "/img/slider/slider-4-mezuniyet.webp", title: "Mezuniyet Töreni" },
    { url: "/img/slider/slider-5-dogumGunu.webp", title: "Doğum Günü" },
    { url: "/img/slider/slider-6-cinsiyetPartisi.webp", title: "Cinsiyet Partisi" },
    { url: "/img/slider/slider-7-diger.webp", title: "Diğer" },
  ];

  const computeWidth = (index) => {
    if (selectedImage === index) return "w-[30%]";
    if (selectedImage !== null) return "w-[14.28%]";
    return "w-96";
  };

  const computeBrightness = (index) => {
    if (selectedImage === index) return "brightness-100";
    return "brightness-50";
  };

  return (
    <div className="hidden lg:flex mt-32 mx-auto w-[95%] overflow-x-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex flex-col items-center duration-150 relative ${computeWidth(
            index
          )} ${computeBrightness(index)}`}
        >
          <img
            src={image.url}
            alt={index.toString()}
            loading="lazy"
            className="h-[40rem] w-full object-cover cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() =>
              setSelectedImage(index === selectedImage ? null : index)
            }
          />
          <span className="p-2 px-4 bg-black bg-opacity-60 rounded-md text-white mt-2 whitespace-nowrap absolute bottom-2">
            {image.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
