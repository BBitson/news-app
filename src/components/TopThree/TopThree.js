import { React, useMemo } from "react";
import "./TopThree.css";

function TopThree(props) {
    const topBullSites = useMemo(() => {
        return (
            <div className="TopThree">
                <h2> Most Bullish Sites</h2>
                <ol>
                    <li></li>
                </ol>
            </div>
        );
    }, []);

    const topBearSites = useMemo(() => {
        return (
            <div className="TopThree">
                <h2> Most Bearish Sites</h2>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        );
    }, []);

    return {
        topBullSites,
        topBearSites,
    };
}

export default TopThree;
