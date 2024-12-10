import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (serviceRefs.current) {
      serviceRefs.current.forEach((service) => {
        gsap.fromTo(
          service,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h2
        className="text-center text-black mb-16"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          background: "black",
          WebkitBackgroundClip: "text",        }}
      >
        Services
      </h2>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[index] = el!)}
            className="bg-gradient-to-r from-[#486d5b] to-[#2A463A] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3
              className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#cfe8d7]"
              style={{
                fontFamily: "'Roboto Slab', serif",
                textTransform: "uppercase",
              }}
            >
              {service.title}
            </h3>
            <ul className="text-sm text-gray-300 space-y-2 flex flex-col items-center">
              {service.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition-colors duration-200"
                >
                  • {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
