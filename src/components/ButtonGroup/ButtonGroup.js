import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import "./ButtonGroup.css";

export default function VariantButtonGroup() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                    m: 1,
                },
            }}
        >
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button className="button">Top Bullish Tickers</Button>
                <Button className="button">Top 10 Most Talked About</Button>
                <Button className="button">Top Bearish Tickers</Button>
                <Button className="button">Most recent articles</Button>
            </ButtonGroup>
        </Box>
    );
}
