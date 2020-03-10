import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    Paper,
    makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import RearEndDisplay from './RearEndDisplay';
import RearEndEdit from './RearEndEdit';

const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: "40px",
    },
}))

export default function RearEndLoss({ loss }) {
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
                                <Typography color="primary" className={classes.heading}>Rear End Loss</Typography>
                            <Typography>{loss.date_created}</Typography>
                            </ExpansionPanelSummary>
                        </Paper>
                        {edit === false ? (
                        <RearEndDisplay loss={loss} handleEditClick={handleEditClick}  />
                        ) : (
                        <RearEndEdit loss={loss} handleEditClick={handleEditClick} />
                        )
                        }
                    </ExpansionPanel>
    )
}