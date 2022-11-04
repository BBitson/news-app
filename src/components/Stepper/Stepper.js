import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import "./Stepper.css";

const steps = [
    "Top Bullish Tickers",
    "Top 10 Most Talked About",
    "Top Bearish Tickers ",
    "Most recent articles",
];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    );
}
