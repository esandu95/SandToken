import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {

    return (
        <div id="screen">
            <Header />
            <div className="window white">
                <h2>Contact me!</h2>
                <p>
                    Feel free to message me 👉
                    <a href="https://www.instagram.com/zero2fullstack/" target="_blank"> Instagram</a>
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
