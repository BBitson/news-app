import React from "react";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";
import Panel from "./Panel";
import "./Panel.module.css";
import { Link } from "react-router-dom";

function MostMentions() {
    const { mostMentioned } = useArticles();
    return (
        <Panel>
            <Link to={"/ticker/" + mostMentioned}>
                <Title>Most Mentioned Ticker! </Title>
                <span>{mostMentioned}</span>
            </Link>
        </Panel>
    );
}

export default MostMentions;
