import React from "react";
import Logo from "../NavBar/Logo";

const Footer = () => {
  return (
    <div class="bg-primary-dark-color-1 mt-16 text-white">
      <div class="container mx-auto px-8 py-12 md:flex justify-center items-center">
        <div class="mb-8 md:mb-0 ">
          <Logo />
          <p className="text-center mt-2">Tüm hakları saklıdır &copy; 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
