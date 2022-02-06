import React from "react";
import { useState, useEffect } from "react";
import Allbirds from "../../Assets/Sponsors-imgs/allbirds.png";
import Autodesk from "../../Assets/Sponsors-imgs/autodesk.png";
import Bobos from "../../Assets/Sponsors-imgs/bobos.png";
import COSE from "../../Assets/Sponsors-imgs/cose.png";
import COB from "../../Assets/Sponsors-imgs/cob.png";
import Desmos from "../../Assets/Sponsors-imgs/desmos.png";
import GogoSqueez from "../../Assets/Sponsors-imgs/gogo-squeez.png";
import Google from "../../Assets/Sponsors-imgs/google.png";
import InterviewCake from "../../Assets/Sponsors-imgs/interview-cake.png";
import Lyft from "../../Assets/Sponsors-imgs/lyft.png";
import Microsoft from "../../Assets/Sponsors-imgs/msft.png";
import Notivize from "../../Assets/Sponsors-imgs/notivize.png";
import Pathrise from "../../Assets/Sponsors-imgs/pathrise.png";
import StickerMule from "../../Assets/Sponsors-imgs/sticker-mule.png";
import Twilio from "../../Assets/Sponsors-imgs/twilio.png";
import Walmart from "../../Assets/Sponsors-imgs/walmart.png";
import Cahsi from "../../Assets/Sponsors-imgs/cahsi.png";
import csld from "../../Assets/Sponsors-imgs/csld-logo.png";
import Hyperx from "../../Assets/Sponsors-imgs/hyperx.png";
import Chipotle from "../../Assets/Sponsors-imgs/chipotle.png";
import IBM from "../../Assets/Sponsors-imgs/ibm.png";
import Echoar from "../../Assets/Sponsors-imgs/echoar.png";
import Wolfram from "../../Assets/Sponsors-imgs/wolf.png";
import Stream from "../../Assets/Sponsors-imgs/stream.png";
import Adobe from "../../Assets/Sponsors-imgs/adobe.png";
// import Business from "../../Assets/Sponsors-imgs/business.png";
import Jetbrains from "../../Assets/Sponsors-imgs/jetbrains.png";
import WeightWatchers from "../../Assets/Sponsors-imgs/weight-watchers.png";
import GCloud from "../../Assets/Sponsors-imgs/google-cloud.png";
import { isMacOs, isIOS } from "react-device-detect";
import "./Sponsors.css";

const Sponsors = () => {
    const sponsors = [
        {
            name: "Microsoft",
            logo: Microsoft,
            link: "https://www.microsoft.com/en-us/",
        },
        {
            name: "Adobexd",
            logo: Adobe,
            link: "https://www.adobe.com/products/xd.html",
        },
        {
            name: "Google",
            logo: Google,
            link: "https://www.google.com/?client=safari",
        },
        {
            name: "Autodesk",
            logo: Autodesk,
            link: "https://www.autodesk.com",
        },
        {
            name: "CAHSI",
            logo: Cahsi,
            link: "https://cahsi.utep.edu/",
        },
        {
            name: "Chipotle",
            logo: Chipotle,
            link: "https://www.chipotle.com/",
        },
        {
            name: "Hyper X",
            logo: Hyperx,
            link: "https://www.hyperxgaming.com/unitedstates/us",
        },
        {
            name: "CSLD",
            logo: csld,
            link: "https://careerservices.sfsu.edu/",
        },
        {
            name: "Google Cloud",
            logo: GCloud,
            link: "https://cloud.google.com/",
        },
        {
            name: "Echo AR",
            logo: Echoar,
        },
        {
            name: "IBM",
            logo: IBM,
            link: "https://www.ibm.com/us-en/",
        },
        {
            name: "Lyft",
            logo: Lyft,
            link: "https://www.lyft.com",
        },
        {
            name: "JetBrains",
            logo: Jetbrains,
            link: "https://www.jetbrains.com/",
        },
        {
            name: "Stream",
            logo: Stream,
            link: "https://www.stream.club/",
        },
        {
            name: "Weight Watchers",
            logo: WeightWatchers,
            link: "https://www.weightwatchers.com/us/",
        },
        {
            name: "Twilio",
            logo: Twilio,
            link: "https://www.twilio.com",
        },
        {
            name: "Wolfram Alpha",
            logo: Wolfram,
            link: "https://www.wolframalpha.com/",
        },
        {
            name: "SFSU College of Science and Engineering",
            logo: COSE,
            link: "https://cose.sfsu.edu",
        },

        {
            name: "Interview Cake",
            logo: InterviewCake,
        },

        {
            name: "SFSU Lam Family College of Business",
            logo: COB,
            link: "https://cob.sfsu.edu",
        },
        {
            name: "Notivize",
            logo: Notivize,
        },
        {
            name: "Pathrise",
            logo: Pathrise,
        },
        {
            name: "Walmart",
            logo: Walmart,
            link: "https://www.walmart.com",
        },

        {
            name: "Allbirds",
            logo: Allbirds,
        },
        {
            name: "StickerMule",
            logo: StickerMule,
            link: "http://hackp.ac/mlh-stickermule-hackathons",
        },
        {
            name: "Gogo Squeez",
            logo: GogoSqueez,
        },
        {
            name: "Desmos",
            logo: Desmos,
        },
        {
            name: "Bobos",
            logo: Bobos,
        },
    ];

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isMacOs || isIOS)
        return (
            <div className="sponsor-section">
                <div className="sponsor-banner">
                    <div className="sponsor-banner-text-top" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="sponsor-banner-text-center" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="sponsor-banner-text-bottom-mac" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="sponsor-banner-text-mobile-mac" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                </div>

                <div className="sponsor-small-cross-cont-one" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                    <div className="sponsor-small-cross-one"></div>
                </div>

                <div className="sponsor-small-cross-cont-two" style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
                    <div className="sponsor-small-cross-two"></div>
                </div>

                <div className="sponsor-content-container">
                    <div className="sponsor-content-inner">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor.name} className="sponsor-padding">
                                <div>
                                    <a href={sponsor.link} target="_blank" rel="noreferrer">
                                        <img src={sponsor.logo} alt={sponsor.name} className="img-style" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );

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
                <div className="sponsor-banner-text-mobile" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    SPONSORS
                </div>
            </div>

            <div className="sponsor-small-cross-cont-one" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="sponsor-small-cross-one"></div>
            </div>

            <div className="sponsor-small-cross-cont-two" style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
                <div className="sponsor-small-cross-two"></div>
            </div>

            <div className="sponsor-content-container">
                <div className="sponsor-content-inner">
                    <div className="slide-container">
                        <div className="photobanner">
                            <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer">
                                <img src={Adobe} alt="" className="img-style" />
                            </a>
                            <a href="https://www.autodesk.com" target="_blank" rel="noopener noreferrer">
                                <img src={Autodesk} alt="" className="img-style" />
                            </a>
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Google} alt="" className="img-style" />
                            </a>
                            <a href="https://cose.sfsu.edu" target="_blank" rel="noopener noreferrer">
                                <img src={COSE} alt="" className="img-style" />
                            </a>
                            <a href="https://www.pathrise.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Pathrise} alt="" className="img-style" />
                            </a>
                            <a href="https://cahsi.utep.edu/" target="_blank" rel="noopener noreferrer">
                                <img src={Cahsi} alt="" className="img-style" />
                            </a>
                            <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer">
                                <img src={Adobe} alt="" className="img-style" />
                            </a>
                            <a href="https://www.autodesk.com" target="_blank" rel="noopener noreferrer">
                                <img src={Autodesk} alt="" className="img-style" />
                            </a>
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Google} alt="" className="img-style" />
                            </a>
                            <a href="https://cose.sfsu.edu" target="_blank" rel="noopener noreferrer">
                                <img src={COSE} alt="" className="img-style" />
                            </a>
                            <a href="https://www.pathrise.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Pathrise} alt="" className="img-style" />
                            </a>
                            <a href="https://cahsi.utep.edu/" target="_blank" rel="noopener noreferrer">
                                <img src={Cahsi} alt="" className="img-style" />
                            </a>
                        </div>
                        <div className="photobanner" style={{ marginTop: "8.85416vw" }}>
                            <a href="https://www.hyperxgaming.com/unitedstates/us" target="_blank" rel="noopener noreferrer">
                                <img src={Hyperx} alt="" className="img-style" />
                            </a>
                            <a href="https://www.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
                                <img src={Microsoft} alt="" className="img-style" />
                            </a>
                            <a href="https://www.notivize.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Notivize} alt="" className="img-style" />
                            </a>
                            <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Jetbrains} alt="" className="img-style" />
                            </a>
                            <a href="https://www.walmart.com" target="_blank" rel="noopener noreferrer">
                                <img src={Walmart} alt="" className="img-style" />
                            </a>
                            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">
                                <img src={GCloud} alt="" className="img-style" />
                            </a>
                            <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">
                                <img src={Twilio} alt="" className="img-style" />
                            </a>
                            <a href="https://www.hyperxgaming.com/unitedstates/us" target="_blank" rel="noopener noreferrer">
                                <img src={Hyperx} alt="" className="img-style" />
                            </a>
                            <a href="https://www.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
                                <img src={Microsoft} alt="" className="img-style" />
                            </a>
                            <a href="https://www.notivize.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Notivize} alt="" className="img-style" />
                            </a>
                            <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Jetbrains} alt="" className="img-style" />
                            </a>
                            <a href="https://www.walmart.com" target="_blank" rel="noopener noreferrer">
                                <img src={Walmart} alt="" className="img-style" />
                            </a>
                            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer">
                                <img src={GCloud} alt="" className="img-style" />
                            </a>
                            <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer">
                                <img src={Twilio} alt="" className="img-style" />
                            </a>
                        </div>

                        <div className="photobanner" style={{ marginTop: "17.8125vw" }}>
                            <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Wolfram} alt="" className="img-style" />
                            </a>
                            <a href="https://www.lyft.com" target="_blank" rel="noopener noreferrer">
                                <img src={Lyft} alt="" className="img-style" />
                            </a>
                            <a href="https://www.ibm.com/us-en/" target="_blank" rel="noopener noreferrer">
                                <img src={IBM} alt="" className="img-style" />
                            </a>
                            <a href="https://www.chipotle.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Chipotle} alt="" className="img-style" />
                            </a>
                            <a href="https://www.weightwatchers.com/us/" target="_blank" rel="noopener noreferrer">
                                <img src={WeightWatchers} alt="" className="img-style" />
                            </a>
                            <a href="https://www.echo3d.co/" target="_blank" rel="noopener noreferrer">
                                <img src={Echoar} alt="" className="img-style" />
                            </a>
                            <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Wolfram} alt="" className="img-style" />
                            </a>
                            <a href="https://www.lyft.com" target="_blank" rel="noopener noreferrer">
                                <img src={Lyft} alt="" className="img-style" />
                            </a>
                            <a href="https://www.ibm.com/us-en/" target="_blank" rel="noopener noreferrer">
                                <img src={IBM} alt="" className="img-style" />
                            </a>
                            <a href="https://www.chipotle.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Chipotle} alt="" className="img-style" />
                            </a>
                            <a href="https://www.weightwatchers.com/us/" target="_blank" rel="noopener noreferrer">
                                <img src={WeightWatchers} alt="" className="img-style" />
                            </a>
                            <a href="https://www.echo3d.co/" target="_blank" rel="noopener noreferrer">
                                <img src={Echoar} alt="" className="img-style" />
                            </a>
                        </div>

                        <div className="photobanner" style={{ marginTop: "26.82291vw" }}>
                            <a href="https://cob.sfsu.edu" target="_blank" rel="noopener noreferrer">
                                <img src={COB} alt="" className="img-style" />
                            </a>
                            <a href="https://www.stream.club/" target="_blank" rel="noopener noreferrer">
                                <img src={Stream} alt="" className="img-style" />
                            </a>
                            <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank" rel="noopener noreferrer">
                                <img src={StickerMule} alt="" className="img-style" />
                            </a>
                            <a href="https://careerservices.sfsu.edu/" target="_blank" rel="noopener noreferrer">
                                <img src={csld} alt="" className="img-style" />
                            </a>
                            <a href="https://cob.sfsu.edu" target="_blank" rel="noopener noreferrer">
                                <img src={COB} alt="" className="img-style" />
                            </a>
                            <a href="https://www.stream.club/" target="_blank" rel="noopener noreferrer">
                                <img src={Stream} alt="" className="img-style" />
                            </a>
                            <a href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank" rel="noopener noreferrer">
                                <img src={StickerMule} alt="" className="img-style" />
                            </a>
                            <a href="https://careerservices.sfsu.edu/" target="_blank" rel="noopener noreferrer">
                                <img src={csld} alt="" className="img-style" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
