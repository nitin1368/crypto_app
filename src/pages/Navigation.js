import React from "react";
import "./gg.css";
import Log from './logo.jpg'
import { Link } from "react-router-dom"
function Navigation() {
    return (
        <div>

            <ul type="none" className="ulStyle" >
                <li className="liStyle" ><Link to="./" className="ll"><img className="lomgo" src={Log} alt="logo" />KripStats</Link></li>
                <li className="liStyle"><Link to="./About" className="ll">About</Link></li>
                <li className="liStyle"><Link to="./Contact" className="ll">Contact</Link></li>

            </ul>
        </div>
    )
}
export default Navigation;

