import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/list">list </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
