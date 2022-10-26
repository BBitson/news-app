import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";

function MostMentions() {
    const { mostMentioned } = useArticles();
    return (
        <Panel>
            <Title>Most Mentioned Ticker!</Title>
            {mostMentioned}
        </Panel>
    );
}

export default MostMentions;
