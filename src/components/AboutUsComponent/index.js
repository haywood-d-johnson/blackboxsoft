import React from "react";

import "./index.css";

const AboutUs = () => {
    const AboutUsTitle =
        "Our team will create something special to help your business grow.";
    const AboutUsh3 =
        "BlackBox Soft offers customized technology roadmaps aligned with your business goals.";

    return (
        <section className="aboutus">
            <div className="aboutus-container">
                <h1 className="aboutus-title">{AboutUsTitle}</h1>
                <h3 className="aboutus-description">{AboutUsh3}</h3>
                <button className="contact-btn" type="submit">
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default AboutUs;
