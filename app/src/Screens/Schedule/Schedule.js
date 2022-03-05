import React, { useState, useEffect, useMemo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "moment-timezone";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Schedule.css";

import TimezoneSelect from "./TimezoneSelect";

const localizer = momentLocalizer(moment);

const defaultTZ = moment.tz.guess();
const defaultDateStr = "2015-4-13";

function getDate(str, momentObj) {
    return momentObj(str, "YYYY-MM-DD").toDate();
}

const Schedule = () => {
    const [timezone, setTimezone] = useState(defaultTZ);

    const { localizer, defaultDate, scrollToTime, myEvents, getNow } = useMemo(() => {
        moment.tz.setDefault(timezone);
        return {
            localizer: momentLocalizer(moment),
            defaultDate: getDate(defaultDateStr, moment),
            scrollToTime: moment().toDate(),
            getNow: () => moment().toDate(),
            myEvents: [...events],
        };
    }, [timezone]);

    useEffect(() => {
        return () => {
            moment.tz.setDefault(); // reset to browser TZ on unmount
        };
    }, []);

    return (
        <div className="schedule">
            <div className="schedule-cont">
                <div className="schedule-day">
                    <Tabs>
                        <TabList>
                            <Tab>Friday</Tab>
                            <Tab>Saturday</Tab>
                            <Tab>Sunday</Tab>
                        </TabList>

                        <TabPanel>
                            <TimezoneSelect defaultTZ={defaultTZ} timezone={timezone} setTimezone={setTimezone} />
                            <Calendar
                                defaultView={Views.DAY}
                                views={{ day: true }}
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 800 }}
                                defaultDate={new Date(2022, 2, 11)}
                                min={new Date(2022, 2, 11, 16, 0, 0)}
                                max={new Date(2022, 2, 11, 18, 30, 0)}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Calendar
                                defaultView={Views.DAY}
                                views={{ day: true }}
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 800 }}
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
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 800 }}
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

// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import events from "./events";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./Schedule.css";

// const localizer = momentLocalizer(moment);

// const Schedule = () => (
//     <div className="schedule">
//         <Calendar
//             defaultView={Views.DAY}
//             views={{ day: true }}
//             localizer={localizer}
//             events={events}
//             startAccessor="start"
//             endAccessor="end"
//             style={{ height: 800 }}
//         />
//     </div>
// );
// export default Schedule;
