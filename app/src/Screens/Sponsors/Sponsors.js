import React from "react";
import { useState, useEffect } from "react";
import "./Sponsors.css";

const Sponsors = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sponsor-section">
            <div className="sponsor-banner">
                <div className="sponsor-banner-text-top" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    SPONSORS
                </div>
                <div className="sponsor-banner-text-center" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    SPONSORS
                </div>
                <div className="sponsor-banner-text-bottom" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    SPONSORS
                </div>
            </div>
            <div className="sponsor-big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                <div className="sponsor-big-cross"></div>
            </div>

            <div className="sponsor-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="sponsor-small-cross"></div>
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

export default Sponsors;
