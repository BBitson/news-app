import React from "react";
import "./HomePage.css";
import Slider from "../Slider";
import Slider2 from "../Slider";

function HomePage() {
    return (
        <div className="grid">
            <Slider />
            <div className="">
                <Slider2 />
            </div>
        </div>
    );
}
export default HomePage;
