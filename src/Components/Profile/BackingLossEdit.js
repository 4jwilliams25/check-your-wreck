import React, { useState } from 'react';
import {
    FormControl,
    Select,
    MenuItem,
    ExpansionPanelDetails,
    Typography,
    Fab,
    Zoom,
    Grid,
    makeStyles,
    useTheme
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublishIcon from '@material-ui/icons/Publish';

import { useDispatch } from 'react-redux';
import { updateBacking } from '../../Store/backing/backingActions';

const useStyles = makeStyles(theme => ({
    fabBack: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        marginTop: "60px",
    },
    fabEdit: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: "gold"
    },
    formControl: {
        margin: theme.spacing(1),
        midWidth: 300,
        width: "auto"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}))

export default function BackingLossEdit({ loss, handleEditClick }) {
    const classes = useStyles();
    const theme = useTheme();
    const [hover, setHover] = useState(true);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // Form State
    const [ivAction, setIvAction] = React.useState(loss.iv_action);
    const [sawOtherCar, setSawOtherCar] = React.useState(loss.saw_other_car);
    const [evasiveAction, setEvasiveAction] = React.useState(loss.evasive_action);
    const [ivStoppedOrMoving, setIvStoppedOrMoving] = React.useState(loss.iv_stopped_or_moving);
    const [ivDistanceOut, setIvDistanceOut] = React.useState(loss.iv_distance_out);
    const [cvAction, setCvAction] = React.useState(loss.cv_action);
    const [cvStoppedOrMoving, setCvStoppedOrMoving] = React.useState(loss.cv_stopped_or_moving);
    const [cvDistanceOut, setCvDistanceOut] = React.useState(loss.cv_distance_out);
    const [ivPoi, setIvPoi] = React.useState(loss.iv_poi);
    const [cvPoi, setCvPoi] = React.useState(loss.cv_poi);

    // const toggleHoverState = () => {
    //     setHover(!hover)
    // }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    const inputLabel = React.useRef(null);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const dispatch = useDispatch()

    const submitEdit = () => {
        let date = new Date();
        let currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

        const updatedLoss = {
            id: loss.id,
            accident_type: "backing",
                iv_action: ivAction,
                cv_action: cvAction,
                saw_other_car: sawOtherCar,
                evasive_action: evasiveAction,
                iv_stopped_or_moving: ivStoppedOrMoving,
                cv_stopped_or_moving: cvStoppedOrMoving,
                iv_distance_out: ivDistanceOut,
                cv_distance_out: cvDistanceOut,
                iv_poi: ivPoi,
                cv_poi: cvPoi,
                date_created: loss.date_created,
                date_updated: currentDate
        }
    
        dispatch(updateBacking(updatedLoss))

        handleEditClick()
    }

    return (
        <ExpansionPanelDetails
                            // onMouseEnter={toggleHoverState}
                            // onMouseLeave={toggleHoverState}
                        >
                            <Grid container spacing={2}>
                                <div>
                                        <Grid item xs={12} md={6}>
                                            <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Were you backing or going forward at the time of the impact?</Typography>
                                                <Select
                                                    value={ivAction}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setIvAction(e.target.value)}
                                                >
                                                    <MenuItem value="backing">backing</MenuItem>
                                                    <MenuItem value="forward">forward</MenuItem>
                                                    <MenuItem value="neither">neither</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Did you see the other car before the impact?</Typography>
                                                <Select
                                                    value={sawOtherCar}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setSawOtherCar(e.target.value)}
                                                >
                                                    <MenuItem value="yes">yes</MenuItem>
                                                    <MenuItem value="no">no</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                            {loss.evasive_action ? (
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classes.formControl} variant="filled">
                                                        <Typography ref={inputLabel}>Did you take any evasive action? (swerve, hit brakes, honk horn, etc.)</Typography>
                                                        <Select
                                                            value={evasiveAction}
                                                            labelWidth={labelWidth}
                                                            onChange={(e) => setEvasiveAction(e.target.value)}
                                                        >
                                                            <MenuItem value="yes">yes</MenuItem>
                                                            <MenuItem value="no">no</MenuItem>
                                                            <MenuItem value="noTime">I didn't have time</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                            ) : ""}
                                        <Grid item xs={12} md={6}>
                                            <FormControl className={classes.formControl} variant="filled">
                                                    <Typography ref={inputLabel}>Was your vehicle stopped or in motion at the time of the impact?</Typography>
                                                    <Select
                                                        value={ivStoppedOrMoving}
                                                        labelWidth={labelWidth}
                                                        onChange={(e) => setIvStoppedOrMoving(e.target.value)}
                                                    >
                                                        <MenuItem value="stopped">stopped</MenuItem>
                                                        <MenuItem value="moving">moving</MenuItem>
                                                    </Select>
                                                </FormControl>
                                        </Grid>
                                        {loss.iv_distance_out ? (
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classes.formControl} variant="filled">
                                                        <Typography ref={inputLabel}>How far out of your parking space was your vehicle at the time of the impact?</Typography>
                                                        <Select
                                                            value={ivDistanceOut}
                                                            labelWidth={labelWidth}
                                                            onChange={(e) => setIvDistanceOut(e.target.value)}
                                                        >
                                                        <MenuItem value="<quarter">Less than a quarter</MenuItem>
                                                        <MenuItem value="quarter">quarter</MenuItem>
                                                        <MenuItem value="half">half way</MenuItem>
                                                        <MenuItem value="3quarters">3 quarters</MenuItem>
                                                        <MenuItem value="fully">All the way out</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </Grid>
                                            ) : ""}
                                        <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Was the other vehicle backing or moving forward at the time of the impact?</Typography>
                                                <Select
                                                    value={cvAction}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setCvAction(e.target.value)}
                                                >
                                                    <MenuItem value="backing">Backing</MenuItem>
                                                    <MenuItem value="forward">Forward</MenuItem>
                                                    <MenuItem value="stopped">Neither</MenuItem>
                                                    <MenuItem value="unknown">I don't know</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Was the other vehicle stopped or in motion at the time of the impact?</Typography>
                                                <Select
                                                    value={cvStoppedOrMoving}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setCvStoppedOrMoving(e.target.value)}
                                                >
                                                    <MenuItem value="stopped">Stopped</MenuItem>
                                                    <MenuItem value="moving">Moving</MenuItem>
                                                    <MenuItem value="unknown">I don't know</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        {loss.cv_distance_out ? (
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classes.formControl} variant="filled">
                                                        <Typography ref={inputLabel}>How far out of their parking space was the other vehicle at the time of the impact?</Typography>
                                                        <Select
                                                            value={cvDistanceOut}
                                                            labelWidth={labelWidth}
                                                            onChange={(e) => setCvDistanceOut(e.target.value)}
                                                        >
                                                        <MenuItem value="<quarter">Less than a quarter</MenuItem>
                                                        <MenuItem value="quarter">quarter</MenuItem>
                                                        <MenuItem value="half">half way</MenuItem>
                                                        <MenuItem value="3quarters">3 quarters</MenuItem>
                                                        <MenuItem value="fully">All the way out</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                </Grid>
                                            ) : ""}
                                        <Grid item xs={12} md={6}>
                                            <FormControl className={classes.formControl} variant="filled">
                                                        <Typography ref={inputLabel}>What part of your car initially came into contact with the other car?</Typography>
                                                        <Select
                                                            value={ivPoi}
                                                            labelWidth={labelWidth}
                                                            onChange={(e) => setIvPoi(e.target.value)}
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
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl} variant="filled">
                                                        <Typography ref={inputLabel}>What part of the other car came into contact with your car?</Typography>
                                                        <Select
                                                            value={cvPoi}
                                                            labelWidth={labelWidth}
                                                            onChange={(e) => setCvPoi(e.target.value)}
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
                                        </Grid>
                                </div>
                            </Grid>
                            {hover && (
                                <div>
                                <Zoom
                                    in={true}
                                    timeout={transitionDuration}
                                    style={{
                                        transitionDelay: transitionDuration.exit,
                                    }}
                                    unmountOnExit
                                >
                                    <Fab
                                        color="primary"
                                        size="small"
                                        className={classes.fabBack}
                                        onClick={() => handleEditClick()}
                                    >
                                        <ArrowBackIcon />
                                    </Fab>
                                </Zoom>
                                <Zoom
                                    in={true}
                                    timeout={transitionDuration}
                                    style={{
                                        transitionDelay: transitionDuration.exit,
                                    }}
                                    unmountOnExit
                                >
                                    <Fab
                                        color="secondary"
                                        size="small"
                                        className={classes.fabEdit}
                                        onClick={() => submitEdit()}
                                    >
                                        <PublishIcon />
                                    </Fab>
                                </Zoom>
                                </div>
                                )}
                        </ExpansionPanelDetails>
    )

}