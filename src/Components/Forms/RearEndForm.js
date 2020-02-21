/* eslint-disable default-case */
import React from 'react';

import { 
    makeStyles, 
    Stepper, 
    Step, 
    StepLabel, 
    StepContent, 
    FormControl, 
    Button ,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel
} from '@material-ui/core';

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
    formControl: {
        margin: theme.spacing(3),
    },
}))

function getSteps() {
    return ['Number of Cars', 'Additional Details'];
}

export default function RearEndForm(props) {
    const classes = useStyles();

    // Conditionally Rendered Questions
    let hitOrPushed = (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Did you hit the car in front of you first or were you pushed?</FormLabel>
                <RadioGroup required value={props.pushed} onChange={e => props.setPushed(e.target.value)}>
                    <FormControlLabel value="rearEnded" control={<Radio />} label={"I hit the car in front, then was rear ended"} />
                    <FormControlLabel value="pushed" control={<Radio />} label={"I was hit from behind first, then pushed into the car in front of me"} />
                </RadioGroup>
        </FormControl>
    )
    
    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">How many cars were there?</FormLabel>
                        <RadioGroup required value={props.numberOfCars} onChange={e => props.setNumberOfCars(e.target.value)}>
                            <FormControlLabel value="2" control={<Radio />} label="Two cars" />
                            <FormControlLabel value=">2" control={<Radio />} label="More than two cars" />
                        </RadioGroup>
                    </FormControl>
                );
            case 1: 
                return (
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Where was your car?</FormLabel>
                            <RadioGroup required value={props.carPosition} onChange={e => props.setCarPosition(e.target.value)}>
                                <FormControlLabel value="front" control={<Radio />} label="The front car" />
                                <FormControlLabel value="back" control={<Radio />} label="The back car" />
                                {props.numberOfCars === ">2" ? <FormControlLabel value="middle" control={<Radio />} label="Somewhere in the middle" /> : ''}
                            </RadioGroup>
    
                        {props.carPosition === "middle" ? hitOrPushed : ''}
                    </FormControl>
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
                                        size="small"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}    
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        size="small"
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