import React from 'react';

import "./index.css";
import NavLink from '../MenuBarComponent/NavLinkComponent';
import SocialLinks from '../SocialLinkComponent';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_container">
                <div className="left-container">
                    <div className="title-container">
                        <div className="img_title-container">
                            <img
                                src="/BlackBoxSoftLogo.png"
                                alt="BBSLogo"
                                className="logo-img"
                            />
                            <h1 className="title">BlackBox Soft</h1>
                        </div>
                        <div className="description">Let's build your digital future together.</div>
                        <div className="contact_box-container">
                            <div className="phone"><em>Feel free to call us: </em><a href="tel:+19402209118" className="phone_number">(940)220-9118</a></div>
                            <div className="email"><em>Or, email us at: </em><a href="mailto:info@blackboxsoft.online" className="email_link">info@blackboxsoft.online</a></div>
                        </div>
                        <div className="social_link-footer">
                            <div className="desc"><em>Also follow us on our socials:</em></div>
                            <SocialLinks/>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <NavLink />
                </div>
            </div>
        </div>
    )
}

export default Contact;
