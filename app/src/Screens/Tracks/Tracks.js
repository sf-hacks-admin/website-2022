import React from "react";
import { useState, useEffect } from "react";
import "./Tracks.css";

export const Tracks = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="tracks-section" id="tracks">
            <div className="banner">
                <div className="track-banner-cont">
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TRACKS
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TRACKS
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TRACKS
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TRACKS
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TRACKS
                    </div>
                </div>
            </div>
            <div className="track-big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                <div className="track-big-cross"></div>
            </div>

            <div className="track-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="track-small-cross"></div>
            </div>
            <div className="tracks-cont">
                <div className="track1" style={{ transform: `translateX(-${offsetY * 0.1}px)` }}>
                    <div>Inclusivity</div>
                    <div className="stroke">Inclusivity</div>
                    <div>Inclusivity</div>
                    <div className="stroke">Inclusivity</div>
                    <div>Inclusivity</div>
                    <div className="stroke">Inclusivity</div>
                </div>
                <div className="track2" style={{ transform: `translateX(+${offsetY * 0.1}px)` }}>
                    <div>Mental Health</div>
                    <div className="stroke">Mental Health</div>
                    <div>Mental Health</div>
                    <div className="stroke">Mental Health</div>
                    <div>Mental Health</div>
                    <div className="stroke">Mental Health</div>
                </div>
                <div className="track3" style={{ transform: `translateX(-${offsetY * 0.1}px)` }}>
                    <div>Sustainability</div>
                    <div className="stroke">Sustainability</div>
                    <div>Sustainability</div>
                    <div className="stroke">Sustainability</div>
                    <div>Sustainability</div>
                    <div className="stroke">Sustainability</div>
                </div>
                <div className="track4" style={{ transform: `translateX(+${offsetY * 0.1}px)` }}>
                    <div>Machine Learning</div>
                    <div className="stroke">Machine Learning</div>
                    <div>Machine Learning</div>
                    <div className="stroke">Machine Learning</div>
                    <div>Machine Learning</div>
                    <div className="stroke">Machine Learning</div>
                </div>
            </div>
        </div>
    );
};
