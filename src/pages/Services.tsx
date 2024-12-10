import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Branding",
    details: ["Logo", "Identity", "Design", "Values", "Mission"],
  },
  {
    id: 2,
    title: "Social Media Management",
    details: [
      "Content",
      "Insights",
      "Aesthetic",
      "Engagement",
      "Publishing",
      "Growth",
    ],
  },
  {
    id: 3,
    title: "Content Creation",
    details: [
      "Videography",
      "Photography",
      "Editing",
      "Copywriting",
      "Creative Direction",
    ],
  },
  {
    id: 4,
    title: "Paid Media Ads",
    details: [
      "Targeting",
      "Niche Audience",
      "Conversions",
      "Brand Awareness",
      "Analytics",
    ],
  },
  {
    id: 5,
    title: "Marketing Strategy",
    details: ["Website", "Content", "Social Media", "SEO", "E-Mail"],
  },
  {
    id: 6,
    title: "Event Management",
    details: [
      "Marketing",
      "Target",
      "Sales",
      "Location",
      "Logistics",
      "Design",
    ],
  },
];

const Services: React.FC = () => {
  const serviceRefs = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

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
    if (serviceRefs.current) {
      serviceRefs.current.forEach((service) => {
        gsap.fromTo(
          service,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      className="bg-[#fdfcf3] text-white min-h-screen px-6 py-16"
      style={{
        backgroundImage: `url('assets/${
          isMobile ? "wall1.jpg" : "wall2.jpg"
        }')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",

      }}
    >
      {/* Heading */}
      <h2
        className="text-center text-white mb-16"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Services
      </h2>

      {/* Service Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto text-center">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[index] = el!)}
            className="space-y-4"
          >
            <h3
              className="text-2xl font-bold text-white"
              style={{
                fontFamily: "'Roboto Slab', serif",
                textTransform: "uppercase",
              }}
            >
              {service.title}
            </h3>
            <ul className="text-lg text-white">
              {service.details.map((detail, idx) => (
                <li key={idx}>• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
