// TODO: institute a user table, userId, and maybe a date on the loss objects, or refactor all losses into one table and then filter losses for the profile by userId and sort

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    Typography,
    makeStyles,
} from '@material-ui/core';

import ProfileLoss from './ProfileLoss';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    title: {
        margin: 30,
    },
    button: {
        marginTop: 20,
    }
}))

export default function Profile() {
    const classes = useStyles();

    const rearEnds = useSelector(state => state.rearEnds);
    const laneChanges = useSelector(state => state.laneChanges);
    const backings = useSelector(state => state.backings);

    const rearEndLosses = rearEnds && rearEnds.map((loss, i) => {
        return (
            <ProfileLoss key={i} loss={loss} />
        )
      });
    const laneChangeLosses = laneChanges && laneChanges.map((loss, i) => {
        return (
            <ProfileLoss key={i} loss={loss} />
        )
      });
    const backingLosses = backings && backings.map((loss, i) => {
        return (
            <ProfileLoss key={i} loss={loss} />
        )
      });

    return (
    <div className={classes.root}>
        <Typography
            className={classes.title} 
            variant="h6" 
            align="center" 
            color="primary"
        >
            My Losses
        </Typography>
        {rearEndLosses}
        {laneChangeLosses}
        {backingLosses}
        <Link to="/" style={{textDecoration: "none"}}>
            <Button variant="contained" color="primary" className={classes.button}>Back</Button>
        </Link>
    </div>
    )
}