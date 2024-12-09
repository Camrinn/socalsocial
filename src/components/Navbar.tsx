import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for the DOM to load, then animate
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -50, opacity: 0 }, // Start above the screen and fully transparent
        {
          y: 0, // Move to its normal position
          opacity: 1, // Fade in
          duration: 1, // Animation duration
          ease: "power4.out", // Smooth easing
        }
      );
    }
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-transparent"
    >
      {/* Left - Menu */}
      <div className="text-white text-sm font-medium tracking-wide cursor-pointer hover:opacity-80 transition-opacity">
        MENU
      </div>

      {/* Center - Logo */}
      <div
        className="text-white text-lg font-semibold tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        SoCal SoCial
      </div>

      {/* Right - Let's Talk */}
      <div className="text-white text-sm font-medium tracking-wide cursor-pointer hover:opacity-80 transition-opacity">
        LET'S TALK
      </div>
    </nav>
  );
};

export default Navbar;
