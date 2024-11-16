import React from "react";
import "./Footer.css";

const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="list-container1">
          <h3>Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="link1">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-container2">
          <h3>Platfrom</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="link2">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-container3">
          <h3>Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="link3">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
