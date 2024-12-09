import SocialIcons from "./SocialIcons";

const Footer = () => (
  <footer
    className="text-white text-center p-6 relative"
    style={{
      backgroundImage: "url('/assets/blackbg.jpg')", // Update the path to your actual image
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 py-8 px-6 gap-8 items-center">
      {/* Copyright Information */}
      <p className="text-sm md:text-base">
      Copyright © {new Date().getFullYear()} SoCal SoCial - All Rights Reserved.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-2">SAY HELLO</p>
          <SocialIcons />
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center md:text-right">
        <p className="text-sm md:text-base">
          <strong>Email:</strong> info@socalsocialco.com
        </p>
        <p className="text-sm md:text-base">
          <strong>Location:</strong> San Diego
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
