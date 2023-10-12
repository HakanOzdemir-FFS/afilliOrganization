import React from "react";

const Logo = ({ navBarHandler }) => {
  return (
    <div className="ml-[5%] flex items-center flex-col">
      <h1 className="bg-gradient-to-r  from-secondary-dark-color-1 to-primary-light-color-2 text-transparent text-lg tracking-[.75rem] bg-clip-text 2xsm:text-2xl sm:text-3xl">
        AFİLLİ <br />
      </h1>
      <span className="bg-gradient-to-r  from-secondary-dark-color-1 to-primary-light-color-2 text-transparent text-lg tracking-[.25rem] bg-clip-text 2xsm:text-2xl sm:text-3xl">
        Organizasyon
      </span>
    </div>
  );
};

export default Logo;
