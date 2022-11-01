import React from "react";
import "./HomePage.css";
import Slider from "../Slider";
import HorizontalNonLinearStepper from "../Stepper/Stepper";

function HomePage() {
    return (
        <div className="grid">
            <Slider />
            {/* <div className="">
                <SliderTwo />
            </div> */}
            <HorizontalNonLinearStepper />
        </div>
    );
}
export default HomePage;
