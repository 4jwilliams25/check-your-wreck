import React, { useState } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Paper,
    Fab,
    Zoom,
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
    },
    fabDelete: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabEdit: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    }
}))

export default function ProfileLoss(props) {
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

    switch (props.loss.accident_type) {
        case 'rearEnd': 
            return (
                    <ExpansionPanel>
                        <Paper elevation={3}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="primary" className={classes.heading}>Rear End Loss</Typography>
                            </ExpansionPanelSummary>
                        </Paper>
                        
                        <ExpansionPanelDetails
                            onMouseEnter={toggleHoverState}
                            onMouseLeave={toggleHoverState}
                        >
                            <Typography variant="subtitle2">Blah blah blah</Typography>
                            {hover && (
                                <div>
                                <Zoom
                                    in={3}
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
                                    in={3}
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
            );
        case 'laneChange':
            return (
                <ExpansionPanel>
                <Paper elevation={3}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color="primary" className={classes.heading}>Lane Change Loss</Typography>
                    </ExpansionPanelSummary>
                </Paper>
                
                <ExpansionPanelDetails
                    onMouseEnter={toggleHoverState}
                    onMouseLeave={toggleHoverState}
                >
                    <Typography variant="subtitle2">Blah blah blah</Typography>
                    {hover && (
                        <div>
                        <Zoom
                            in={3}
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
                            in={3}
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
                );
        case 'backing':
            return (
                <ExpansionPanel>
                        <Paper elevation={3}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography color="primary" className={classes.heading}>Backing Loss</Typography>
                            </ExpansionPanelSummary>
                        </Paper>
                        
                        <ExpansionPanelDetails
                            onMouseEnter={toggleHoverState}
                            onMouseLeave={toggleHoverState}
                        >
                            <Typography variant="subtitle2">Blah blah blah</Typography>
                            {hover && (
                                <div>
                                <Zoom
                                    in={3}
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
                                    in={3}
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
            );
        default: 
            return []
    }
}