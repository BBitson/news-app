import React from "react";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";
import Panel from "./Panel";
import "./Panel.module.css";

function MostMentions() {
    const { mostMentioned } = useArticles();
    return (
        <Panel>
            <Title>Most Mentioned Ticker! </Title>
            <h2>{mostMentioned}</h2>
        </Panel>
    );
}

export default MostMentions;
