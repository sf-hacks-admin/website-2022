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

const localizer = momentLocalizer(moment);

function Event({ event }) {
    if (isMacOs || isIOS)
        return (
            <div className="event-info-mac">
                <div className="event-title">{event.title}</div>
                <div className="event-time">{event.time}</div>

                {/* <div className="event-link">
                <Popup trigger={<button className="event-link-btn">Link</button>} position="bottom right" nested>
                    <div className="event-link-cont"> {event.link} </div>
                </Popup>
            </div> */}
            </div>
        );

    return (
        <div className="event-info">
            <div className="event-title">{event.title}</div>
            <div className="event-time">{event.time}</div>

            {/* <div className="event-link">
                <Popup trigger={<button className="event-link-btn">Link</button>} position="bottom right" nested>
                    <div className="event-link-cont"> {event.link} </div>
                </Popup>
            </div> */}
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
                                max={new Date(2022, 2, 11, 19, 0, 0)}
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
                                max={new Date(2022, 2, 12, 18, 30, 0)}
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
                                max={new Date(2022, 2, 13, 18, 30, 0)}
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
export default Schedule;
