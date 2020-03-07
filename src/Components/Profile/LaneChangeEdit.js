import React, { useState } from 'react';
import {
    ExpansionPanelDetails,
    Typography,
    Fab,
    Zoom,
    Grid,
    FormControl,
    Select,
    MenuItem,
    makeStyles,
    useTheme
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles(theme => ({
    fabBack: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        marginBottom: "60px",
    },
    fabEdit: {
        position: 'absolute',
        bottom: theme.spacing(2),
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

export default function LaneChangeEdit({ loss, handleEditClick }) {
    const classes = useStyles();
    const theme = useTheme();
    const [hover, setHover] = useState(true);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // Form Hooks
    const [ivAction, setIvAction] = React.useState(loss.iv_action);
    const [evasiveAction, setEvasiveAction] = React.useState(loss.evasive_action);
    const [sawOtherCar, setSawOtherCar] = React.useState(loss.saw_other_car);
    const [cvAction, setCvAction] = React.useState(loss.cv_action);
    const [cvPoi, setCvPoi] = React.useState(loss.cv_poi);
    const [ivPoi, setIvPoi] = React.useState(loss.iv_poi);

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

    return (
        <ExpansionPanelDetails
                    // onMouseEnter={toggleHoverState}
                    // onMouseLeave={toggleHoverState}
                >
                    <Grid container spacing={2}>
                                <div>
                                        <Grid item xs={12} md={6}>
                                            <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Were you going straight or changing lanes at the time of impact?</Typography>
                                                <Select
                                                    value={ivAction}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setIvAction(e.target.value)}
                                                >
                                                    <MenuItem value="straight">straight</MenuItem>
                                                    <MenuItem value="changing">changing</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
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
                                                <Typography ref={inputLabel}>Was the other vehicle going straight or changing lanes at the time of the impact?</Typography>
                                                <Select
                                                    value={cvAction}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setCvAction(e.target.value)}
                                                >
                                                    <MenuItem value="straight">straight</MenuItem>
                                                    <MenuItem value="changing">changing lanes</MenuItem>
                                                    <MenuItem value="unknown">I don't know</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
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
                            >
                                <PublishIcon />
                            </Fab>
                        </Zoom>
                        </div>
                        )}
                </ExpansionPanelDetails>
    )
}