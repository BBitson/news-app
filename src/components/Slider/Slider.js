import { Card } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import MostBearish from "../Panel/MostBearish";
import MostBullish from "../Panel/MostBullish";
import MostMentions from "../Panel/MostMentions";
import classes from "./Slider.css";

const Slider = () => (
    <SwipeableViews
        style={classes.root}
        slideStyle={classes.slideContainer}
        enableMouseEvents
    >
        <Card style={Object.assign({}, classes.slide, classes.slide1)}>
            <MostMentions />
        </Card>
        <Card style={Object.assign({}, classes.slide, classes.slide2)}>
            <MostBullish />
        </Card>
        <Card style={Object.assign({}, classes.slide, classes.slide3)}>
            <MostBearish />
        </Card>
    </SwipeableViews>
);

export default Slider;
