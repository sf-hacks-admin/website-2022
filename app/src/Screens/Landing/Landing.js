import React from "react";
import "./Landing.css";
import { useState, useEffect } from "react";
import { isMacOs, isIOS } from "react-device-detect";
import { Popup } from "react-typeform-embed";

const Landing = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    useEffect(() => {
        const countdown = () => {
            let endDate = new Date("03/13/2022 1:00 PM PDT").getTime();
            let today = new Date().getTime();

            let timeDiff = endDate - today;

            let seconds = 1000;
            let minutes = seconds * 60;
            let hours = minutes * 60;
            let days = hours * 24;

            let timeDays = Math.floor(timeDiff / days);
            let timeHours = Math.floor((timeDiff % days) / hours);
            let timeMinutes = Math.floor((timeDiff % hours) / minutes);
            let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

            timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
            timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
            timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

            setDays(timeDays);
            setHours(timeHours);
            setMinutes(timeMinutes);
            setSeconds(timeSeconds);
        };

        setInterval(countdown, 0);
    }, []);

    if (isMacOs || isIOS)
        return (
            <div className="landing-section">
                <div className="heading-container-mac">
                    <div className="main-heading-mac">SF HACKS</div>
                    <div id="sub-heading-mac">
                        SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP
                        DISCOVER WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                    </div>
                </div>

                <div className="heading-container-resp-mac">
                    <div className="main-heading-resp1-mac">SF</div>
                    <div className="main-heading-resp2-mac">HACKS</div>
                    <div className="sub-resp-cont-mac">
                        <div id="sub-heading-resp-mac" className="scrolling-mac">
                            SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP
                            DISCOVER WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                        </div>
                    </div>
                </div>

                <div className="timer-cont-mac">
                    <div className="timer-cont-one">Hacking Ends In:</div>
                    <div className="timer-mac">
                        <div>
                            <span id="nums">{days}</span>
                            Days
                        </div>
                        <div>
                            <span id="nums">{hours}</span>
                            Hours
                        </div>
                        <div>
                            <span id="nums">{minutes}</span>
                            Minutes
                        </div>
                        <div>
                            <span id="nums">{seconds}</span>
                            Seconds
                        </div>
                    </div>
                </div>

                <div className="newsletter">
                    <Popup id="eydupOgY" size={100}>
                        <div className="newsletter-btn-mac" style={{ marginRight: "20px" }}>
                            Register Today
                        </div>
                    </Popup>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdRys5TN1QxeRkkeBO8TJAamAmD00x0XO8C1YI2FiV_KJ2AEw/viewform"
                        target="_blank"
                        className="newsletter-btn-mac"
                        rel="noreferrer"
                        style={{ marginLeft: "20px" }}
                    >
                        Sub Newsletter
                    </a>
                </div>
            </div>
        );

    return (
        <div className="landing-section">
            <div className="heading-container">
                <div className="main-heading">SF HACKS</div>
                <div id="sub-heading">
                    SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP DISCOVER
                    WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                </div>
            </div>

            <div className="heading-container-resp">
                <div className="main-heading-resp1">SF</div>
                <div className="main-heading-resp2">HACKS</div>
                <div className="sub-resp-cont">
                    <div id="sub-heading-resp" className="scrolling">
                        SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP
                        DISCOVER WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                    </div>
                </div>
            </div>

            <div className="timer-cont">
                <div className="timer-cont-one">Hacking Ends In:</div>
                <div className="timer">
                    <div>
                        <span id="nums">{days}</span>
                        Days
                    </div>
                    <div>
                        <span id="nums">{hours}</span>
                        Hours
                    </div>
                    <div>
                        <span id="nums">{minutes}</span>
                        Minutes
                    </div>
                    <div>
                        <span id="nums">{seconds}</span>
                        Seconds
                    </div>
                </div>
            </div>

            <div className="newsletter">
                <Popup id="eydupOgY" size={100}>
                    <div className="newsletter-btn" style={{ marginRight: "20px" }}>
                        Register Today
                    </div>
                </Popup>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRys5TN1QxeRkkeBO8TJAamAmD00x0XO8C1YI2FiV_KJ2AEw/viewform"
                    target="_blank"
                    className="newsletter-btn"
                    rel="noreferrer"
                    style={{ marginLeft: "20px" }}
                >
                    Sub Newsletter
                </a>
            </div>
        </div>
    );
};

export default Landing;
