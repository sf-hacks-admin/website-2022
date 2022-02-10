import React from "react";
import Landing from "./Screens/Landing/Landing";
import About from "./Screens/About/About";
import FAQ from "./Screens/FAQ/FAQ";
import Sponsors from "./Screens/Sponsors/Sponsors";
import Team from "./Screens/Team/Team";
import Footer from "./Components/Footer/Footer";

import "./App.css";

const App = () => (
    <div>
        <Landing />
        <About />
        <FAQ />
        <Sponsors />
        <Team />
        <Footer />
    </div>
);

export default App;
