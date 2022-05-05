import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
import recap1 from "../../Assets/Recap/1.png";
// import recap2 from "../../Assets/Recap/2.png";
// import recap3 from "../../Assets/Recap/3.png";
import recap4 from "../../Assets/Recap/4.png";
import recap5 from "../../Assets/Recap/5.png";
import recap6 from "../../Assets/Recap/6.png";
import recap7 from "../../Assets/Recap/7.png";
import recap8 from "../../Assets/Recap/8.png";
import recap9 from "../../Assets/Recap/9.png";
import recap10 from "../../Assets/Recap/10.png";
import recap11 from "../../Assets/Recap/11.png";
import recap12 from "../../Assets/Recap/12.png";
import recap13 from "../../Assets/Recap/13.png";
import recap14 from "../../Assets/Recap/14.png";
import recap15 from "../../Assets/Recap/15.png";
import recap16 from "../../Assets/Recap/16.png";
import recap17 from "../../Assets/Recap/17.png";

import "./Recap.css";

const Recap = () => (
    <AwesomeSlider transitionDelay={0} mobileTouch={true} animation="fallAnimation" cssModule={[CoreStyles, AnimationStyles]}>
        <div data-src={recap1} />
        {/* <div data-src={recap2} /> */}
        {/* <div data-src={recap3} /> */}
        <div data-src={recap4} />
        <div data-src={recap5} />
        <div data-src={recap6} />
        <div data-src={recap7} />
        <div data-src={recap8} />
        <div data-src={recap9} />
        <div data-src={recap10} />
        <div data-src={recap11} />
        <div data-src={recap12} />
        <div data-src={recap13} />
        <div data-src={recap14} />
        <div data-src={recap15} />
        <div data-src={recap16} />
        <div data-src={recap17} />
    </AwesomeSlider>
);

export default Recap;
