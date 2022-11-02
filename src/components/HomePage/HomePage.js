import React from "react";
import "./HomePage.css";
import Slider from "../Slider";
import HorizontalNonLinearStepper from "../Stepper/Stepper";
import SwipeableTextMobileStepperBullish from "../StepperBullish/StepperBullish";
import SwipeableTextMobileStepperBearish from "../StepperBearish/StepperBearish";

function HomePage() {
    return (
        <div className="grid">
            <Slider />
            {/* <div className="">
                <SliderTwo />
            </div> */}
            <HorizontalNonLinearStepper />
            <h1 className="bull"> Bullish Articles </h1>
            <SwipeableTextMobileStepperBullish />
            <h1 className="bear"> Bearish Articles </h1>
            <SwipeableTextMobileStepperBearish />
        </div>
    );
}
export default HomePage;
