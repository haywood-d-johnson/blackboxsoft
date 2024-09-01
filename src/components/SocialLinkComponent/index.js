import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faXTwitter,
    faLinkedinIn,
    faYoutube,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

<FontAwesomeIcon icon="fa-brands fa-facebook-f" />;

const SocialLinks = () => {
    return (
        <div className="social_link-container">
            <a
                href="#"
                className="sl-circle"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
                href="#"
                className="sl-circle"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
                href="#"
                className="sl-circle"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
                href="#"
                className="sl-circle"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
        </div>
    );
};

export default SocialLinks;
