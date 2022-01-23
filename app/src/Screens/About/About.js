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
                <div className="about-banner-text-top" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    GOING VIRTUAL
                </div>
                <div className="about-banner-text-center" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    GOING VIRTUAL
                </div>
                <div className="about-banner-text-bottom" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    GOING VIRTUAL
                </div>
            </div>
            <div className="about-big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                <div className="about-big-cross"></div>
            </div>

            <div className="about-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="about-small-cross"></div>
            </div>

            <div className="margin">About</div>
            <div>SF HACKS</div>
            <div>
                Our organization’s purpose is to plan and host California’s most talented collegiate hackers, designers, and
                developers, to a 24-hour hackathon. We work towards giving students an environment for maximum innovation,
                collaboration, and education.
            </div>
        </div>
    );
};
{
    /* <div className="about-section">
            <Banner text={"test"} />
        </div> */
}
export default About;
