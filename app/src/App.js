import React from "react";
import Landing from "./Screens/Landing/Landing";
import About from "./Screens/About/About";
import FAQ from "./Screens/FAQ/FAQ";
import Sponsors from "./Screens/Sponsors/Sponsors";
import Team from "./Screens/Team/Team";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import BackToTopButton from "./Components/BackToTopButton";
import Schedule from "./Screens/Schedule/Schedule";
import Recap from "./Screens/Recap/Recap";
import { Tracks } from "./Screens/Tracks/Tracks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => (
    <Router>
        <Routes>
            <Route
                path="/"
                exact
                element={
                    <>
                        <Navbar />
                        <Landing />
                        <About />
                        <Tracks />
                        <Schedule />
                        <FAQ />
                        <Sponsors />
                        <Team />
                        <Footer />
                        <BackToTopButton />
                    </>
                }
            />
            <Route
                path="/2022recap"
                exact
                element={
                    <>
                        <Recap />
                    </>
                }
            />
        </Routes>
    </Router>
);

export default App;
