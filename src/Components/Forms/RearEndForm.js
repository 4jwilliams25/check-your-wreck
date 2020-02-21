import React from 'react';

import { makeStyles, Stepper, Step, StepLabel, StepContent, FormControl, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}))

function getSteps() {
    return ['Number of Cars', 'Additional Details'];
}

export default function RearEndForm(props) {
    const classes = useStyles();

    // Conditionally Rendered Questions
    let hitOrPushed = (
        <div>
            <div>Did you hit the car in front of you first or were you pushed?</div>
                <select required onChange={e => props.setPushed(e.target.value)}>
                    <option value=""></option>
                    <option value="rearEnded">
                        I hit the car in front, then was rear ended
                    </option>
                    <option value="pushed">
                        I was hit from behind first, then pushed into the car in front of me
                    </option>
                </select>
        </div>
    )
    
    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <div>How many cars were there?</div>
                        <select required onChange={e => props.setNumberOfCars(e.target.value)}>
                            <option value=""></option>
                            <option value="2">Two cars</option>
                            <option value=">2">More than two cars</option>
                        </select>
                    </div>
                );
            case 1: 
                return (
                    <div>
                        <div>Where was your car?</div>
                            <select required onChange={e => props.setCarPosition(e.target.value)}>
                                <option value=""></option>
                                <option value="front">The front car</option>
                                <option value="back">The back car</option>
                                {props.numberOfCars === ">2" ? <option value="middle">Somewhere in the middle</option> : ''}
                            </select>
    
                            <br />
    
                        {props.carPosition === "middle" ? hitOrPushed : ''}
                    </div>
                );
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return(
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <FormControl>{getStepContent(index)}</FormControl>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}    
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}