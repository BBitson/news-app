import React from "react";
import "./HomePage.css";
import SwipeableTextMobileStepperBullish from "../StepperBullish/StepperBullish";
import SwipeableTextMobileStepperBearish from "../StepperBearish/StepperBearish";
import MostMentions from "../Panel/MostMentions";
import MostBearish from "../Panel/MostBearish";
import MostBullish from "../Panel/MostBullish";
import HorizontalNonLinearStepper from "../Stepper/Stepper";

function HomePage() {
    return (
        <div>
            <div className="container">
                <div className="swiper-wrapper">
                    <div className="swiper">
                        <MostMentions />
                        <MostBullish className="under" />
                        <MostBearish />
                    </div>
                </div>
            </div>
            <HorizontalNonLinearStepper />

            <div className="grid">
                <h1 className="bull"> Bullish Articles </h1>
                <SwipeableTextMobileStepperBullish />
            </div>
            <div>
                <h1 className="bear"> Bearish Articles </h1>
                <SwipeableTextMobileStepperBearish />
            </div>
        </div>
    );
}
export default HomePage;
