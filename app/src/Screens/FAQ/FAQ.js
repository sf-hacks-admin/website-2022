import React from "react";
import { useState, useEffect } from "react";
import Collapse, { Panel } from "rc-collapse";
import mailgo from "mailgo";
import "./FAQ.css";

const expandIcon = ({ isActive }) => (
    <div
        style={{
            verticalAlign: "-.125em",
            transition: "transform .2s",
            transform: `rotate(${isActive ? 45 : 0}deg)`,
            marginRight: `15px`,
        }}
        className="faq-x"
    >
        ✖
    </div>
);

const Accordion = () => (
    <Collapse accordion={true} expandIcon={expandIcon}>
        <Panel header="What is a hackathon?">
            A hackathon is a 24-hour event where individuals get together for a short period of time to collaborate on a project.
            The participants work rapidly and often work in groups to achieve their tasks.
        </Panel>
        <Panel header="Why should I attend a virtual hackathon?">
            We know a virtual hackathon might sound unorthodox, but we ensure it will be worth your while to join! From our
            contests to the lighthearted games, there is a place for every student to contribute. It’ll also be a great chance to
            try out working on a project with a team remotely.
        </Panel>
        <Panel header="Do you need to know how to code to attend?">
            No prior knowledge of computer science is needed! We encourage all levels of coders to attend. In our events, we
            dedicate officers/mentors/tutors to help all hackers find their beginnings in CS.
        </Panel>
        <Panel header="When is the next event?">You’re in luck! Our next event is on March 11th-13th, 2022.</Panel>
        <Panel header="Will you host an in-person hackathon?">
            Due to the continuously evolving medical protocols to combat the ongoing pandemic, we are currently going virtual for
            our hackathon event.
        </Panel>
        <Panel header="Where can I contact the officers?">
            You can email us at{" "}
            <a id="faq-link" class="light" href="mailto:sfhacksteam@gmail.com">
                sfhacksteam@gmail.com.
            </a>{" "}
            If it’s urgent, join our{" "}
            <a id="faq-link" href="https://discord.gg/sxQjq7SjjW" target="_blank" rel="noreferrer">
                Discord
            </a>{" "}
            and send us a message. One of us will help within 24 hours!
        </Panel>

        <Panel header="How often are SFSU hackathons?">
            SFSU hosts hackathons annually and everyone is invited to create the best experience possible!
        </Panel>
        <Panel header="What are some benefits of joining?">
            By participating in our annual hackathons, you’ll be able to create new memories, meet other hackers, gain coding
            experience, as well as being able to say you attended our event!
        </Panel>

        <Panel header="Do I need a team to join?">
            Not at all! While you absolutely can join the event and work on projects as a team, you can also use the event’s
            Discord to pair up with others on a project. It’s also okay to just work on something yourself.
        </Panel>

        <Panel header="What’s the cost of attendance?">
            It’s a free event hosted by the SF Hacks Team at San Francisco State University.
        </Panel>
        <Panel header="How do you form a team?">
            You can form a team on our Discord text channel, #find-a-team! We will also be hosting a short mixer at the beginning
            of the hackathon for those that do not have a team yet.
        </Panel>
        <Panel header="Is the hackathon free and what will be provided?">
            For in-person SFSU hosted hackathons, admission is free of charge and food will be provided as well as other
            necessities. For our upcoming virtual hackathon, admission is still free of charge, however, food will not be
            provided. There are things we can offer such as the enjoyable virtual experience through Discord as well as chatting
            with other fellow hackers!
        </Panel>
        <Panel header="What are the guidelines for cheating?">
            Any repo or skeleton code cannot be pushed until AFTER the opening ceremony. If anything is pushed before the opening
            ceremony, the project will not be judged for any category.
        </Panel>
        <Panel header="Are we able to join/attend at any time during the event?">
            Anyone is able to join/attend any of our events, such as workshops/keynote speakers, during our hackathon at their
            convenience.
        </Panel>
    </Collapse>
);

const FAQ = () => {
    mailgo();
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="faq-section" id="faq">
            <div className="banner">
                <div className="faq-banner-cont">
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        FAQs
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        FAQs
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        FAQs
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        FAQs
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        FAQs
                    </div>
                </div>
            </div>
            <div className="faq-big-cross-cont-one" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="faq-big-cross-one"></div>
            </div>

            <div className="faq-big-cross-cont-two" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                <div className="faq-big-cross-two"></div>
            </div>

            <div className="faq-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.12}px)` }}>
                <div className="faq-small-cross"></div>
            </div>

            <div className="faq-cont">
                <div className="faq-wrapper">
                    <Accordion />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
