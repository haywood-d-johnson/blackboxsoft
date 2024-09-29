import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./index.css";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

<FontAwesomeIcon icon="fa-brands fa-facebook-f" />;

const SocialLinks = () => {
    return (
        <div className="social_link-container">
            <a
                href="https://www.facebook.com/bboxsoft"
                className="sl-circle"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
                href="https://www.youtube.com/@BlackBoxSoft"
                className="sl-circle yt"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube} />{" "}
            </a>
        </div>
    );
};

export default SocialLinks;
