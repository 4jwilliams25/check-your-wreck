import React, { useState } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Paper,
    Fab,
    Zoom,
    Grid,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    useTheme
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClearIcon from '@material-ui/icons/Clear';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: "40px",
    },
    fabDelete: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabEdit: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        marginBottom: "60px",
    },
}))

export default function BackingLoss({ loss }) {
    const classes = useStyles();
    const theme = useTheme();
    const [hover, setHover] = useState(false);

    const toggleHoverState = () => {
        setHover(!hover)
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    }

    return (
        <ExpansionPanel>
                        <Paper elevation={3}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="primary" className={classes.heading}>Backing Loss</Typography>
                                <Typography>{loss.date_created}</Typography>
                            </ExpansionPanelSummary>
                        </Paper>
                        
                        <ExpansionPanelDetails
                            onMouseEnter={toggleHoverState}
                            onMouseLeave={toggleHoverState}
                        >
                            <Grid container spacing={2}>
                                <div>
                                    <List>
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="Were you backing or going forward at the time of impact?"
                                                    secondary={loss.iv_action}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="Did you see the other car before the impact?"
                                                    secondary={loss.saw_other_car}
                                                />
                                            </ListItem>
                                        </Grid>
                                            {loss.evasive_action ? (
                                                <Grid item xs={12} md={6}>
                                                    <ListItem>
                                                        <ListItemText 
                                                            primary="Did you take any evasive action?"
                                                            secondary={loss.evasive_action}
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            ) : ""}
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="Was your vehicle stopped or in motion at the time of impact?"
                                                    secondary={loss.iv_stopped_or_moving}
                                                />
                                            </ListItem>
                                        </Grid>
                                        {loss.iv_distance_out ? (
                                                <Grid item xs={12} md={6}>
                                                    <ListItem>
                                                        <ListItemText 
                                                            primary="How far out of your spot were you?"
                                                            secondary={loss.iv_distance_out}
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            ) : ""}
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="Was the other vehicle backing or moving forward at the time of impact?"
                                                    secondary={loss.cv_action}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="Was the other vehicle stopped or in motion?"
                                                    secondary={loss.cv_stopped_or_moving}
                                                />
                                            </ListItem>
                                        </Grid>
                                        {loss.cv_distance_out ? (
                                                <Grid item xs={12} md={6}>
                                                    <ListItem>
                                                        <ListItemText 
                                                            primary="How far out of their spot was the other car?"
                                                            secondary={loss.cv_distance_out}
                                                        />
                                                    </ListItem>
                                                </Grid>
                                            ) : ""}
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="What was your car's point of impact?"
                                                    secondary={loss.iv_poi}
                                                />
                                            </ListItem>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <ListItem>
                                                <ListItemText 
                                                    primary="What was the other car's point of impact?"
                                                    secondary={loss.cv_poi}
                                                />
                                            </ListItem>
                                        </Grid>
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
                                    >
                                        <ClearIcon />
                                    </Fab>
                                </Zoom>
                                </div>
                                )}
                        </ExpansionPanelDetails>

                    </ExpansionPanel>
    )
}