import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <div
          className="container"
          style={openMenu ? { marginBottom: "20px" } : {}}
        >
          <img src={logo} alt="Logo" />
          <span>VirtualR</span>
        </div>

        <ul className="list-container">
          <li>Features</li>
          <li>Workflow</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>

        <div className="btn-container">
          <Button1>Sign In</Button1>
          <Button2>Create an accout</Button2>
        </div>

        <div onClick={handleClick} className="ham">
          {openMenu ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div>
          <ul className="mobile-list-container">
            <li>Features</li>
            <li>Workflow</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>

          <div className="mobile-btn-container">
            <Button1>Sign In</Button1>
            <Button2>Create an accout</Button2>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
