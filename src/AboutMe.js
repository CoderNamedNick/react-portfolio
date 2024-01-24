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
        I am 20 years young raised in Michigan , I attended Cassopolis Village High School before completing my high school education at Brandywine High School in Niles, MI. Throughout my school years, I worked various jobs, including positions at pizza places.
        <br></br>
        <br></br>
        At 18, I landed what I consider my first significant job at Niles Hospital, where I gained two years of valuable experience. It was during this time that I discovered coding. Introduced to Javascript and Python, I decided to focus primarily on Javascript, and I've been dedicated to it since August 2023.
        <br></br>
        <br></br>
        My current goal is to establish a career in web development, driven by a passion for the field and a strong commitment to improving my skills continually.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;