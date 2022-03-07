import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import aboutVideo from "../../Assets/About-sec/FinalVideo.mp4";
import { isMacOs, isIOS } from "react-device-detect";
import "./About.css";

const About = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isMacOs || isIOS)
        return (
            <div className="about-section">
                <div className="banner">
                    <div className="about-banner-cont">
                        <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                            GOING VIRTUAL
                        </div>
                        <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                            GOING VIRTUAL
                        </div>
                        <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                            GOING VIRTUAL
                        </div>
                        <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                            GOING VIRTUAL
                        </div>
                        <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                            GOING VIRTUAL
                        </div>
                    </div>
                </div>
                <div className="about-big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                    <div className="about-big-cross"></div>
                </div>

                <div className="about-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                    <div className="about-small-cross"></div>
                </div>

                <div className="about-cont">
                    <div className="about-wrapper">
                        <div>
                            <div className="about-head">
                                <div className="about-head-main-mac">
                                    <div className="about-head-one-mac">ABOUT</div>
                                    <div className="about-head-container">
                                        <div className="about-head-two-mac">SF HACKS</div>
                                        <div className="about-head-two-line-mac">s</div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-para">
                                <div className="about-para-cont">
                                    <div className="about-para-one">
                                        Our organization’s <strong className="orange">purpose</strong> is to plan and host
                                        California’s most talented collegiate hackers, designers, and developers, to a{" "}
                                        <strong>3 day hackathon.</strong>
                                    </div>
                                    <div className="about-para-two">
                                        We work towards giving students an environment for{" "}
                                        <strong className="orange">maximum innovation, collaboration,</strong> and{" "}
                                        <strong className="orange">education.</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="react-player-cont">
                            <ReactPlayer
                                url={aboutVideo}
                                className="react-player"
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="about-section">
            <div className="banner">
                <div className="about-banner-cont">
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        GOING VIRTUAL
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        GOING VIRTUAL
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        GOING VIRTUAL
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        GOING VIRTUAL
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        GOING VIRTUAL
                    </div>
                </div>
            </div>
            <div className="about-big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                <div className="about-big-cross"></div>
            </div>

            <div className="about-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="about-small-cross"></div>
            </div>

            <div className="about-cont">
                <div className="about-wrapper">
                    <div>
                        <div className="about-head">
                            <div className="about-head-main">
                                <div className="about-head-one">ABOUT</div>
                                <div className="about-head-container">
                                    <div className="about-head-two">SF HACKS</div>
                                    <div className="about-head-two-line">s</div>
                                </div>
                            </div>
                        </div>

                        <div className="about-para">
                            <div className="about-para-cont">
                                <div className="about-para-one">
                                    Our organization’s <strong className="orange">purpose</strong> is to plan and host
                                    California’s most talented collegiate hackers, designers, and developers, to a{" "}
                                    <strong>3 day hackathon.</strong>
                                </div>
                                <div className="about-para-two">
                                    We work towards giving students an environment for{" "}
                                    <strong className="orange">maximum innovation, collaboration,</strong> and{" "}
                                    <strong className="orange">education.</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="react-player-cont">
                        <ReactPlayer
                            url={aboutVideo}
                            className="react-player"
                            playing={true}
                            controls={true}
                            loop={true}
                            muted={true}
                            playsinline={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
