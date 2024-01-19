import React, { useRef, useEffect, useState } from "react";
import "./AboutMe.css";
import "./animista.css";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  const handleAnimationEnd = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`About-Me-Div ${isVisible ? "tracking-in-contract" : ""}`}
      ref={aboutMeRef}
      onAnimationEnd={handleAnimationEnd}
    >
      <h1 className="AboutMe-Title">About Me</h1>
      <div className="P-div">
        <p className="tracking-in-contract AboutME-Para">
          Born and raised in Michigan, I went to Cassopolis Village High School until i moved and graduated at 
          BrandyWine HighSchool in Niles,MI. While in school i worked many jobs..Pizza Places, When i turned 18
          i got What i call my first real job working at the Niles Hospital for 2 years. When i Learned about Coding 
          i decided why not! After getting Introduced to Javascript and python I decided to mainly focus on Javascript and have been
          since August of 2023. Im looking for an amazing career in Web Developement, but Most importantly to improve my skills!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;