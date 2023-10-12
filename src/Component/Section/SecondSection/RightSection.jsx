import React from "react";

const RightSection = () => {
  return (
    <div id="info" className="container mx-auto px-8 py-12 flex flex-wrap md:flex-nowrap mt-10  bg-primary-dark-color-2 rounded-2xl">
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-white ">
        <h2 className="text-xl text-center md:text-start font-semibold mb-4">Başlık 2</h2>
        <p>
          Burada bilgilendirme metni bulunmaktadır. Bu metin ilgili içerik
          hakkında bilgi sağlar.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <video
          data-test="video-content"
          preload="auto"
          src="https://cdn.dribbble.com/userupload/10691034/file/original-cda0560e9424609120d7f2f274bf6ceb.mp4"
          playsinline="true"
          loop="loop"
          draggable="false"
          className="rounded-md shadow-lg max-w-full h-auto"
          autoplay="autoplay"
          muted="muted"
        ></video>
      </div>
    </div>
  );
};

export default RightSection;
