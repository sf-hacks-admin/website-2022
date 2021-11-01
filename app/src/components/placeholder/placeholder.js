import React from "react";
import "./placeholder.css";

const placeholder = () => {
    return (
        <div className="placeholder-container">
            <div className="heading-container">
                <div id="sub-heading" className="scrolling">
                    SF HACKS CONSTITUTES DIVERGENCE / AN INCLUSIVE PLACE THAT HELPS PEOPLE FIT IN AND FEEL SAFE / WE HELP DISCOVER
                    WHAT INNOVATIVE TECHNOLOGY HAS TO OFFER
                </div>
                <div id="main-heading" className="resp-line1">
                    SF HACKS
                </div>
            </div>

            <div className="sub-info">
                <div className="info-question">what do we do?</div>
                <div className="info-answer">we represent an ambitious inclusive community and empower them.</div>
            </div>
            <div className="coming-soon">MORE COMING SOON</div>
        </div>
    );
};

export default placeholder;