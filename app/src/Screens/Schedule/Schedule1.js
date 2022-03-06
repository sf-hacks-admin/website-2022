// import React from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import "moment-timezone";
// import events from "./events";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./Schedule.css";

// const localizer = momentLocalizer(moment);

// const Schedule = () => {
//     return (
//         <div className="schedule">
//             <div className="schedule-cont">
//                 <div className="schedule-day">
//                     <Tabs>
//                         <TabList>
//                             <Tab>Friday</Tab>
//                             <Tab>Saturday</Tab>
//                             <Tab>Sunday</Tab>
//                         </TabList>

//                         <TabPanel>
//                             <Calendar
//                                 defaultView={Views.DAY}
//                                 views={{ day: true }}
//                                 localizer={localizer}
//                                 events={events}
//                                 startAccessor="start"
//                                 endAccessor="end"
//                                 style={{ height: 800 }}
//                                 defaultDate={new Date(2022, 2, 11)}
//                                 min={new Date(2022, 2, 11, 16, 0, 0)}
//                                 max={new Date(2022, 2, 11, 18, 30, 0)}
//                             />
//                         </TabPanel>
//                         <TabPanel>
//                             <Calendar
//                                 defaultView={Views.DAY}
//                                 views={{ day: true }}
//                                 localizer={localizer}
//                                 events={events}
//                                 startAccessor="start"
//                                 endAccessor="end"
//                                 style={{ height: 800 }}
//                                 defaultDate={new Date(2022, 2, 12)}
//                                 min={new Date(2022, 2, 12, 8, 0, 0)}
//                                 max={new Date(2022, 2, 12, 18, 30, 0)}
//                             />
//                         </TabPanel>
//                         <TabPanel>
//                             <Calendar
//                                 defaultView={Views.DAY}
//                                 views={{ day: true }}
//                                 localizer={localizer}
//                                 events={events}
//                                 startAccessor="start"
//                                 endAccessor="end"
//                                 style={{ height: 800 }}
//                                 defaultDate={new Date(2022, 2, 13)}
//                                 min={new Date(2022, 2, 13, 8, 0, 0)}
//                                 max={new Date(2022, 2, 13, 18, 30, 0)}
//                             />
//                         </TabPanel>
//                     </Tabs>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Schedule;
