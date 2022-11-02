import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

const steps = ["Top 10 Mentioned", "Top 10 Bullish", "Top 10 Bearish"];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
