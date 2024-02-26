import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <div className="blue window" id="logo">
        <h1>
          <span role="img" aria-label="tap emoji">
            ⌛SAND
          </span>
        </h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
