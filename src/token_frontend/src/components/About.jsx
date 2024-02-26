import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About() {

    return (
        <div id="screen">
            <Header />
            <div className="window white">
                <h2>About Sand</h2>
                <p className="about-text">
                    SAND is a project built on the ICP (Internet Computer Protocol) network using Motoko,React and other languages.
                    The Project and it's website it's totaly hosted on the blockchain <br />
                    There are only 10M SAND.<br />
                    You can claim 10k for free into your account using the Faucet. It is reccomended that you log in with your INTERNET IDENTITY before claiming.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;
