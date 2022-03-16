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
import Jetbrains from "../../Assets/Sponsors-imgs/jetbrains.png";
import WeightWatchers from "../../Assets/Sponsors-imgs/weight-watchers.png";
import GCloud from "../../Assets/Sponsors-imgs/google-cloud.png";
import Elemeno from "../../Assets/Sponsors-imgs/elemeno.png";
import Opendoor from "../../Assets/Sponsors-imgs/opendoor.png";
import "./Sponsors.css";

const Sponsors = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sponsor-section" id="sponsors">
            <div className="banner">
                <div className="sponsor-banner-cont">
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SPONSORS
                    </div>
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
                        <div className="photobanner1">
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
                            <a href="https://www.allbirds.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Allbirds} alt="" className="img-style" />
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
                            <a href="https://www.allbirds.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Allbirds} alt="" className="img-style" />
                            </a>
                        </div>
                        <div className="photobanner2">
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
                            <a href="https://eatbobos.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Bobos} alt="" className="img-style" />
                            </a>
                            <a href="https://www.interviewcake.com/" target="_blank" rel="noopener noreferrer">
                                <img src={InterviewCake} alt="" className="img-style" />
                            </a>
                            <a href="https://www.opendoor.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Opendoor} alt="" className="img-style" />
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
                            <a href="https://eatbobos.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Bobos} alt="" className="img-style" />
                            </a>
                            <a href="https://www.interviewcake.com/" target="_blank" rel="noopener noreferrer">
                                <img src={InterviewCake} alt="" className="img-style" />
                            </a>
                            <a href="https://www.opendoor.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Opendoor} alt="" className="img-style" />
                            </a>
                        </div>

                        <div className="photobanner3">
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
                            <a href="https://www.desmos.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Desmos} alt="" className="img-style" />
                            </a>
                            <a href="https://www.elemeno.ai/" target="_blank" rel="noopener noreferrer">
                                <img src={Elemeno} alt="" className="img-style" />
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
                            <a href="https://www.desmos.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Desmos} alt="" className="img-style" />
                            </a>
                            <a href="https://www.elemeno.ai/" target="_blank" rel="noopener noreferrer">
                                <img src={Elemeno} alt="" className="img-style" />
                            </a>
                        </div>

                        <div className="photobanner4">
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
                            <a href="https://www.gogosqueez.com/" target="_blank" rel="noopener noreferrer">
                                <img src={GogoSqueez} alt="" className="img-style" />
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
                            <a href="https://www.gogosqueez.com/" target="_blank" rel="noopener noreferrer">
                                <img src={GogoSqueez} alt="" className="img-style" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
