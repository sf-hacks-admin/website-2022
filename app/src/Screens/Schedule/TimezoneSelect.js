import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment-timezone";
import Select from "react-select";

const allZones = moment.tz.names();
allZones.unshift("clear");

var technologyList = [];
allZones.forEach(function (element) {
    technologyList.push({ label: element, value: element });
});

export default function TimezoneSelect({ title, defaultTZ = moment.tz.guess(), timezone, setTimezone }) {
    const onChange = ({ target: { value } }) => setTimezone(value ? value : defaultTZ);

    return (
        <div>
            <Select options={technologyList} onChange={onChange} value={timezone} />

            <p>{console.log(allZones)}</p>
        </div>
        // <ExampleControlSlot.Entry waitForOutlet>
        //     <Layout direction="column" align="center">
        //         {title ? <h4>{title}</h4> : null}
        //         <label>Select a Timezone</label>{" "}
        //         <select
        //             className="form-control"
        //             style={{ width: 200, display: "inline-block" }}
        //             value={timezone}
        //             onChange={onChange}
        //         >
        //             {allZones.map((c, idx) => (
        //                 <option key={idx} value={c !== "clear" ? c : ""}>
        //                     {c}
        //                 </option>
        //             ))}
        //         </select>
        //     </Layout>
        // </ExampleControlSlot.Entry>
    );
}

TimezoneSelect.propTypes = {
    title: PropTypes.string,
    defaultTZ: PropTypes.string,
    timezone: PropTypes.string,
    setTimezone: PropTypes.func,
};
