/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import { useState, useEffect } from "react";
import { isMacOs, isIOS } from "react-device-detect";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Schedule.css";
import Popup from "reactjs-popup";
import events from "./events";
import { BsLink } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import ReactTooltip from "react-tooltip";

const localizer = momentLocalizer(moment);

function Event({ event }) {
    if (isMacOs || isIOS)
        return (
            <div className="event-info-mac">
                <div className="event-title">
                    {event.title}
                    <Popup
                        trigger={
                            <div className="event-desc-mac">
                                <MdExpandMore />
                            </div>
                        }
                        position="bottom center"
                        nested
                    >
                        <div className="event-desc-txt-mac">{event.desc}</div>
                    </Popup>
                </div>

                <div className="event-time">{event.time}</div>

                {(() => {
                    // eslint-disable-next-line eqeqeq
                    if (event.link == "1") {
                        return <div></div>;
                    } else {
                        return (
                            <>
                                <a data-tip data-for="link">
                                    <a href={event.link} target="_blank" rel="noreferrer" className="event-link-mac">
                                        <BsLink />
                                    </a>
                                </a>
                                <ReactTooltip
                                    id="link"
                                    aria-haspopup="true"
                                    role="example"
                                    className="event-link-pop-mac"
                                    textColor="#1c1818"
                                    backgroundColor="#f5f5f5"
                                    arrowColor="#1c1818"
                                >
                                    Join
                                </ReactTooltip>
                            </>
                        );
                    }
                })()}
            </div>
        );

    return (
        <div className="event-info">
            <div className="event-title">
                {event.title}
                <Popup
                    trigger={
                        <div className="event-desc">
                            <MdExpandMore />
                        </div>
                    }
                    position="bottom center"
                    nested
                >
                    <div className="event-desc-txt">{event.desc}</div>
                </Popup>
            </div>

            <div className="event-time">{event.time}</div>

            {(() => {
                // eslint-disable-next-line eqeqeq
                if (event.link == "1") {
                    return <div></div>;
                } else {
                    return (
                        <>
                            <a data-tip data-for="link">
                                <a href={event.link} target="_blank" rel="noreferrer" className="event-link">
                                    <BsLink />
                                </a>
                            </a>
                            <ReactTooltip
                                id="link"
                                aria-haspopup="true"
                                role="example"
                                className="event-link-pop"
                                textColor="#1c1818"
                                backgroundColor="#f5f5f5"
                                arrowColor="#1c1818"
                            >
                                View Recording
                            </ReactTooltip>
                        </>
                    );
                }
            })()}
        </div>
    );
}

const Schedule = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="schedule-section">
            <div className="banner">
                <div className="sch-banner-cont">
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SCHEDULE
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SCHEDULE
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SCHEDULE
                    </div>
                    <div className="banner-text" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SCHEDULE
                    </div>
                    <div className="banner-text text-line" style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                        SCHEDULE
                    </div>
                </div>
            </div>
            <div className="sch-big-cross-cont-one" style={{ transform: `translateY(-${offsetY * 0.05}px)` }}>
                <div className="sch-big-cross-one"></div>
            </div>

            <div className="sch-big-cross-cont-two" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
                <div className="sch-big-cross-two"></div>
            </div>

            <div className="sch-small-cross-cont" style={{ transform: `translateY(-${offsetY * 0.12}px)` }}>
                <div className="sch-small-cross"></div>
            </div>
            <div className="schedule-cont">
                <div className="schedule-wrapper">
                    <Tabs>
                        <TabList>
                            <div className="tab-cross">✖</div>
                            <Tab>Day 1</Tab>
                            <Tab>Day 2</Tab>
                            <Tab>Day 3</Tab>
                            <div className="tab-cross">✖</div>
                        </TabList>

                        <TabPanel>
                            <Calendar
                                defaultView={Views.DAY}
                                views={{ day: true }}
                                localizer={localizer}
                                className="calender"
                                startAccessor="start"
                                endAccessor="end"
                                components={{
                                    event: Event,
                                }}
                                events={events}
                                defaultDate={new Date(2022, 2, 11)}
                                min={new Date(2022, 2, 11, 16, 0, 0)}
                                max={new Date(2022, 2, 11, 20, 0, 0)}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Calendar
                                defaultView={Views.DAY}
                                views={{ day: true }}
                                localizer={localizer}
                                className="calender"
                                startAccessor="start"
                                endAccessor="end"
                                components={{
                                    event: Event,
                                }}
                                events={events}
                                defaultDate={new Date(2022, 2, 12)}
                                min={new Date(2022, 2, 12, 8, 0, 0)}
                                max={new Date(2022, 2, 12, 18, 0, 0)}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Calendar
                                defaultView={Views.DAY}
                                views={{ day: true }}
                                localizer={localizer}
                                className="calender"
                                startAccessor="start"
                                endAccessor="end"
                                components={{
                                    event: Event,
                                }}
                                events={events}
                                defaultDate={new Date(2022, 2, 13)}
                                min={new Date(2022, 2, 13, 8, 0, 0)}
                                max={new Date(2022, 2, 13, 19, 0, 0)}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
export default Schedule;
