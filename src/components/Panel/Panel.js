import React from "react";
import classes from "./Panel.module.css";

function Panel(props) {
    return <div className={classes.panel}>{props.children}</div>;
}

export default Panel;
