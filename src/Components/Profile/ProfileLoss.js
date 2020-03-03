import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    makeStyles
} from '@material-ui/core';
import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }
}))

export default function ProfileLoss(props) {
    const classes = useStyles();

    return (
        <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography color="primary" className={classes.heading}>
                        Example
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="subtitle2">
                        Example Loss
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
    )
}