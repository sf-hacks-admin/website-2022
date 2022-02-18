import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SideBar from "./Sidebar";
import "./Navbar.css";

const Navbar = () => {
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

            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="950" height="950" viewBox="0 0 950 950">
                    <g id="Group_18" data-name="Group 18" transform="translate(-9 -45)">
                        <g id="Group_16" data-name="Group 16" transform="translate(-627 97)">
                            <text
                                id="SF"
                                transform="translate(1036 623)"
                                fill="#1c1818"
                                font-size="544"
                                font-family="ITCAvantGardePro-Md, ITC Avant Garde Gothic Pro"
                                font-weight="500"
                                letter-spacing="0.04em"
                            >
                                <tspan x="-277.712" y="0">
                                    SF
                                </tspan>
                            </text>
                            <rect
                                id="Rectangle_12"
                                data-name="Rectangle 12"
                                width="525"
                                height="72"
                                transform="translate(779 386)"
                                fill="#f5f5f5"
                            />
                        </g>
                        {/* <g id="Group_17" data-name="Group 17">
                            <text
                                id="HACKS"
                                transform="translate(804 520) rotate(-90)"
                                fill="#1c1818"
                                font-size="128"
                                font-family="ITCAvantGardePro-Md, ITC Avant Garde Gothic Pro"
                                font-weight="500"
                                letter-spacing="0.04em"
                            >
                                <tspan x="-215.232" y="0">
                                    HACKS
                                </tspan>
                            </text>
                            <rect
                                id="Rectangle_3"
                                data-name="Rectangle 3"
                                width="444"
                                height="14"
                                transform="translate(764 297.5) rotate(90)"
                                fill="#f5f5f5"
                            />
                        </g> */}
                    </g>
                </svg>
            </div>

            <nav className="nav">
                <ul className="nav-ul">
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
