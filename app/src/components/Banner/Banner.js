import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";

const Banner = ({ text }) => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="about-section">
            <div className="about-banner">
                <div className="banner-text-top" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    {text}
                </div>
                <div className="banner-text-center" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    {text}
                </div>
                <div className="banner-text-bottom" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    {text}
                </div>
            </div>
            <div className="big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                <div className="big-cross"></div>
            </div>

            <div className="small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="small-cross"></div>
            </div>
        </div>
    );
};

export default Banner;
