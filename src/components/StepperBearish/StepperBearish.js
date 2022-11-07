import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const imagesRef = ["news1", "news2", "news3", "news4"];

const images = [
    {
        label: (
            <span key={imagesRef[0]} className="h1">
                Yahoo Finance
            </span>
        ),
        imgPath:
            "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        label: (
            <span key={imagesRef[1]} className="h1">
                The Motley Fool
            </span>
        ),
        imgPath:
            "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        label: (
            <span key={imagesRef[2]} className="h1">
                The Economist
            </span>
        ),
        imgPath:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
        label: (
            <span key={imagesRef[3]} className="h1">
                Financial Times
            </span>
        ),
        imgPath:
            "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
];

function SwipeTextMobileStepperBearish() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 50,
                    pl: 2,
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <Paper
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
            >
                {images.map((step, index) => (
                    <div key={step.label.key}>
                        {Math.abs(activeStep - index) <= 0 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: "block",
                                    maxWidth: 400,
                                    minWidth: 400,
                                    overflow: "hidden",
                                    width: "100%",
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </Paper>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeTextMobileStepperBearish;
