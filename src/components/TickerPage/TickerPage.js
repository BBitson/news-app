import React from "react";
import { useParams } from "react-router-dom";
import useArticles from "../../data/articles/useArticles";
import "./TickerPage.css";

function TickerPage() {
    const { getArticlesByTicker } = useArticles();
    const { ticker } = useParams();
    const articles = getArticlesByTicker(ticker);
    console.log(articles);
    return <div>{ticker}</div>;
}
export default TickerPage;
