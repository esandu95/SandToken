import React from "react";

function Navbar() {
    return (
        <form className="menu">
            <a href="/" id="home" className="menuButton">Home</a>
            <a href="/about" id="about" className="menuButton">About</a>
            <a href="/contact" id="contact" className="menuButton">Contact</a>
        </form>
    )
};

export default Navbar;