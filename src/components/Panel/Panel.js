import { Card, CardContent } from "@mui/material";
import React from "react";
import classes from "./Panel.module.css";

function Panel(props) {
    return (
        <Card className={classes.panel}>
            <CardContent>{props.children}</CardContent>
        </Card>
    );
}

export default Panel;
