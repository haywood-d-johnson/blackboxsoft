import React from "react";

import { Link } from "react-scroll";
import SocialLinks from "../SocialLinkComponent";

import "./index.css";

const MenuBar = () => {
    return (
        <div className="menu_bar">
            <div className="menu_bar-container">
                <div className="logo-container">
                    <img
                        src="/BlackBoxSoftLogo.png"
                        alt="BBSLogo"
                        className="logo-img"
                    />
                    <div className="logo_name">BlackBox Soft</div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="about" smooth duration={500}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="services" smooth duration={500}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="social-links">
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
