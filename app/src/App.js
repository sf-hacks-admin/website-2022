import React from "react";
import Landing from "./Screens/Landing/Landing";
import About from "./Screens/About/About";
import FAQ from "./Screens/FAQ/FAQ";
import Sponsors from "./Screens/Sponsors/Sponsors";
import Team from "./Screens/Team/Team";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import BackToTopButton from "./Components/BackToTopButton";
// import Schedule from "./Screens/Schedule/Schedule";
import "./App.css";

const App = () => (
    <div>
        <Navbar />
        <Landing />
        <About />
        <FAQ />
        <Sponsors />
        {/* <Schedule /> */}
        <Team />
        <Footer />
        <BackToTopButton />
    </div>
);

export default App;
