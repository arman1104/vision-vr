import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import "./HeroSection.css";
import Button2 from "../Buttons/Button2";
import Button1 from "../Buttons/Button1";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>
        Virtual build tools <span>for developers</span>
      </h1>
      <p>
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="hero-btn-container">
        <Button2>Start for Free</Button2>
        <Button1>Documentation</Button1>
      </div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
