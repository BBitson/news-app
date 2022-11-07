import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";
import "./Panel.module.css";

function MostBearish() {
    const { mostBearish } = useArticles();
    return (
        <Panel>
            <Title>Most Bearish!</Title>
            <h2>{mostBearish.TickerRef}</h2>
        </Panel>
    );
}

export default MostBearish;
