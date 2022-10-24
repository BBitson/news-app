import React, { useEffect, useMemo, useState } from "react";
import Panel from "./Panel";
import Title from "../Title";
import useArticles from "../../data/articles/useArticles";

function MostBearish() {
    const { mostBearish } = useArticles();
    return (
        <Panel>
            <Title>Most Bearish!</Title>
            {mostBearish.TickerRef}
        </Panel>
    );
}

export default MostBearish;
