import React from "react";
import "./WorkFlow.css";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";

const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

const WorkFlow = () => {
  return (
    <div className="workflow-container">
      <h2>
        Accelerate your <span>coding workflow.</span>
      </h2>
      <div className="workflow-content">
        <div className="workflow-img">
          <img src={codeImg} alt="Code" />
        </div>
        <div className="checklist-items">
          {checklistItems.map((item, index) => (
            <div className="checklist-item" key={index}>
              <div className="icon">
                <CheckCircle2 size={20} />
              </div>
              <div className="text">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
