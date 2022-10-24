import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import classes from "./Panel.module.css";
import TopThree from "../TopThree";
import useArticles from "../../data/articles/useArticles";

function MostMentions() {
    const { mostMentioned, topMentionBullish, topMentionBearish } =
        useArticles();
    const { topBullSites, topBearSites } = TopThree();

    return (
        <Panel>
            <Title>Most Mentioned!</Title>
            <h3>TICKER:{mostMentioned}</h3>
            <div className={classes.amount}>
                <h3>Bullishness Average: {topMentionBullish}</h3>
                <h3>Bearishness Average: {topMentionBearish}</h3>
            </div>
            <div className={classes.row}>
                <div>{topBullSites}</div>
                <div>{topBearSites}</div>
            </div>
        </Panel>
    );
}

export default MostMentions;
