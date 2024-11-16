import React from "react";
import "./Pricing.css";
import { CheckCircle2 } from "lucide-react";

const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <div className="pricing-container">
        <h2> Pricing</h2>

        <div className="pricing-card-container">
          {pricingOptions.map((pricing, index) => (
            <div key={index} className="pricing-card-item">
              <h2>
                {pricing.title}
                {pricing.title === "Pro" && (
                  <span className="most-popular">Most Popular</span>
                )}
              </h2>
              <h2>
                {pricing.price}
                <span>/Month</span>
              </h2>
              <ul className="pricing-list-container">
                {pricing.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} className="pricing-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button>Subscribe</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
