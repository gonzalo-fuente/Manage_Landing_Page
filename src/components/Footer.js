import logo from "../assets/logo-white.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-evenly px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
          <div className="mx-auto my-6 text-center text-white lg:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src={logo} className="h-8" alt="Brand logo" />
          </div>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            <button>
              <img src={facebookIcon} alt="facebook Icon" className="h-8" />
            </button>
            <button>
              <img src={youtubeIcon} alt="youtube Icon" className="h-8" />
            </button>
            <button>
              <img src={twitterIcon} alt="twitter Icon" className="h-8" />
            </button>
            <button>
              <img src={pinterestIcon} alt="pinterest Icon" className="h-8" />
            </button>
            <button>
              <img src={instagramIcon} alt="instagram Icon" className="h-8" />
            </button>
          </div>
        </div>
        {/* List Container */}
        <div className="flex justify-around space-x-12">
          <div className="flex flex-col space-y-3 text-white">
            <button className="hover:text-brightRed">Home</button>
            <button className="hover:text-brightRed">Pricing</button>
            <button className="hover:text-brightRed">Products</button>
            <button className="hover:text-brightRed">About</button>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <button className="hover:text-brightRed">Careers</button>
            <button className="hover:text-brightRed">Community</button>
            <button className="hover:text-brightRed">Privacy Policy</button>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <Button>Go</Button>
            </div>
          </form>
          <div className="hidden text-white lg:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
