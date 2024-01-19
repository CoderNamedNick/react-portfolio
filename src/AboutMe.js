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
        <p className="tracking-in-contract">Born and raised in Michigan </p>
      </div>
    </div>
  );
};

export default AboutMe;