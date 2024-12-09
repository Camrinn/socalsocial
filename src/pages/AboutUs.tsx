import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // GSAP animation for heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%", // Start animation when section is 75% in viewport
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    // GSAP animation for cards
    if (cardRefs.current) {
      gsap.fromTo(
        cardRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white text-black min-h-screen px-8 py-16"
    >
      <div
        ref={headingRef}
        className="text-center mb-12"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        About Us
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        <div
          ref={(el) => cardRefs.current.push(el!)}
          className="bg-gray-100 p-6 shadow-lg rounded-lg"
        >
          <img
            src="assets/Scarlett.png" // Replace with your image path
            alt="Marketing Experts"
            className="w-full rounded-lg mb-4"
          />
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Passionate Marketing Experts
          </h3>
          <p className="text-sm leading-relaxed">
          Scarlett and Katie here to give a little introduction!
          We are two SoCal girls with a passion for content creation and marketing.
          Our worlds collided and we decided to put our strong suites together by creating an agency to fulfill all modern day marketing needs.
          We have both been in the marketing field for 5+ years and understand what it takes to have a strong brand presence.
          We've built this brand around the SoCal lifestyle - it's made to be seamless and chill for you.
          </p>
        </div>
        <div
          ref={(el) => cardRefs.current.push(el!)}
          className="bg-gray-100 p-6 shadow-lg rounded-lg"
        >
          <img
            src="assets/SocalSocial.png" // Replace with your logo path
            alt="Strategic Approach"
            className="w-full rounded-lg mb-4"
          />
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Our Strategic Approach
          </h3>
          <p className="text-sm leading-relaxed">
          As experts in todays marketing trends, we will do a complete audit on your current presence and present our implementation ideas.
          After reviewing your wants and needs for the brand, together we will come up with the best plan of action tailored specifically to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
