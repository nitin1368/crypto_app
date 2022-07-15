import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./pages/Navigation";
import "./pages/gg.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="roo">

            <Router >
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route exact path="/Contact" element={<Contact />}></Route>
                </Routes>
            </Router >

        </div>
    )
}
export default App;
