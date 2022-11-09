import React from "react";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";
import Panel from "./Panel";
import "./Panel.module.css";
import { Link } from "react-router-dom";

function MostBullish() {
    const { mostBullish } = useArticles();
    return (
        <Panel>
            <Link to={"/ticker/" + mostBullish.TickerRef}>
                <Title> Most Bullish!</Title>
                <span>{mostBullish.TickerRef}</span>
            </Link>
        </Panel>
    );
}

export default MostBullish;
