import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";
import "./Panel.module.css";
import { Link } from "react-router-dom";

function MostBearish() {
    const { mostBearish } = useArticles();
    return (
        <Panel>
            <Link to={"/ticker/" + mostBearish.TickerRef}>
                <Title>Most Bearish!</Title>
                <span>{mostBearish.TickerRef}</span>
            </Link>
        </Panel>
    );
}

export default MostBearish;
