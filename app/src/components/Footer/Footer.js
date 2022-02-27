import React from "react";
import mailgo from "mailgo";
import facebookIcon from "../../Assets/Social-imgs/fb-icon.svg";
import instagramIcon from "../../Assets/Social-imgs/ig-icon.svg";
import twitterIcon from "../../Assets/Social-imgs/ttr-icon.svg";
import linkedinIcon from "../../Assets/Social-imgs/lnk-icon.svg";
import discordIcon from "../../Assets/Social-imgs/dc-icon.svg";
import "./Footer.css";

const Footer = () => {
    mailgo();
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
            <div className="footer-conduct">
                <a target="_blank" rel="noreferrer" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                    MLH Code of Conduct
                </a>
            </div>
            <div className="footer-cont">
                <div className="footer-style">
                    {socials.map((social) => (
                        <div key={social.name}>
                            <a href={social.link} target="_blank" rel="noreferrer">
                                <img src={social.icon} className="social-icons" alt="" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="footer-email">
                    <div className="resp-footer">| </div>
                    <a class="light" href="mailto:sfhacksteam@gmail.com">
                        sfhacksteam@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
