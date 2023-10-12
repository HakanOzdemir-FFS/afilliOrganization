import React from "react";

const LeftSection = () => {
  return (
    <div
      id="hakkimizda"
      className="container mx-auto px-8 py-12 flex flex-wrap md:flex-nowrap mt-10 bg-secondary-dark-color-1 rounded-2xl"
    >
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
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-white">
        <h2 className="text-xl text-center md:text-start font-semibold mb-4">
          Hakkımızda
        </h2>
        <p>
          2023 yılında kurulan Afilli Organizasyon, unutulmaz anılar yaratma
          sanatında uzmandır. Biz, sizin için en özel günleri daha da özel
          kılmak adına buradayız. Önceliğimiz sizin eğlenceniz, mutluluğunuz ve
          memnuniyetinizdir.
        </p>
        <h2 className="text-xl  text-center md:text-start font-semibold mb-4 mt-4">
          Misyonumuz
        </h2>
        <p>
          Her etkinliği, sadece bir organizasyon olmaktan çıkarıp,
          katılımcılarına benzersiz bir deneyim sunmak. Müşterilerimizin
          hayalini kurduğu her anı, en ince detayına kadar planlayarak
          gerçekleştirmek ve bu süreçte en yüksek kalite standartlarını
          benimsemek.
        </p>
        <h2 className="text-xl text-center md:text-start font-semibold mb-4 mt-4">Vizyonumuz</h2>
        <p>
          Organizasyon sektöründe, yenilikçi yaklaşımımız, profesyonel ekibimiz
          ve benzersiz hizmet anlayışımızla lider olmak. Her organizasyonda,
          Afilli imzasının kalitesini ve farkını hissettirmek.
        </p>
      </div>
    </div>
  );
};

export default LeftSection;
