import React from "react";
import "./HomePage.css";
import MostMentions from "../Panel/MostMentions";
import MostBullish from "../Panel/MostBullish";
import MostBearish from "../Panel/MostBearish";
import TopTenMentions from "../Panel/TopTenMentions";
import Slider from "../Slider";

function HomePage() {
    return (
        <div className="grid">
            <Slider />
            <div className="most-mentions">
                <MostMentions />
            </div>
            <div className="most-bullish">
                <MostBullish />
            </div>
            blah blag
            <div className="most-bearish">
                <MostBearish />
            </div>
            <div className="top-ten-mentions">
                <TopTenMentions />
            </div>
        </div>
    );
}

export default HomePage;
