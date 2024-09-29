import React from 'react';

import { Link } from "react-scroll";

import "./index.css";

const NavLink = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="aboutus" smooth duration={500}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="process" smooth duration={500}>
                        Process
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
    );
};

export default NavLink;
