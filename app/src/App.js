import React from "react";
import Landing from "./Screens/Landing/Landing";
import About from "./Screens/About/About";
import FAQ from "./Screens/FAQ/FAQ";
import Sponsors from "./Screens/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => (
    <div>
        <Landing />
        <About />
        <FAQ />
        <Sponsors />
        <Footer />
    </div>
);

export default App;
