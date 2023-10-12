import React from "react";
import { Link } from "react-scroll";

const MobileMenu = ({ navBarHandler, animation }) => {
  return (
    <React.Fragment>
      <div
        className="h-screen w-[50%] fixed top-0 right-0 bg-primary-light-color-2 flex items-center flex-col justify-start animate-bounce bg-opacity-50	z-50"
        style={{ animation: `${animation} 1s ease-in-out forwards` }}
      >
        <div className="w-full text-center mb-20 mt-5">
          <h1
            className="
            bg-secondary-dark-color-1 py-2 text-white rounded-lg shadow-xl inline-block px-10"
            onClick={navBarHandler}
          >
            Close
          </h1>
        </div>

        <React.Fragment>
          <ul className="tracking-[.25rem] flex flex-col space-y-5">
            <li className="py-4 px-2 text-center text-xl bg-primary-dark-color-1 text-white rounded-md shadow-md">
              <Link to="how-to" smooth={true} duration={0}>
                Nasıl Çalışır
              </Link>
            </li>
            <li className="py-4 px-2 text-center text-xl bg-primary-dark-color-1 text-white rounded-md shadow-md">
              <Link to="hakkimizda" smooth={true} duration={0}>
                Hakkımızda
              </Link>
            </li>
            <li className="py-4 px-2 text-center text-xl bg-primary-dark-color-1 text-white rounded-md shadow-md">
              <Link to="hizmetler" smooth={true} duration={0}>
                {" "}
                Hizmetlerimiz
              </Link>
            </li>
            <li className="py-4 px-2 text-center text-xl bg-primary-dark-color-1 text-white rounded-md shadow-md">
              <Link to="contact" smooth={true} duration={0}>
                İletişim
              </Link>
            </li>
          </ul>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default MobileMenu;
