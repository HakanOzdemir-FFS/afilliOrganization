import React from "react";

const Card = ({ title, description, icon }) => (
  <div className="bg-primary-dark-color-2 p-6 rounded-md shadow-md mb-4 text-center ">
    <i className={`fa-solid ${icon} text-5xl text-white`}></i>
    <h3 className="font-bold text-lg mb-2 text-white mt-2">
      {title}
    </h3>
    <p className="text-white">{description}</p>
  </div>
);

const CardSection = () => {
  const cardData = [
    {
      icon: "fa-mug-hot",
      title: "Brifing",
      description: "Müşteri isteklerinin alındığı ilk toplantı",
    },
    {
      icon: "fa-star",
      title: "Konsept",
      description: "Brif doğrultusunda temanın belirlenmesi",
    },
    {
      icon: " fa-book",
      title: "Planlama",
      description: "Etkinlik kurgusu ve bütçenin hazırlanması",
    },
    {
      icon: " fa-check",
      title: "Check List",
      description: "Kontrol listesinin hazırlanması ve üretim takvimi",
    },
    {
      icon: " fa-check",
      title: "Event Brief",
      description: "Tüm ekiple yapılacak kurgu toplantısı",
    },
    {
      icon: " fa-book-open-reader",
      title: "Senaryo",
      description: "Etkinlik senaryosunun hazırlanması",
    },
    {
      icon: " fa-eye",
      title: "Takip",
      description: "Son düzenleme için etkinlik alanında tüm ekiple buluşma",
    },
    {
      icon: " fa-bolt",
      title: "Risk",
      description:
        "Etkinlik risk faktörlerinin gözden geçirilmesi (Hava durumu - trafik vb.)",
    },
    {
      icon: " fa-list-check",
      title: "Son Toplantı",
      description: "Müşteri ile sahada son toplantı",
    },
    {
      icon: " fa-location-dot",
      title: "Saha",
      description: "Ekip ve ekipmanların sahaya yerleşimi",
    },
    {
      icon: "fa-sitemap",
      title: "Organizasyon",
      description: "Planlama dahilinde etkinliğin hayata geçirilmesi",
    },
    {
      icon: " fa-envelope-open-text",
      title: "Raporlama",
      description: "Bireysel / kurumsal müşteriye rapor sunumu",
    },
  ];

  return (
    <div id="how-to" className="container mt-20 mx-auto px-8 py-12 bg-primary-dark-color-1 rounded-2xl">
      <h2 className="text-2xl text-white font-semibold mb-6 text-center">
        NASIL ÇALIŞIR?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
