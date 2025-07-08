import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={navHeight ? "show nav" : "nav"}>
      <div className="logo" onClick={gotoHome}>
        PROPERTY RENTALS
      </div>
      <ul>
        <li>
          <Link to={"/aboutus"}>ABOUT US</Link>
        </li>
        <li>
          <Link to={"/villas"}>VILLAS</Link>
        </li>
        <li>
          <Link to={"/contact"}>CONTACT</Link>
        </li>
      </ul>
      <div className="action-buttons">
        <ConnectButton />
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      <RxHamburgerMenu
        className="hamburger"
        onClick={() => setNavHeight(!navHeight)}
      />
    </nav>
  );
};

export default Navbar;
