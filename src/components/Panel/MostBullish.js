import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";

function MostBullish() {
    const { mostBullish } = useArticles();
    return (
        <Panel>
            <Title>Most Bullish!</Title>
            <h1>{mostBullish.TickerRef}</h1>
        </Panel>
    );
}

export default MostBullish;
