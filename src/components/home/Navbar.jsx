import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("#home");

  const navItems = [
    { id: "#home", icon: "icon-home" },
    { id: "#about", icon: "icon-user-following" },
    { id: "#blog", icon: "icon-note" },
    { id: "#portfolio", icon: "icon-layers" },
    { id: "#contact", icon: "icon-bubble" },
  ];

  return (
    <div className="bottom__nav">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.id}
          onClick={() => setActive(item.id)}
          className={active === item.id ? "active" : ""}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
