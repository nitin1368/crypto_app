import React from "react";
import Nitin from "./Nitin.jpg";
import Rohit from "./Rohit.jpg";
import Linkedin from "./Linkedin.jpg";
function About() {
    return (
        <div className="about">
            <h3 className="head">OUR MISSION</h3>
            <div id="block1"></div>
            <p className="aboutpara">KripStats is a cryptocurrency exchange built by traders, for traders. KripStats offers innovative products including industry-first derivatives, options, volatility products and leveraged tokens. We strive to develop a platform robust enough for professional trading firms and intuitive enough for first-time users.</p>
            <h3 className="head">About</h3>
            <div id="block2"></div>
            <p className="aboutpara">KripStats was founded in 2022 by Rohit Udaiwal and Nitin Gupta with the mission to democratize the access of crypto data and empower users with actionable insights. We also deep dive into the crypto space to deliver valuable insights to our users through our cryptocurrency reports, as well as our publications, newsletter and more.</p>
            <h3 className="head">Our Team</h3>
            <div id="block3"></div>
            <div className="founder1">
                <img className="ceo" src={Nitin} alt="nitin" />
                <p style={{ fontSize: '18px', marginLeft: '52px', fontWeight: '600' }}>Nitin Gupta, Co-Founder</p>
                <a href="https://www.linkedin.com/in/nitin-gupta-0659a0208/" ><img className="link1" src={Linkedin} /></a>
            </div>
            <div className="founder2">
                <img className="ceo" src={Rohit} alt="rohit" />
                <p style={{ fontSize: '18px', marginLeft: '50px', fontWeight: '600' }}>Rohit Udaiwal, Co-Founder</p>
                <a href="https://www.linkedin.com/in/nitin-gupta-0659a0208/" ><img className="link2" src={Linkedin} /></a>
            </div>
        </div>
    )
}
export default About;