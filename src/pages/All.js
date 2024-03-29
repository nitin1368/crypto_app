import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gg.css";
import Coin from "./Coin"
function All() {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response) => {
                setCoins(response.data)
                console.log(response.data)
            });
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }
    let filteredCoins;
    let light = 1;
    if (search === '') {
        light = 1;
        filteredCoins = coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())

        )
        console.log(light);
    } else {
        light = 2;

        filteredCoins = coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        )

        console.log(light);
        console.log(filteredCoins);
        if (filteredCoins.length === 0) {
            light = 4;
            console.log(light);
        }
    }

    return (

        <div className="big">

            <div className="homeinp">
                <input type="text" className="search" placeholder="Enter the coin name" onChange={handleChange} />
                {/* <button type="submit" onClick={handleChange}><img className="ss" src={Srch} alt=" search" /></button> */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />



            <div id="rohit" className={`x${light}`}>
                {light !== 4 ? <div className="hh">
                    <h1>Cryptocurrency Prices by Market Cap:</h1>
                </div> : <div className="ErrorMessage"><h1 className="Error">Please Enter Valid Coin!!!!</h1></div>}

                {filteredCoins.slice(0, 100).map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            marketcap={coin.market_cap}
                            price={coin.current_price}
                            pricechange={coin.price_change_percentage_24h}
                        />

                    );
                })}
            </div>
        </div>
    )
}
export default All;