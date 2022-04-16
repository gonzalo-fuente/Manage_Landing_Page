import { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="Brand logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <button className="hover:text-darkGrayishBlue">Pricing</button>
          <button className="hover:text-darkGrayishBlue">Product</button>
          <button className="hover:text-darkGrayishBlue">About Us</button>
          <button className="hover:text-darkGrayishBlue">Careers</button>
          <button className="hover:text-darkGrayishBlue">Community</button>
        </div>
        {/* Button */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`block hamburger md:hidden focus:outline-none ${
            sideMenu && "open"
          }`}
          onClick={() => {
            setSideMenu((prevState) => !prevState);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            sideMenu ? "flex" : "hidden"
          }`}
        >
          <button>Pricing</button>
          <button>Product</button>
          <button>About Us</button>
          <button>Careers</button>
          <button>Community</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
