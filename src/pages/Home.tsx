import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingAnimation from "../components/Loading";
import AboutUs from "./AboutUs";
import Companies from "./Companies";
import Services from "./Services";

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // State to detect screen size

  const heroRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup resize event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulate loading delay (2 seconds)
    const timeout = setTimeout(() => {
      setIsLoading(false);

      // GSAP animation for the hero text
      if (heading1Ref.current && heading2Ref.current) {
        const tl = gsap.timeline();

        tl.fromTo(
          heading1Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.inOut" }
        )
          .to(heading1Ref.current, { opacity: 0, duration: 1, ease: "power2.inOut" })
          .to(heading1Ref.current, { opacity: 1, duration: 1, ease: "power2.inOut" });

        tl.fromTo(
          heading2Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power2.inOut" },
          "<" // Synchronized animation
        )
          .to(heading2Ref.current, { opacity: 0, duration: 1, ease: "power2.inOut" })
          .to(heading2Ref.current, { opacity: 1, duration: 1, ease: "power2.inOut" });
      }

      if (aboutUsRef.current) {
        gsap.fromTo(
          aboutUsRef.current,
          { scale: 1, opacity: 1 },
          {
            scale: 2,
            opacity: 0,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "bottom center", // Start animation when the bottom of the hero section is in the center
              end: "bottom top", // End animation when the bottom of the hero section is at the top
              scrub: true, // Smooth transition based on scrolling
            },
          }
        );
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div
          style={{
            backgroundImage: isMobile
              ? "url('assets/wall3.jpg')" // Mobile background
              : "url('assets/wall2.jpg')", // Desktop background
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: isMobile ? "fixed" : "fixed", // Disable fixed for mobile
          }}
          className="bg-black text-white min-h-screen"
        >
          {/* Ensure no white space at the top */}
          <style>
            {`
              body, html {
                margin: 0;
                padding: 0;
                overflow-x: hidden; /* Prevent horizontal scrolling */
              }
            `}
          </style>

          {/* Hero Section */}
          <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col justify-center items-center px-6"
          >
            {/* Heading 1 */}
            <div
              ref={heading1Ref}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 8vw, 10rem)",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "0.5rem",
                color: "white",
              }}
            >
              BRINGING THE ENERGY
            </div>

            {/* Heading 2 */}
            <div
              ref={heading2Ref}
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontSize: "clamp(1.5rem, 6vw, 6rem)",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: "1.2",
                color: "white",
              }}
            >
              TO YOUR BRAND
            </div>

            {/* About Us Text */}
            <div
              ref={aboutUsRef}
              style={{
                position: "absolute",
                bottom: "5%",
                textAlign: "center",
                fontSize: "1.5rem",
                fontFamily: "'Roboto Slab', serif",
                textTransform: "uppercase",
                color: "white",
                cursor: "pointer",
              }}
              className="flex flex-col items-center"
            >
              <span>About Us</span>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                ↓
              </span>
            </div>
          </section>
          <AboutUs />
          <Companies />
          <Services />
        </div>
      )}
    </>
  );
};

export default HomePage;
