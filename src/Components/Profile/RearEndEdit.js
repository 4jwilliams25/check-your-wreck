// TODO: Change the typography's back to InputLabel's and see if you can make the width on the inputs look pretty

import React, { useState } from 'react';
import {
    ExpansionPanelDetails,
    Fab,
    Zoom,
    Grid,
    Typography,
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

export default function RearEndEdit({ loss, handleEditClick }) {
    const classes = useStyles();
    const theme = useTheme();
    const [hover, setHover] = useState(true);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // Form Hooks
    const [pushed, setPushed] = React.useState(loss.pushed)
    const [numberOfCars, setNumberOfCars] = React.useState(loss.number_of_cars)
    const [carPosition, setCarPosition] = React.useState(loss.car_position)

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
                                        <Grid item xs={12}>
                                            <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>How many cars were involved in the accident?</Typography>
                                                <Select
                                                    value={numberOfCars}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setNumberOfCars(e.target.value)}
                                                >
                                                    <MenuItem value="2">2</MenuItem>
                                                    <MenuItem value=">2">>2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Where was your car?</Typography>
                                                <Select
                                                    value={carPosition}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setCarPosition(e.target.value)}
                                                >
                                                    <MenuItem value="front">front</MenuItem>
                                                    <MenuItem value="back">back</MenuItem>
                                                    {numberOfCars === ">2" ? <MenuItem value="middle">Somewhere in the middle</MenuItem> : ''}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                            {loss && loss.pushed ? (
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classes.formControl} variant="filled">
                                                <Typography ref={inputLabel}>Did you hit the car in front of you first or were you pushed?</Typography>
                                                <Select
                                                    value={pushed}
                                                    labelWidth={labelWidth}
                                                    onChange={(e) => setPushed(e.target.value)}
                                                >
                                                    <MenuItem value="rearEnded">I hit the car in front, and then was rear ended</MenuItem>
                                                    <MenuItem value="pushed">I was hit from behind first, then pushed into the car in front of me</MenuItem>
                                                </Select>
                                            </FormControl>
                                                </Grid>
                                            ) : ""}
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