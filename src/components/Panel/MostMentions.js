import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";

function MostMentions() {
    const { mostMentioned } = useArticles();
    return (
        <div className="imgs">
            <Panel className="imgs">
                <Title>Most Mentioned Ticker!</Title>
                <h1>{mostMentioned}</h1>
            </Panel>
        </div>
    );
}

export default MostMentions;
