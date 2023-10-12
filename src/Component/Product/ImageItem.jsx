import React from "react";

const ImageItem = ({ image, index, hoverIndex, setHoverIndex, isMobile,onClick  }) => {

  return (
    <div
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
      onClick={onClick}
      className="w-full h-64 rounded-md border border-white relative group overflow-hidden"
    >
      <img
        src={image.src}
        alt={image.title}
        className={`w-full h-full object-cover transform ${
          hoverIndex === index ? "scale-100" : "scale-150"
        } transition-transform duration-300`}
      />
      <div
        className={`absolute inset-0 flex items-end justify-center ${
          isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } transition-opacity duration-300`}
      >
        <span className="bg-black text-2xl bg-opacity-50 text-white px-4 py-2 rounded">
          {image.title}
        </span>
      </div>
    </div>
  );
};

export default ImageItem;
