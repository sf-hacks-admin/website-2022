import React from "react";
import { useState, useEffect } from "react";
import Ankur from "../../Assets/Team-imgs/Ankur.jpeg";
import Anmol from "../../Assets/Team-imgs/Anmol.png";
import Arianna from "../../Assets/Team-imgs/Arianna.jpg";
import Basim from "../../Assets/Team-imgs/Basim.jpg";
import Jae from "../../Assets/Team-imgs/Jae.jpg";
import Johnathan from "../../Assets/Team-imgs/Johnathan.jpg";
import Joyie from "../../Assets/Team-imgs/Joyie.jpg";
import Kevin from "../../Assets/Team-imgs/Kevin.jpg";
import Nya from "../../Assets/Team-imgs/Nya.jpg";
import Patrick from "../../Assets/Team-imgs/Patrick.png";
import Victoria from "../../Assets/Team-imgs/Victoria.JPG";
import "./Team.css";

const Team = () => {
    const profiles = [
        { name: "Nya Avelina Bautista", position: "PRESIDENT", image: Nya },
        { name: "Johnathan Huynh", position: "VICE PRESIDENT", image: Johnathan },
        {
            name: "Victoria Wilson-Anumudu",
            position: "TREASURER",
            image: Victoria,
        },
        {
            name: "Kevin Manago",
            position: "LOGISTICS LEAD",
            image: Kevin,
        },
        {
            name: "Jae Hamilton",
            position: "LOGISTICS SWAG OFFICER",
            image: Jae,
        },
        {
            name: "Patrick Reyes",
            position: "SPONSORSHIP LEAD",
            image: Patrick,
        },
        {
            name: "Arianna Yuan",
            position: "SPONSORSHIP CORPS. OFFICER",
            image: Arianna,
        },
        {
            name: "Joyie La",
            position: "DESIGN LEAD",
            image: Joyie,
        },
        {
            name: "Ankur Mishra",
            position: "GRAPHIC DESIGNER",
            image: Ankur,
        },
        {
            name: "Anmol Burmy",
            position: "WEB DEVELOPMENT OFFICER",
            image: Anmol,
        },
        {
            name: "Basim Baylor",
            position: "MARKETING LEAD",
            image: Basim,
        },
    ];

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="team-section">
            <div className="banner">
                <div className="team-banner-cont">
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TEAM
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TEAM
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TEAM
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TEAM
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        TEAM
                    </div>
                </div>
            </div>

            <div className="team-big-cross-cont-one" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="team-big-cross-one"></div>
            </div>

            <div className="team-big-cross-cont-two" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                <div className="team-big-cross-two"></div>
            </div>

            <div className="team-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.12}px)` }}>
                <div className="team-small-cross"></div>
            </div>

            <div className="team-cont">
                <div className="team-heading">
                    Meet the <span id="orange">students</span> behind SF Hacks.
                </div>
                <div className="team-wrapper">
                    {profiles.map((profile) => (
                        <div key={profile.name} className="profiles">
                            <div className="profile-img">
                                <img src={profile.image} alt="profiles" />
                            </div>
                            <div className="profile-position">{profile.position}</div>
                            <div className="profile-name">{profile.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
