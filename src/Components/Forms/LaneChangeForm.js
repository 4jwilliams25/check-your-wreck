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
    FormLabel,
    InputLabel,
    Select,
    MenuItem
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
    labelControl: {
        margin: theme.spacing(3),
        minWidth: 500,
    }
}))

function getSteps() {
    return ["You're actions", 'Their Actions', 'Points of Impact'];
}

export default function LaneChangeForm(props) {
    const classes = useStyles();

    let evasiveAction = (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Did you take any evasive action? (swerve, hit brakes, honk horn, etc.)</FormLabel>
            <RadioGroup required value={props.evasiveAction} onChange={e => props.setEvasiveAction(e.target.value)}>
                <FormControlLabel value="yes" control={<Radio />} label={"Yes"} />
                <FormControlLabel value="no" control={<Radio />} label={"No"} />
                <FormControlLabel value="noTime" control={<Radio />} label={"I didn't have time"} />
            </RadioGroup>
        </FormControl>
    )

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Were you going straight or changing lanes at the time of impact?</FormLabel>
                        <RadioGroup required value={props.ivAction} onChange={e => props.setIvAction(e.target.value)}>
                            <FormControlLabel value="straight" control={<Radio />} label="I was going straight in my lane" />
                            <FormControlLabel value="changing" control={<Radio />} label="I was changing lanes" />
                        </RadioGroup>

                        <FormLabel component="legend">Did you see the other car before the impact?</FormLabel>
                        <RadioGroup required value={props.sawOtherCar} onChange={e => props.setSawOtherCar(e.target.value)}>
                            <FormControlLabel value="yes" control={<Radio />} label="I saw the other car before the impact" />
                            <FormControlLabel value="no" control={<Radio />} label="I didn't see the other car until or after the impact" />
                        </RadioGroup>

                        {props.sawOtherCar === "yes" ? evasiveAction : ''}
                    </FormControl>
                );
            case 1:
                return (
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Was the other vehicle going straight or changing lanes at the time of the impact?</FormLabel>
                        <RadioGroup required value={props.cvAction} onChange={e => props.setCvAction(e.target.value)}>
                            <FormControlLabel value="straight" control={<Radio />} label="They were going straight in their lane" />
                            <FormControlLabel value="changing" control={<Radio />} label="They were changing lanes" />
                            <FormControlLabel value="unknown" control={<Radio />} label="I don't know" />
                        </RadioGroup>
                    </FormControl>
                );
            case 2:
                return (
                    <div>
                        <FormControl className={classes.labelControl}>
                            <InputLabel>What part of your car initially came into contact with the other car?</InputLabel>
                            <Select 
                                required
                                value={props.ivPoi} 
                                onChange={e => props.setIvPoi(e.target.value)}
                            >
                                <MenuItem value="frontBumper">Front Bumper</MenuItem>
                                <MenuItem value="leftFrontCorner">Driver Side Front Corner</MenuItem>
                                <MenuItem value="rightFrontCorner">Passenger Side Front Corner</MenuItem>
                                <MenuItem value="rearBumper">Rear Bumper</MenuItem>
                                <MenuItem value="leftRearCorner">Driver Side Rear Corner</MenuItem>
                                <MenuItem value="rightRearCorner">Passenger Side Rear Corner</MenuItem>
                                <MenuItem value="leftSide">Driver Side</MenuItem>
                                <MenuItem value="leftFender">Driver Side Front Fender</MenuItem>
                                <MenuItem value="leftQuarter">Driver Side Rear Quarter Panel</MenuItem>
                                <MenuItem value="rightSide">Passenger Side</MenuItem>
                                <MenuItem value="rightFender">Passenger Side Front Fender</MenuItem>
                                <MenuItem value="rightQuarter">Passenger Side Rear Quarter Panel</MenuItem>
                            </Select>
                        </ FormControl>
                        <FormControl className={classes.labelControl}>
                            <InputLabel>What part of the other car came into contact with your car?</InputLabel>
                            <Select 
                                required
                                value={props.cvPoi} 
                                onChange={e => props.setCvPoi(e.target.value)}
                            >
                                <MenuItem value="frontBumper">Front Bumper</MenuItem>
                                <MenuItem value="leftFrontCorner">Driver Side Front Corner</MenuItem>
                                <MenuItem value="rightFrontCorner">Passenger Side Front Corner</MenuItem>
                                <MenuItem value="rearBumper">Rear Bumper</MenuItem>
                                <MenuItem value="leftRearCorner">Driver Side Rear Corner</MenuItem>
                                <MenuItem value="rightRearCorner">Passenger Side Rear Corner</MenuItem>
                                <MenuItem value="leftSide">Driver Side</MenuItem>
                                <MenuItem value="leftFender">Driver Side Front Fender</MenuItem>
                                <MenuItem value="leftQuarter">Driver Side Rear Quarter Panel</MenuItem>
                                <MenuItem value="rightSide">Passenger Side</MenuItem>
                                <MenuItem value="rightFender">Passenger Side Front Fender</MenuItem>
                                <MenuItem value="rightQuarter">Passenger Side Rear Quarter Panel</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )
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