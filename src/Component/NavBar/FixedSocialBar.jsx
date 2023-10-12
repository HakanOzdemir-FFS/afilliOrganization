import React, { useState, useEffect } from "react";

const FixedSocialBar = () => {
  const [visible, setVisible] = useState(false);
  const [messageClicked, setMessageClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible && !messageClicked) {
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 15000);

      return () => clearTimeout(hideTimer);
    }
  }, [visible, messageClicked]);

  return (
    <React.Fragment>
      <div className="sm:hidden fixed bottom-[20%] right-0 py-2 w-10 bg-stone-300 rounded-l-lg flex flex-col space-y-3 justify-center items-center z-50">
        <a href="tel:+905555639356" target="_blank" rel="noopener noreferrer">
          <img className="w-6 " src="/svg/mobile.svg" alt="mobile-logo" />
        </a>
        <a
          href="https://www.instagram.com/antalya.afilliorganizasyonn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-6 " src="/svg/instagram.svg" alt="instagram-logo" />
        </a>
        <a
          href="https://www.facebook.com/antalya.afilliorganizasyonn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-6 "
            src="/svg/facebook.svg"
            alt="facebook-logo"
            target="_blank"
            rel="noopener noreferrer"
          />
        </a>
        <a
          href="https://wa.me/+905555639356"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-6 " src="/svg/whatsapp.svg" alt="whatsapp-logo" />
        </a>
      </div>
      <div className="hidden md:block fixed bottom-10 right-10 z-10">
        <div className="relative">
          <a
            href="https://wa.me/+905555639356"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-16" src="/svg/whatsapp.svg" alt="whatsapp-logo" />
          </a>

          {visible && (
            <a
              onClick={() => setMessageClicked(true)}
              href="https://wa.me/+905555639356"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-16 -left-[20rem] bg-gray-800 text-white border border-gray-700 p-4 rounded shadow-md"
            >
              Sizlere daha hızlı yardımcı olabilmemiz için Whatsapptan
              yazabilirsiniz.
            </a>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FixedSocialBar;
