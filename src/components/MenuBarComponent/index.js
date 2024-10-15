import React from "react";

import SocialLinks from "../SocialLinkComponent";

import "./index.css";
import NavLink from "./NavLinkComponent";

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
                <div className="nav-social_container">
                    <NavLink/>
                    <div className="social-links">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
