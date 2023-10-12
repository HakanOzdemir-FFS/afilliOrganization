import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const slides = [
    { url: "/img/slider/slider-1-masa.webp", title: "Masa Organizasyonu" },
    { url: "/img/slider/slider-2-balon.webp", title: "Balon Gösterisi" },
    { url: "/img/slider/slider-3-marryjpg.webp", title: "Evlilik Teklifi" },
    { url: "/img/slider/slider-4-mezuniyet.webp", title: "Mezuniyet Töreni" },
    { url: "/img/slider/slider-5-dogumGunu.webp", title: "Doğum Günü" },
    {
      url: "/img/slider/slider-6-cinsiyetPartisi.webp",
      title: "Cinsiyet Partisi",
    },
    { url: "/img/slider/slider-7-diger.webp", title: "Diğer" },
  ];

  return (
    <div className="lg:hidden mt-32 rounded-lg w-[90%] mx-auto bg-primary-light-color-2 bg-opacity-10">
      <Slide
        prevArrow={<React.Fragment />}
        nextArrow={<React.Fragment />}
        duration={2000}
        indicators={true}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex items-end 
             justify-center rounded-lg  h-72 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <span className="p-2 w-[80%] bg-black bg-opacity-60 rounded-md text-white mb-5">
              {slide.title}
            </span>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
