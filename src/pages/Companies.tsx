import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Companies: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

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
    const projects = projectsRef.current?.querySelectorAll(".project-item");
    projects?.forEach((project) => {
      gsap.fromTo(
        project,
        { rotationY: -90, opacity: 0 },
        {
          rotationY: 0,
          opacity: 1,
          duration: 2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "bottom 10%",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  const projectsData = [
    {
        title: "Drink Lava",
        description:
          "Real ingredients, small batched, super fresh, and big bold flavors so that you can make the perfect cocktail in seconds. Every. Single. Time.",
        image: "/assets/Company1.png",
        reverse: false,
        link: "https://drinklava.com/",
      },
      {
        title: "Maniball Tequila",
        description:
          "A spirit that breaks all the rules, uniting the famously bold and spirited essence of tequila from Mexico with the much-loved richness of peanut butter.",
        image: "/assets/Company2.png",
        reverse: true,
        link: "https://www.maniballtequila.com/",
      },
      {
        title: "Feel",
        description:
          "Welcome to feel luxury apparel, where luxury meets sustainability. We take pride in crafting the softest men's shirts, redefining comfort.",
        image: "/assets/Company3.png",
        reverse: false,
        link: "https://feelluxuryapparel.com/",
      },

    // Add more projects here...
  ];

  return (
    <section
    style={{
      backgroundImage: `url('assets/${
        isMobile ? "wall3.jpg" : "wall2.jpg"
      }')`,
      backgroundSize: isMobile ? "contain" : "cover",
      backgroundRepeat: "repeat",
      backgroundPosition: isMobile ? "top" : "center",
      backgroundAttachment: isMobile ? "scroll" : "fixed",
    }}
  id="work"
  ref={projectsRef}
  className="w-full  space-y-16 px-6 py-6 md:px-16"
>
  <h2 className="text-3xl md:text-4xl font-bold py-12 text-white text-center mb-8">
    Companies We Helped Grow!
  </h2>
  {projectsData.map((project, index) => (
    <div
      key={index}
      className={`project-item flex flex-col ${
        project.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover"
      />
      <div className="md:w-1/2 text-white mb-20 space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-lg text-gray-300">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F05454] hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  ))}
</section>

  );
};

export default Companies;
