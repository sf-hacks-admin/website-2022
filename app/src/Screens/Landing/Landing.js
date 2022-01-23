import React from "react";
import "./Landing.css";
import { useState, useEffect } from "react";

const Landing = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    useEffect(() => {
        const countdown = () => {
            const endDate = new Date("March 25, 2022 00:00:00").getTime();
            const today = new Date().getTime();

            const timeDiff = endDate - today;

            const seconds = 1000;
            const minutes = seconds * 60;
            const hours = minutes * 60;
            const days = hours * 24;

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

    return (
        <div>
            <div className="heading-container">
                <div className="main-heading">SF HACKS</div>
                <div id="sub-heading">
                    SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP DISCOVER
                    WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                </div>
            </div>

            <div className="timer-cont">
                Hacking Starts In:
                <div className="timer">
                    <div>
                        <span>{days}</span>
                        Days
                    </div>
                    <div>
                        <span>{hours}</span>
                        Hours
                    </div>
                    <div>
                        <span>{minutes}</span>
                        Minutes
                    </div>
                    <div>
                        <span>{seconds}</span>
                        Seconds
                    </div>
                </div>
            </div>

            <div className="newsletter">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRys5TN1QxeRkkeBO8TJAamAmD00x0XO8C1YI2FiV_KJ2AEw/viewform"
                    target="_blank"
                    className="newsletter-btn"
                    rel="noreferrer"
                >
                    Sub to Newsletter {">"}
                </a>
            </div>
        </div>
    );
};

export default Landing;
