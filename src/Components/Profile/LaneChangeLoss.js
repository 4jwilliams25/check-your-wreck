import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    Paper,
    makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LaneChangeDisplay from './LaneChangeDisplay';
import LaneChangeEdit from './LaneChangeEdit';

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

export default function LaneChangeLoss({ loss }) {
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
                        <Typography color="primary" className={classes.heading}>Lane Change Loss</Typography>
                        <Typography>{loss.date_created}</Typography>
                    </ExpansionPanelSummary>
                </Paper>
                {edit === false ? (
                        <LaneChangeDisplay loss={loss} handleEditClick={handleEditClick} />
                        ) : (
                        <LaneChangeEdit loss={loss} handleEditClick={handleEditClick} />
                        )
                        }

            </ExpansionPanel>
    )
}