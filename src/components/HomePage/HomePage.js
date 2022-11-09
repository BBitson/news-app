import React from "react";
import "./HomePage.css";
import SwipeTextMobileStepperBullish from "../StepperBullish/StepperBullish";
import SwipeTextMobileStepperBearish from "../StepperBearish/StepperBearish";
import MostMentions from "../Panel/MostMentions";
import MostBearish from "../Panel/MostBearish";
import MostBullish from "../Panel/MostBullish";
import ButtonGroup from "../ButtonGroup";

function HomePage() {
    return (
        <div>
            <div className="align">
                <div className="container">
                    <div className="swiper-wrapper">
                        <div className="swiper">
                            <MostBullish />
                            <MostMentions />
                            <MostBearish />
                        </div>
                    </div>
                </div>
            </div>
            <div className="align">
                <ButtonGroup />
            </div>

            <div className="grid">
                <h1 className="bull"> Bullish Articles </h1>
                <SwipeTextMobileStepperBullish />
            </div>
            <div className="grid">
                <h1 className="bear"> Bearish Articles </h1>
                <SwipeTextMobileStepperBearish />
            </div>
        </div>
    );
}
export default HomePage;
