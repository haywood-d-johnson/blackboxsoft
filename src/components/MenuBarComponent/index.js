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
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
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
