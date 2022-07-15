import React, { useEffect, useState } from "react";
import axios from "axios"
import "./gg.css";
// import Srch from "./serch.png";
import Coin from "./Coin"
function Home() {
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
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
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
            {filteredCoins.map(coin => {
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
    )
}
export default Home;