import React from "react";
import "./footer.css";
import facebookIcon from "../../assets/social-links/fb-icon.svg";
import instagramIcon from "../../assets/social-links/ig-icon.svg";
import twitterIcon from "../../assets/social-links/ttr-icon.svg";
import linkedinIcon from "../../assets/social-links/lnk-icon.svg";
import discordIcon from "../../assets/social-links/dc-icon.svg";

const footer = () => {
    const socials = [
        {
            name: "facebook",
            icon: facebookIcon,
            link: "https://www.facebook.com/sfhacks/",
        },
        {
            name: "instagram",
            icon: instagramIcon,
            link: "https://www.instagram.com/sf.hacks/?hl=en",
        },
        {
            name: "discord",
            icon: discordIcon,
            link: "https://discord.gg/sxQjq7SjjW",
        },
        {
            name: "linkedin",
            icon: linkedinIcon,
            link: "https://www.linkedin.com/company/sf-hacks-sfsu/",
        },
        {
            name: "twitter",
            icon: twitterIcon,
            link: "https://twitter.com/sf_hacks?lang=en",
        },
    ];
    return (
        <div className="footer">
            <div className="footer-style">
                {socials.map((social) => (
                    <div key={social.name}>
                        <a href={social.link}>
                            <img src={social.icon} className="social-icons" alt="" />
                        </a>
                    </div>
                ))}
            </div>
            <div className="footer-email">
                <span className="resp-footer">|</span> sfhacksteam@gmail.com
            </div>
        </div>
    );
};

export default footer;