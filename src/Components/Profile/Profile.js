import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Typography,
    makeStyles,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    title: {
        marginTop: 30,
    },
}))

export default function Profile() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Typography className={classes.title} variant="h6" align="center" color="primary">My Losses</Typography>
        <Link to="/" style={{textDecoration: "none"}}>
            <Button variant="contained" color="primary">Back</Button>
        </Link>
    </div>
    )
}