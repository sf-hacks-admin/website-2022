import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SideBar from "./Sidebar";
import { isMacOs, isIOS } from "react-device-detect";
import "./Navbar.css";

const Navbar = () => {
    if (isMacOs || isIOS)
        return (
            <div className="bar-mac" id="Navbar">
                <SideBar className="side" />
                <a
                    id="mlh-trust-badge"
                    className="badge-link"
                    href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=red"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-red.svg"
                        alt="Major League Hacking 2022 Hackathon Season"
                        className="badge"
                    />
                </a>

                <div className="logo"></div>

                <nav className="nav">
                    <ul className="nav-ul">
                        <AnchorLink className="projects" href="#tracks">
                            <li>tracks</li>
                        </AnchorLink>

                        <AnchorLink className="projects" href="#faq">
                            <li>faq</li>
                        </AnchorLink>

                        <AnchorLink className="projects" href="#sponsors">
                            <li>sponsors</li>
                        </AnchorLink>
                    </ul>
                </nav>
            </div>
        );

    return (
        <div className="bar" id="Navbar">
            <SideBar className="side" />
            <a
                id="mlh-trust-badge"
                className="badge-link"
                href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=red"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-red.svg"
                    alt="Major League Hacking 2022 Hackathon Season"
                    className="badge"
                />
            </a>

            <div className="logo"></div>

            <nav className="nav">
                <ul className="nav-ul">
                    <AnchorLink className="projects" href="#tracks">
                        <li>tracks</li>
                    </AnchorLink>
                    <AnchorLink className="projects" href="#faq">
                        <li>faq</li>
                    </AnchorLink>

                    <AnchorLink className="projects" href="#sponsors">
                        <li>sponsors</li>
                    </AnchorLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
