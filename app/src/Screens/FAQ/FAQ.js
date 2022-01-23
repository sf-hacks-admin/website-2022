import React from "react";
import { useState, useEffect } from "react";
import Collapse, { Panel } from "rc-collapse";
import "./FAQ.css";

const expandIcon = ({ isActive }) => (
    <div
        style={{
            verticalAlign: "-.125em",
            transition: "transform .2s",
            transform: `rotate(${isActive ? 45 : 0}deg)`,
            marginRight: `10px`,
        }}
    >
        +
    </div>
);

const Accordion = () => (
    <Collapse accordion={true} expandIcon={expandIcon}>
        <Panel header="hello">this is panel content</Panel>
        <Panel header="title2">this is panel content2 or other</Panel>
    </Collapse>
);

const FAQ = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="faq-section">
            <div className="faq-banner">
                <div className="faq-banner-text-top" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    FAQ
                </div>
                <div className="faq-banner-text-center" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    FAQ
                </div>
                <div className="faq-banner-text-bottom" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                    FAQ
                </div>
            </div>
            <div className="faq-big-cross-cont" style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
                <div className="faq-big-cross"></div>
            </div>

            <div className="faq-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="faq-small-cross"></div>
            </div>

            <div className="faq-cont">
                <Accordion />
            </div>
        </div>
    );
};

export default FAQ;
