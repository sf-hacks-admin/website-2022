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

            <div className="sponsor-small-cross-cont-one" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="sponsor-small-cross-one"></div>
            </div>

            <div className="sponsor-small-cross-cont-two" style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
                <div className="sponsor-small-cross-two"></div>
            </div>

            <div className="spon-cont">
                <div className="spon-wrapper">
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                    <div>SF HACKS</div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
