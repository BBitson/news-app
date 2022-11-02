import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";
import classes from "./Panel.module.css";

function MostMentions() {
    const { mostMentioned } = useArticles();
    return (
        <Panel className={classes.img}>
            <Title>Most Mentioned Ticker!</Title>
            <h1>{mostMentioned}</h1>
        </Panel>
    );
}

export default MostMentions;
