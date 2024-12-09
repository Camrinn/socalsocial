import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const LoadingAnimation: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Typing effect for "SOCAL SOCIAL"
    if (textRef.current) {
      gsap.to(textRef.current, {
        text: "SOCAL SOCIAL",
        duration: 2,
        repeat: -1,
        repeatDelay: 0.5,
        ease: "power1.inOut",
      });
    }

    // Sliding underline animation
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        width: "100%",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* PNG Logo */}
      <img
        src="assets/socail.png" // Replace with the actual path to your PNG
        alt="SoCal Social Logo"
        className="w-40 h-40 object-contain mb-4" // Adjust size as needed
      />

      {/* Typing Effect for Text */}
      <div
        ref={textRef}
        className="text-center text-2xl font-bold text-black mb-2"
      >
        {/* Text will be dynamically typed here */}
      </div>

      {/* Sliding Underline */}
      <div
        ref={underlineRef}
        className="bg-black h-1 w-0" // The width will animate from 0 to full width
        style={{ transition: "width 1.5s ease-in-out" }}
      ></div>
    </div>
  );
};

export default LoadingAnimation;
