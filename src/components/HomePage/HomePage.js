import React from "react";
import "./HomePage.css";
import MostMentions from "../Panel/MostMentions";
import MostBullish from "../Panel/MostBullish";
import MostBearish from "../Panel/MostBearish";
import TopTenMentions from "../Panel/TopTenMentions";

function HomePage() {
    return (
        <div className="grid">
            <div className="most-mentions">
                <MostMentions />
            </div>
            <div className="most-bullish">
                <MostBullish />
            </div>
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
