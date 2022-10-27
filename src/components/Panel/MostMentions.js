import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";

function MostMentions() {
    const { mostMentioned } = useArticles();
    return (
        <Panel>
            <Title>Most Mentioned Ticker!</Title>
            <h1>{mostMentioned}</h1>
        </Panel>
    );
}

export default MostMentions;
