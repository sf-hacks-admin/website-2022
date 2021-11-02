import React from "react";
import "./placeholder.css";
import facebookIcon from "../../assets/social-links/fb-icon.svg";
import instagramIcon from "../../assets/social-links/ig-icon.svg";
import twitterIcon from "../../assets/social-links/ttr-icon.svg";
import linkedinIcon from "../../assets/social-links/lnk-icon.svg";
import discordIcon from "../../assets/social-links/dc-icon.svg";
const placeholder = () => {
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
        // <div className="placeholder-container">
        //     <div className="heading-container">
        //         <div id="" className="sub-heading">
        //             SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP DISCOVER
        //             WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
        //         </div>
        //         <div id="" className="main-heading">
        //             SF HACKS
        //         </div>
        //     </div>

        //     <div className="sub-info">
        //         <div className="info-question">what do we do?</div>
        //         <div className="info-answer">we represent an ambitious inclusive community and empower them.</div>
        //     </div>
        //     <div className="coming-soon">MORE COMING SOON</div>
        // </div>
        <div className="placeholder-container">
            <div className="heading-container">
                <div id="sub-heading" className="scrolling">
                    SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP DISCOVER
                    WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                </div>
                <div id="main-heading" className="resp-line1">
                    SF HACKS
                </div>
            </div>

            <div className="sub-info">
                <div className="info-question">what do we do?</div>
                <div className="info-answer">we represent an ambitious inclusive community and empower them.</div>
            </div>
            <div className="coming-soon">MORE COMING SOON</div>
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
        </div>
    );
};

export default placeholder;
