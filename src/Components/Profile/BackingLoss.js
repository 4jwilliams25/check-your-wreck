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

import BackingLossDisplay from './BackingLossDisplay';
import BackingLossEdit from './BackingLossEdit';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: "40px",
    },
}))

export default function BackingLoss({ loss }) {
    const classes = useStyles();
    const [edit, setEdit] = React.useState(false);

    const handleEditClick = () => {
        setEdit(!edit)
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
                        {edit === false ? (
                        <BackingLossDisplay loss={loss} handleEditClick={handleEditClick} />
                        ) : (
                        <BackingLossEdit loss={loss} handleEditClick={handleEditClick} />
                        )
                        }
                    </ExpansionPanel>
    )
}