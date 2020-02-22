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

export default function BackingForm(props) {
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

    let ivDistanceOut = (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>How far out of your parking space was your vehicle at the time of the impact?</FormLabel>
            <RadioGroup required value={props.ivDistanceOut} onChange={e => props.setIvDistanceOut(e.target.value)}>
                <FormControlLabel value="<quarter" control={<Radio />} label={"Less than a quarter of the way"} />
                <FormControlLabel value="quarter" control={<Radio />} label={"Quarter of the way out"} />
                <FormControlLabel value="half" control={<Radio />} label={"Halfway out"} />
                <FormControlLabel value="3quarters" control={<Radio />} label={"Three quarters of the way"} />
                <FormControlLabel value="fully" control={<Radio />} label={"All the way out of the space"} />
            </RadioGroup>
        </FormControl>
    )

    let cvDistanceOut = (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel>How far out of their parking space was the other vehicle at the time of the impact?</FormLabel>
            <RadioGroup required value={props.cvDistanceOut} onChange={e => props.setCvDistanceOut(e.target.value)}>
                <FormControlLabel value="<quarter" control={<Radio />} label={"Less than a quarter of the way"} />
                <FormControlLabel value="quarter" control={<Radio />} label={"Quarter of the way out"} />
                <FormControlLabel value="half" control={<Radio />} label={"Halfway out"} />
                <FormControlLabel value="3quarters" control={<Radio />} label={"Three quarters of the way"} />
                <FormControlLabel value="fully" control={<Radio />} label={"All the way out of the space"} />
            </RadioGroup>
        </FormControl>
    )

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Were you backing or going forward at the time of the impact?</FormLabel>
                            <RadioGroup required value={props.ivAction}  onChange={e => props.setIvAction(e.target.value)}>
                            <FormControlLabel value="backing" control={<Radio />} label={"I was backing"} />
                            <FormControlLabel value="forward" control={<Radio />} label={"I was moving forward"} />
                            <FormControlLabel value="neither" control={<Radio />} label={"Neither"} />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Did you see the other car before the impact?</FormLabel>
                            <RadioGroup required value={props.sawOtherCar} onChange={e => props.setSawOtherCar(e.target.value)}>
                                <FormControlLabel value="yes" control={<Radio />} label={"I saw the other vehicle before the impact"} />
                                <FormControlLabel value="no" control={<Radio />} label={"I didn't see the vehicle until or after the impact"} />
                            </RadioGroup>
                        </FormControl>

                        {props.sawOtherCar === "yes" ? evasiveAction : ''}

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Was your vehicle stopped or in motion at the time of the impact?</FormLabel>
                            <RadioGroup  required value={props.ivStoppedOrMoving} onChange={e => props.setIvStoppedOrMoving(e.target.value)}>
                                <FormControlLabel value="stopped" control={<Radio />} label={"My car was stopped"} />
                                <FormControlLabel value="moving" control={<Radio />} label={"My car was in motion"} />
                            </RadioGroup>
                        </FormControl>

                        {props.ivAction === "backing" ? ivDistanceOut : ''}
                    </div>
                );
            case 1:
                return (
                    <div>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Was the other vehicle backing or moving forward at the time of the impact?</FormLabel>
                            <RadioGroup required value={props.cvAction} onChange={e => props.setCvAction(e.target.value)}>
                            <FormControlLabel value="backing" control={<Radio />} label={"They were backing"} />
                            <FormControlLabel value="forward" control={<Radio />} label={"They were moving forward"} />
                            <FormControlLabel value="stopped" control={<Radio />} label={"Neither"} />
                            <FormControlLabel value="unknown" control={<Radio />} label={"I dont know"} />
                            </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Was the other vehicle stopped or in motion at the time of the impact?</FormLabel>
                            <RadioGroup  required value={props.cvStoppedOrMoving} onChange={e => props.setCvStoppedOrMoving(e.target.value)}>
                                <FormControlLabel value="stopped" control={<Radio />} label={"Their car was stopped"} />
                                <FormControlLabel value="moving" control={<Radio />} label={"Their car was in motion"} />
                                <FormControlLabel value="unknown" control={<Radio />} label={"I don't know"} />
                            </RadioGroup>
                        </FormControl>

                        {props.cvAction === "backing" ? cvDistanceOut : ''}
                    </div>
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

    return (
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