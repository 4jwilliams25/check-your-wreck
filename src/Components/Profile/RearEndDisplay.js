import React, { useState } from 'react';
import {
    ExpansionPanelDetails,
    Zoom,
    Fab,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    useTheme
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import BuildIcon from '@material-ui/icons/Build';

import { useDispatch } from 'react-redux';
import { removeRearEnd } from '../../Store/rearEnders/rearEndActions';

const useStyles = makeStyles(theme => ({
    fabDelete: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabEdit: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        marginTop: "60px",
    },
}))

export default function RearEndDisplay({ loss, handleEditClick }) {
    const classes = useStyles();
    const theme = useTheme();
    const [hover, setHover] = useState(true);
    const dispatch = useDispatch();

    // const toggleHoverState = () => {
    //     setHover(!hover)
    // }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    const handleRemove = id => {
        dispatch(removeRearEnd(id))
    }

    return (
        <ExpansionPanelDetails
                            // onMouseEnter={toggleHoverState}
                            // onMouseLeave={toggleHoverState}
                        >
                            <Grid container spacing={2}>
                                <div>
                                    <List>
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="How many cars were there?"
                                                    secondary={loss.number_of_cars}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="Where was your car?"
                                                    secondary={loss.car_position}
                                                />
                                            </ListItem>
                                        </Grid>
                                            {loss.pushed ? (
                                                <Grid item xs={12} md={6}>
                                                    <ListItem>
                                                        <ListItemText 
                                                            primary="Did you hit the car in front of you first or were you pushed?"
                                                            secondary={loss.pushed}
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            ) : ""}
                                    </List>
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
                                        className={classes.fabEdit}
                                        onClick={() => handleEditClick()}
                                    >
                                        <BuildIcon />
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
                                        className={classes.fabDelete}
                                        onClick={() => handleRemove(loss.id)}
                                    >
                                        <ClearIcon />
                                    </Fab>
                                </Zoom>
                                </div>
                                )}
                        </ExpansionPanelDetails>
    )
}