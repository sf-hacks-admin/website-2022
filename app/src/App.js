import React from "react";
import Landing from "./Screens/Landing/Landing";
import About from "./Screens/About/About";
import "./App.css";
import FAQ from "./Screens/FAQ/FAQ";
import Sponsors from "./Screens/Sponsors/Sponsors";

const App = () => (
    <div>
        <Landing />
        <About />
        <FAQ />
        <Sponsors />
    </div>
);

export default App;
