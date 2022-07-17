import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./pages/Navigation";
import All from "./pages/All";
import "./pages/gg.css";
import Learn from "./pages/Learn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


    return (
        <div className="roo">

            <Router >
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="/All" element={<All />}></Route>
                    <Route path="/Learn" element={<Learn />}></Route>

                </Routes>
            </Router >

        </div >
    )
}
export default App;
