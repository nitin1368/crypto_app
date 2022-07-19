import React, { Link } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./pages/Navigation";
import All from "./pages/All";
import "./pages/gg.css";
import Learn from "./pages/Learn";
import Git from "./pages/Git.jpg";
import Linkedin from "./pages/Linkedin.jpg";
import Instagram from "./pages/Instagram.png";
import Twitter from "./pages/Twitter.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


    return (
        <div className="roo">
            <div>
                <Router >
                    <Navigation />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path="/About" element={<About />}></Route>
                        <Route path="/All" element={<All />}></Route>
                        <Route path="/Learn" element={<Learn />}></Route>

                    </Routes>
                </Router >
            </div>

            <div id="footer">
                <h3 style={{ textAlign: 'center', marginBottom: '60px', color: 'white' }}>CopyRight @ 2022</h3>
                <div>
                    <a href="https://www.github.com" alt="git logo"><img className="footer_logo" src={Git} /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com" alt="git logo"><img className="footer_logo" src={Linkedin} /></a>
                </div>
                <div>
                    <a href="https://www.instagram.com" alt="git logo"><img className="footer_logo" src={Instagram} /></a>
                </div>
                <div>
                    <a href="https://www.twitter.com" alt="git logo"><img className="footer_logo" src={Twitter} /></a>
                </div>
            </div>
        </div >
    )
}
export default App;
