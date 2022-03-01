import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Schedule.css";

const Schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule-time">TIME</div>
            <div className="schedule-cont">
                <div className="schedule-day">
                    <Tabs>
                        <TabList>
                            <Tab>Friday</Tab>
                            <Tab>Saturday</Tab>
                            <Tab>Sunday</Tab>
                        </TabList>

                        <TabPanel>
                            <div>Opening Ceremony</div>
                        </TabPanel>
                        <TabPanel>
                            <div>Any content 2</div>
                        </TabPanel>
                        <TabPanel>
                            <div>Any content 2</div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
