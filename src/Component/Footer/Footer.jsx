import React from "react";
import Logo from "../NavBar/Logo";

const Footer = () => {
  return (
    <div class="bg-black mt-16 text-white">
      <div class="container mx-auto px-8 py-4 md:flex justify-center items-center">
        <div class="md:mb-0 flex items-center flex-col">
          <Logo />
          <p className="ml-5 text-center mt-2">Tüm hakları saklıdır &copy; 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
