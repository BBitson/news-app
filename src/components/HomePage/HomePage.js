import React from "react";
import "./HomePage.css";
import Slider from "../Slider";
import SliderTwo from "../Slider";

function HomePage() {
    return (
        <div className="grid">
            <Slider />
            <div className="">
                <SliderTwo />
            </div>
        </div>
    );
}
export default HomePage;
