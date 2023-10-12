import React, { useState } from "react";
import { Link } from "react-scroll";

import MobileMenu from "./MobileMenu";
import ReactDOM from "react-dom";
import Logo from "./Logo";

const Navbar = () => {
  let mobileMenuElement;
  if (typeof document !== "undefined") {
    mobileMenuElement = document.getElementById("mobile-menu");
  }

  const [openMenu, setOpenMenu] = useState(false);
  const [animation, setAnimation] = useState("");

  const navBarHandler = () => {
    if (openMenu) {
      setAnimation("slideOutToRight");
      setTimeout(() => {
        setOpenMenu(false);
      }, 1000);
    } else {
      setAnimation("slideInFromRight");
      setOpenMenu(true);
    }
  };

  const mobileMenu =
    mobileMenuElement &&
    ReactDOM.createPortal(
      <MobileMenu
        navBarHandler={navBarHandler}
        animation={animation}
        openMenu={openMenu}
      />,
      mobileMenuElement
    );

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {openMenu && mobileMenu}

      <nav className="fixed top-0 left-0  right-0 bg-primary-dark-color-1 p-4 shadow-md z-40">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="text-white font-bold text-xl">
            <button>
              <Logo />
            </button>
          </div>

          <div className="flex items-center self-center">
            <ul className="space-x-4 hidden lg:flex">
              <li
                onClick={goToTop}
                className="text-white hover:text-blue-300 transition ease-in-out duration-300 text-lg cursor-pointer"
              >
                Ana Sayfa
              </li>
              <li>
                <Link
                  to="hizmetlerimiz"
                  smooth={true}
                  duration={0}
                  className="text-white hover:text-blue-300 transition ease-in-out duration-300 text-lg cursor-pointer"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  to="hakkimizda"
                  smooth={true}
                  duration={0}
                  className="text-white hover:text-blue-300 transition cursor-pointer ease-in-out duration-300 text-lg"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="how-to"
                  smooth={true}
                  duration={0}
                  className="text-white hover:text-blue-300 transition cursor-pointer ease-in-out duration-300 text-lg"
                >
                  Nasıl Çalışır
                </Link>
              </li>

              <li>
                <button className="text-white hover:text-blue-300 transition ease-in-out duration-300 text-lg">
                  <Link to="contact" smooth={true} duration={0}>
                    İletişim
                  </Link>
                </button>
              </li>
            </ul>
            <button onClick={navBarHandler} className="lg:hidden ml-5">
              <div className="flex flex-col w-6 h-auto justify-between">
                <span className="w-full h-1 bg-white mb-1"></span>
                <span className="w-full h-1 bg-white mb-1"></span>
                <span className="w-full h-1 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
