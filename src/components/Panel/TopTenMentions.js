import React from "react";
import Panel from "./Panel";
import Title from "../Title";
import TestOne from "../Practice/Practice";

function TopTenMentions() {
    return (
        <Panel>
            <Title>Top Ten Mentions!</Title>
            <div>{TestOne}</div>
        </Panel>
    );
}

export default TopTenMentions;
