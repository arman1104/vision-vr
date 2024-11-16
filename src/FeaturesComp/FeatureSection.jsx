import React from "react";
import "./FeatureSection.css";
import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
} from "lucide-react";

const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <span className="feature-span">feature</span>
        <h2 className="feature-h2">
          Easily build <span>your code</span>
        </h2>
      </div>

      <div className="card-container">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="icon">{feature.icon}</div>
            <h3 className="card-text">{feature.text}</h3>

            <p className="card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
