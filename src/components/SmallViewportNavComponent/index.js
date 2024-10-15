import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faArrowTrendUp, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

import "./index.css";

const SmallVPNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="smallnav-container">
            <input type="checkbox" onClick={handleClick}/>
            <div className="fab" />
            <div className={`fac  ${isOpen ? "open" : ""}`}>
                <Link to="aboutus" smooth duration={500}>
                    <FontAwesomeIcon icon={faComputer} />
                </Link>
                <Link to="process" smooth duration={500}>
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                </Link>
                <Link to="services" smooth duration={500}>
                    <FontAwesomeIcon icon={faBriefcase} />
                </Link>
                <Link to="contact" smooth duration={500}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </div>
        </div>

    );
}

export default SmallVPNav;
