import React from "react";
import "./gg.css";
import Srch from "./serch.png";
function Home() {
    return (
        <div>
            <div className="homeinp">
                <input type="text" className="search" placeholder="Enter the coin name" />
                <button type="submit"><img className="ss" src={Srch} alt=" search" /></button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <table>
                <tr>
                    <th>COIN NAME</th>
                    <th>PRICE</th>
                </tr>
                <tr>
                    <td>BITCOIN</td>
                    <td>2000000</td>
                </tr>
            </table>
        </div>
    )
}
export default Home;