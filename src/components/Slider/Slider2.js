import { Card } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import MostBearish from "../Panel/MostBearish";
import MostBullish from "../Panel/MostBullish";
import MostMentions from "../Panel/MostMentions";

const styles = {
    root: {
        padding: "0 30px",
    },
    slideContainer: {
        padding: "0 10px",
    },
    slide: {
        padding: "15px 25px 15px 15px",
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

const Slider2 = () => (
    <SwipeableViews
        style={styles.root}
        slideStyle={styles.slideContainer}
        enableMouseEvents
    >
        <Card style={Object.assign({}, styles.slide, styles.slide1)}>
            <MostBullish />
        </Card>
        <Card style={Object.assign({}, styles.slide, styles.slide2)}>
            <MostMentions />
        </Card>
        <Card style={Object.assign({}, styles.slide, styles.slide3)}>
            <MostBearish />
        </Card>
    </SwipeableViews>
);
export default Slider2;
