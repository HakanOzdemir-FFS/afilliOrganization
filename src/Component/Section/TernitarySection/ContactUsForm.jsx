import React, { Suspense } from "react";
const MapComponent = React.lazy(() => import("./MapComponent"));

const ContactUsForm = () => {
  return (
    <div
      id="contact"
      className="container mx-auto px-8 py-12 flex flex-col mt-10 bg-primary-dark-color-1 rounded-2xl z-0"
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-white mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Bize Ulaşın</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">İsim Soyisim:</label>
              <input
                type="text"
                required
                className="w-full p-2 rounded-md border border-gray-300 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                required
                className="w-full p-2 rounded-md border border-gray-300 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Cep Telefonu:</label>
              <input
                type="tel"
                required
                className="w-full p-2 rounded-md border border-gray-300 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Açıklama:</label>
              <textarea
                required
                className="w-full p-2 rounded-md border border-gray-300 text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
            >
              Gönder
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 mb-4">
          {typeof window !== "undefined" && (
            <Suspense fallback={<div>Harita yükleniyor...</div>}>
              <MapComponent />
            </Suspense>
          )}
        </div>
      </div>

      <div className="w-full mt-8 bg-white p-4 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">Şirket Bilgileri</h3>
        <div className="mb-4">
          <strong>Email:</strong>
          <a href="mailto:info@afilliorganizasyon.com">
            info@afilliorganizasyon.com
          </a>
        </div>
        <div className="mb-4">
          <strong>Adres:</strong> Varsak Karşıyaka, Zafer Cd. No:5/B, 07020
          Kepez/Antalya
        </div>
        <div className="mb-4">
          <strong>Telefon:</strong> +90 123 456 78 90
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
