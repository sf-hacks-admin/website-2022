import React from "react";
import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="about-section">
            <div className="about-banner">
                <div className="banner-outline-font-top" style={{ transform: `translateY(-${offsetY * 0.08}px)` }}>
                    GOING VIRTUAL
                </div>
                <div style={{ transform: `translateY(-${offsetY * 0.08}px)` }}>GOING VIRTUAL</div>
                <div className="banner-outline-font-bottom" style={{ transform: `translateY(-${offsetY * 0.08}px)` }}>
                    GOING VIRTUAL
                </div>
            </div>
            <div className="big-cross-cont">
                <div className="big-cross"></div>
            </div>

            <div className="small-cross-cont">
                <div className="small-cross"></div>
            </div>
            <div className="margin">GOING VIRTUAL</div>
            <div>GOING VIRTUAL</div>
            <div>GOING VIRTUAL</div>
        </div>
    );
};

export default About;
