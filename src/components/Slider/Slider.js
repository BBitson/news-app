import React from "react";
import SwipeableViews from "react-swipeable-views";
import MostBearish from "../Panel/MostBearish";
import MostBullish from "../Panel/MostBullish";
import MostMentions from "../Panel/MostMentions";
import "./Slider.css";

const styles = {
    root: {
        padding: "0 30px 0 0",
    },
    slideContainer: {
        padding: "0 10px 0 0",
    },
    slide: {
        padding: 15,
        minHeight: 225,
    },
    slide1: {
        background: "#000000",
    },
    slide2: {
        background: "#33CC33",
    },
    slide3: {
        background: "#CC0000",
    },
};
// added style={styles.root} slideStyle={styles.slideContainer} to swipeableViews,, looking fo element.stlye to change padding
const Slider = () => (
    <SwipeableViews
        style={styles.root}
        slideStyle={styles.slideContainer}
        enableMouseEvents
    >
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <MostMentions className="sliderimg" />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <MostBullish />
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <MostBearish />
        </div>
    </SwipeableViews>
);

export default Slider;
