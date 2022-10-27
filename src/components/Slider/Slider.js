import React from "react";
import SwipeableViews from "react-swipeable-views";
import MostBearish from "../Panel/MostBearish";
import MostBullish from "../Panel/MostBullish";
import MostMentions from "../Panel/MostMentions";

const styles = {
    slide: {
        padding: 15,
        minHeight: 225,
        color: "#fff",
    },
    slide1: {
        background: "#B3DC5A",
    },
    slide2: {
        background: "#B3DC4A",
    },
    slide3: {
        background: "#6AC0FF",
    },
};

const Slider = () => (
    <SwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <MostMentions />
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
